"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["SIMPLE"] = 0] = "SIMPLE";
    Membership[Membership["STANDART"] = 1] = "STANDART";
    Membership[Membership["PREMIUM"] = 2] = "PREMIUM";
})(Membership || (Membership = {}));
const membership = Membership.SIMPLE;
console.log(membership); // return 0 by default
const membership2 = Membership[2];
console.log(membership2); // return PREMIUM
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
const socialMedia = SocialMedia.INSTAGRAM;
console.log(socialMedia); // return INSTAGRAM
