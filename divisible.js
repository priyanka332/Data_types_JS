var n = 15;
switch (n) {
    case n % 5 == 0:
        console.log("nav")
        break;
    case n % 3 == 0:
        console.log("gurukul")
        break;
    case (n % 5 == 0) && (n % 3 == 0):
        console.log("navgurukul")
        break;
    default:
        console.log("invalid")