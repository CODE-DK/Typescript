enum Membership {
	SIMPLE,
	STANDART,
	PREMIUM,
}

const membership: Membership = Membership.SIMPLE;
console.log(membership); // return 0 by default

const membership2: string = Membership[2];
console.log(membership2); // return PREMIUM

enum SocialMedia {
	VK = "VK",
	FACEBOOK = "FACEBOOK",
	INSTAGRAM = "INSTAGRAM",
}

const socialMedia: SocialMedia = SocialMedia.INSTAGRAM;
console.log(socialMedia); // return INSTAGRAM
