/**
 * @author Farshad Sheykhi
 */
function LeadForm(email,firstName,lastName,stateID,zipcode,country,phone,invID,newsletter,fbolist,iraList,source) { 
    this.Email = email;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.StateId = stateID;
    this.Zipcode = zipcode;
    this.Country = country;
    this.Phone = phone;
    this.InvestmentId = invID;
    this.Newsletter = newsletter;
    this.FBOList = fbolist;
    this.IRAList = iraList;
    this.Source = source;
    
    // return this;
};

LeadForm.prototype.getEmail = function () {
    return this.Email;
};

LeadForm.prototype.getFirstName = function () {
    return this.FirstName;
};

LeadForm.prototype.getLastName = function () {
    return this.LastName;
};

LeadForm.prototype.getStateId = function () {
    return this.StateId;
};

LeadForm.prototype.getZipcode = function () {
    return this.Zipcode;
};

LeadForm.prototype.getCountry = function () {
    return this.Country;
};

LeadForm.prototype.getPhone = function () {
    return this.Phone;
};

LeadForm.prototype.getInvestmentId = function () {
    return this.InvestmentId;
};

LeadForm.prototype.getNewsletter = function () {
    return this.Newsletter;
};

LeadForm.prototype.getFBOList = function () {
    return this.FBOList;
};

LeadForm.prototype.getIRAList = function () {
    return this.IRAList;
};

LeadForm.prototype.getSource = function () {
    return this.Source;
};

module.exports = LeadForm;