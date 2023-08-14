const db = require('../models/index')

//create main models

const userm = db.USER;

  

//Main Work 

// create a product 
const adduser = async(req, resp) => {
    try{
        let info = {
            First_Name: req.body.First_Name,
            Last_Name: req.body.Last_Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Password: req.body.Password,
            confirm_password: req.body.Confirm_password,
            Country: req.body.Country,
            State: req.body.State,
            City: req.body.City,
            Zip_code: req.body.Zip_Code

        }
        // Check if password and confirm password match
        if (info.password !== info.confirm_password) {
            return resp.status(400).json({ error: 'Password and Confirm Password do not match' });
        }
        
        const user = await userm.create(info)
        resp.status(200).send(user)
    }
    catch (err) {
        console.log("err", err)
    }


}


const getalluserdetails = async (req, resp) => {
    try {
        const data = await userm.findAll();
        resp.status(200).send({ data })
    }
    catch (err) {
        console.log('err', err)
    }
}

// get one user
const getoneuser = async (req, resp) => {
    console.log("one user", req.params.id)
    let id = req.params.id
    const details = await contact_forms.findOne({ where: { id: id } })
    console.log("user is ", details)
    resp.status(200).send(details)
}
// get update data
const updatedata = async (req, resp) => {
    let id = req.params.id
    const details = await contact_forms.update(req.body, { where: { id: id } })
    resp.status(200).send(details)
}

// get delete
const deletedata = async (req, resp) => {
    let id = req.params.id
    await user.destroy({ where: { id: id } })
    resp.status(200).send("Your login id and pass id deletead")
}


module.exports = {
    getalluserdetails,
    adduser,
    getoneuser,
    updatedata,
    deletedata
}
        