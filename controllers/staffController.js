const StaffProfile = require("../models/staffProfile"); 
const Shift = require("../models/shift"); 

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete



const staffProfile_index = (req, res) => {
    StaffProfile.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("staffFunctions/index", { title: "All Staff", staffProfiles: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const staffProfile_staffList = (req, res) => {
    StaffProfile.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("staffFunctions/staffList", { title: "All Staff", staffProfiles: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const staffProfile_details = (req, res) => {
    const id = req.params.id;
    StaffProfile.findById(id)
        .then(result => {
            res.render("staffFunctions/details", { staffProfile: result, title: "Staff Details"});
        })
        .catch((err) => {
            res.status(404).render("404", { title: "Staff Profile not found"});
        });
}

const staffProfile_create_get = (req, res) => {
    res.render("staffFunctions/createStaffProfile", { title: "Create a new Staff Profile" });
}

const staffProfile_create_post = (req, res) => {
    const staffProfile = new StaffProfile(req.body);

    staffProfile.save()
        .then((result) => {
            res.redirect("/staffFunctions");
        })
        .catch((err) => {
            console.log(err);
        })
}

const shift_create_get = (req, res) => {
    res.render("staffFunctions/addShift", { title: "Add a new shift" });
}

const shift_create_post = (req, res) => {
    const shift = new Shift(req.body);

    shift.save()
        .then((result) => {
            res.redirect("/staffFunctions");
        })
        .catch((err) => {
            console.log(err);
        })
}

// const blog_delete = (req, res) => {
//     const id = req.params.id;
//     Blog.findByIdAndDelete(id)
//         .then(result => {
//             res.json({ redirect: "/blogs" })
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

module.exports = {
    staffProfile_index,
    staffProfile_details,
    staffProfile_create_get,
    staffProfile_create_post,
    staffProfile_staffList,
    shift_create_get,
    shift_create_post
    // blog_delete
}