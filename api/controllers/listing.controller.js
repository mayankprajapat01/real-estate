import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}

export const deleteListing = async (req, res, next) => {
    console.log(req.params.id);
    const listing = await Listing.findById(req.params.id);
    // console.log(listing);
    if (!listing) {
        return next(errorHandler(404, 'Listing not found'));
    }
    //console.log(req.user._id);
    //console.log(listing.userRef);
    if ((req.user._id || req.user.id) !== listing.userRef) {
        next(errorHandler(401, 'You can only access your own listings'));
    }
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Listing has been deleted!');
    } catch (error) {
        next(error);
    }

}

export const updateListing = async (req, res, next) => {
    //console.log('hello');
    const listing = await Listing.findById(req.params.id);
    //console.log(listing);
    if (!listing) {
        return next(errorHandler(404, 'listing not found!'));
    }
    if ((req.user._id || req.user.id) !== listing.userRef) {
        return next(errorHandler(401, 'You can only update your own listing!'));
    }
    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedListing);
    } catch (error) {
        next(error);
    }
}

export const getListing = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return next(errorHandler(404, 'Listing not found!'));
        }
        res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
}

export const getListings = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;
        let offer = req.query.offer;

        if (offer === undefined || offer === 'false') {
            offer = { $in: [false, true] };
        }
        let furnished = req.query.furnished;
        if (furnished === undefined || furnished === 'false') {
            furnished = { $in: [false, true] };
        }
        let parking = req.query.parking;
        if (parking === undefined || parking === 'false') {
            parking = { $in: [false, true] };
        }

        let type = req.query.type;
        if (type === undefined || type === 'all') {
            type = { $in: ['sale', 'rent'] };
        }
        const searchTerm = req.query.searchTerm || '';
        const sort = req.query.sort || 'createdAt';
        const order = req.query.order || 'desc';
        const listing = await Listing.find({
            name: { $regex: searchTerm, $options: 'i' },
            offer,
            furnished,
            parking,
            type
        }).sort({
            [sort]: order
        }).limit(limit).skip(startIndex);

        return res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
}