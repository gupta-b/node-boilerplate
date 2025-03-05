const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route GET /api.contact
//@access private 
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact)
})

//@desc get id contact
//@route GET /api.contact/:id
//@access private 
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404).send();
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
})

//@desc create new contacts
//@route POST /api.contact
//@access private 
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone} = req.body;
    if (!name || !email || !phone) {
        throw new Error("All the fields are mandate!!")
    }
    const newContact = await Contact.create({
        name, email, phone, user_id: req.user.id
    }) 
    res.status(201).json(newContact);
})

//@desc update contacts
//@route PUT /api.contact/:id
//@access private 
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact)
})


//@desc delete contacts
//@route delete /api.contact/:id
//@access private 
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne({_id: req.params.id });
    res.status(200).json(contact)

})

module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};