const StaffProfile = require("../models/staffProfile"); 
const Shift = require("../models/shift"); 

const staffProfile_index = (req, res) => {
    StaffProfile.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("managerFunctions/index", { title: "All Staff", staffProfiles: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const staffProfile_staffList = (req, res) => {
    StaffProfile.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("managerFunctions/staffList", { title: "All Staff", staffProfiles: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const staffProfile_details = (req, res) => {
    const id = req.params.id;
    StaffProfile.findById(id)
        .then(result => {
            res.render("managerFunctions/profileDetails", { staffProfile: result, title: "Staff Details"});
        })
        .catch((err) => {
            res.status(404).render("404", { title: "Staff Profile not found"});
        });
}

const staffProfile_create_get = (req, res) => {
    res.render("managerFunctions/createStaffProfile", { title: "Create a new Staff Profile" });
}

const staffProfile_create_post = (req, res) => {
    const staffProfile = new StaffProfile(req.body);

    staffProfile.save()
        .then((result) => {
            res.redirect("/managerFunctions");
        })
        .catch((err) => {
            console.log(err);
        })
}

const staffProfile_update_get = (req, res) => {
    res.render("managerFunctions/updateProfileDetails", { title: "Update Staff Profile" });
}

const staffProfile_put = (req, res) => {
    const profileId = req.params.id;
    console.log(profileId);
    StaffProfile.findByIdAndUpdate(profileId, 
        {firstName: req.body.firstName},
        {lastName: req.body.lastName},
        {workLimit: req.body.workLimit},
        {preferredName: req.body.preferredName},
        {phoneNumber: req.body.phoneNumber},
        {address: req.body.address},
        {email: req.body.email},
        {availability: req.body.availability}
    )
        .then(result => {
            res.redirect("/managerFunctions/staffList")
        })
        .catch((err) => {
            console.log(err);
        });
}

const shift_create_get = (req, res) => {
    res.render("managerFunctions/addShift", { title: "Add a new shift" });
}

const shift_create_post = (req, res) => {
    const shift = new Shift(req.body);

    shift.save()
        .then((result) => {
            res.render("/managerFunctions/profileDetails");
        })
        .catch((err) => {
            console.log(err);
        })
}

const shift_shiftList = (req, res) => {
    Shift.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("managerFunctions/shiftList", { title: "All Shifts", shifts: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const staffProfile_delete = (req, res) => {
    const id = req.params.id;
    StaffProfile.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: "/managerFunctions" })
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    staffProfile_index,
    staffProfile_details,
    staffProfile_create_get,
    staffProfile_create_post,
    staffProfile_staffList,
    shift_create_get,
    shift_create_post,
    shift_shiftList,
    staffProfile_delete,
    staffProfile_put,
    staffProfile_update_get
}