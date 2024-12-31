//@desc get all contacts
//@route GET /api.contact
//@access public 
const getContacts = (req, res) => {
    res.status(200).json({
        message: "get cont"
    })
}

//@desc get id contact
//@route GET /api.contact/:id
//@access public 
const getContact = (req, res) => {
    res.status(200).json({
         message: `get contact  ${req.params.id}`
    })
}

//@desc create new contacts
//@route POST /api.contact
//@access public 
const createContact = (req, res) => {
    console.log(req.body)
    res.status(201).json({
        message: "get cont"
    })
}

//@desc update contacts
//@route PUT /api.contact/:id
//@access public 
const updateContact = (req, res) => {
    res.status(200).json({
        message: `update ${req.params.id}`
    })
}

//@desc delete contacts
//@route delete /api.contact/:id
//@access public 
const deleteContact = (req, res) => {
    res.status(200).json({
        message: `remove  ${req.params.id}`
    })
}

module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};