// The controller for all the managerFunctions. 

const StaffProfile = require("../models/staffProfile"); 
const Shift = require("../models/shift"); 

//Directs to the index page for manager functions.
const staffProfile_index = (req, res) => {
    StaffProfile.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("managerFunctions/index", { title: "All Staff", staffProfiles: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

//Directs to the Staff List page. Currently sits in the nav bar. 
//Gets all the StaffProfile onjects in the db. 
const staffProfile_staffList = (req, res) => {
    StaffProfile.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("managerFunctions/staffList", { title: "All Staff", staffProfiles: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

//Directs to the details page of a particular staff member when clicked on from the Staff List page 
//using their object id as assigned by the db.
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

//Directs to the Create Staff Profile page. Currently sits in the nav bar.
const staffProfile_create_get = (req, res) => {
    res.render("managerFunctions/createStaffProfile", { title: "Create a new Staff Profile" });
}

//Post method from the Create Staff Profile page. Redirects to the Staff List page.
const staffProfile_create_post = (req, res) => {
    const staffProfile = new StaffProfile(req.body);

    staffProfile.save()
        .then((result) => {
            res.redirect("/managerFunctions/staffList");
        })
        .catch((err) => {
            console.log(err);
        })
}

//Renders the Update Profile Details page when clicked on from a Profile Details page.
const staffProfile_update_get = (req, res) => {
    const id = req.params.id
    StaffProfile.findById(id)
        .then(result => {
            res.render("managerFunctions/updateProfileDetails.ejs", { staffProfile: result, title: "Staff Details" });
        })
        .catch((err) => {
            res.status(404).render("404", { title: "Staff Profile not found"});
        });
}

//NOT WORKING. PUT method for updating profile details from the Update Profile page. 
const staffProfile_put = async (req, res) => {
    const profileId = req.params.id;
    console.log('Profile: ', profileId);

    const updates = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        workLimit: req.body.workLimit,
        preferredName: req.body.preferredName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email,
        availability: req.body.availability
    }

    const doc = await StaffProfile.findOneAndUpdate(profileId, updates).then ((result) => {
        res.rredirect('/');
    });

    // StaffProfile.findByIdAndUpdate(profileId, 
    //     {firstName: req.body.firstName},
    //     {lastName: req.body.lastName},
    //     {workLimit: req.body.workLimit},
    //     {preferredName: req.body.preferredName},
    //     {phoneNumber: req.body.phoneNumber},
    //     {address: req.body.address},
    //     {email: req.body.email},
    //     {availability: req.body.availability}
    // )
    //     .then(result => {
    //         res.redirect("/managerFunctions/staffList")
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
}

//Render Add Shift page.
const shift_create_get = (req, res) => {
    res.render("managerFunctions/addShift", { title: "Add a new shift" });
}

//Post method for creating a shift. Redirects to the Shift List page. 
const shift_create_post = (req, res) => {
    const shift = new Shift(req.body);

    shift.save()
        .then((result) => {
            res.redirect("/managerFunctions/shiftList");
        })
        .catch((err) => {
            console.log(err);
        })
}

//Gets all the Shift objects from the db and renders them. Currently sits in the nav bar. 
const shift_shiftList = (req, res) => {
    Shift.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("managerFunctions/shiftList", { title: "All Shifts", shifts: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

//Method to delete a profile from the db. Found on each Staff Profile details page. 
const staffProfile_delete = (req, res) => {
    const id = req.params.id;
    StaffProfile.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: "/managerFunctions/staffList" })
        })
        .catch((err) => {
            console.log(err);
        });
}

//Exports the functions for use. 
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