import jwt from 'jsonwebtoken'
const auth = async (req, res, next) => {
    try {
        // see if the user is true
        //  see if the token is valid
        const token = req.headers.authorization.split(" ")[1];
        // finding if the token is from jwt or google by it length
        const isCustomerAuth = token.length < 500;
        // getting [data] from token
        let decodedData;
        // if we have our token and it is our custom token then
        if (isCustomerAuth && token) {
            // we can get the date from each specific token ...username, id
            decodedData = jwt.verify(token, process.env.JWT)
            // now after geting the decodedData we can now find which user is login and which user is comment or liking the post
            // storing the id of verify jwt user in req.userId
            req.userId = decodedData?.id;
        } else {
            // if working with google token
            decodedData = jwt.decode(token, process.env.JWT);
            // storing the sub of verify user in req.userId
            req.userId = decodedData?.sub;
        }
        // next is implement if the user is login from our custom signup or from google login then he or she can like view and comment the post
        next();
    } catch (error) {
        console.log(error.message);
    }
}
export default auth;