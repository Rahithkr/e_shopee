const express = require('express')
const path = require('path')
const router = express.Router()


const userRouter = require('../controller/usercontroller')
const profileController = require("../controller/profileController")
const cartController = require("../controller/cartController")
const checkoutController = require("../controller/checkoutController")
const wishlistController = require("../controller/wishlistController")
const paymentController = require("../controller/paymentController")
const isBlocked = require('../middleware/isBlocked')

router.get('/login', userRouter.login)
router.get('/signup', userRouter.signup)
router.post('/signup', userRouter.signupPost)
router.get('/newotp', userRouter.newOtp)
router.get('/otp', userRouter.getOtp)
router.get('/passotp', userRouter.passOtp)
router.post('/otp', userRouter.otpPost)
router.post('/login', userRouter.loginPost)
router.get('/forgotpass', userRouter.forgotPass)
router.post('/forgotpass', userRouter.forgotPassPost)
router.get('/newpassotp', userRouter.newPassOtp)
router.get('/otp', userRouter.reOtp)
router.get('/passotp', userRouter.rePassOtp)
router.post('/passotp', userRouter.rePassOtpPost)
router.get('/newpass', userRouter.renewPass)
router.post('/newpass', userRouter.renewPassPost)
router.get('/productpage/:id', userRouter.productPage)
router.get('/productlists', userRouter.productList)
router.get('/', userRouter.home)
router.get('/logout', userRouter.logout)
router.get('/profile', isBlocked, profileController.profile)
router.get('/profile/addaddress',isBlocked, profileController.profileAddAddress)
router.post('/profile/addaddress', profileController.profileAddAddressPost)
router.get('/profile/showaddress', isBlocked, profileController.profileShowAddress)
// router.post('/profile/showaddress/:id',userRouter.profileshowaddresspost)
router.get('/profile/editprofile/:id', isBlocked, profileController.editProfile)
router.post('/profile/editprofile/:id', profileController.editProfilePost)
router.post('/profile/updateprofile/:id', profileController.updateProfile)
router.get('/profile/orderstatus', isBlocked, profileController.orderStatus)
router.get('/ordercancel/:id', profileController.orderCancel)
router.get('/removeproduct/:id',  cartController.removeProduct)
router.get('/cart/:id', isBlocked, cartController.cartid)
router.post('/product/cart/update/:cartid/:count/:productId', cartController.productEdit)
router.get('/cart', isBlocked, cartController.cart)
router.get('/checkout', isBlocked, checkoutController.checkout)
router.post('/checkout/addaddress', isBlocked, checkoutController.checkoutAddAddress)
router.get('/checkout/edit_address', isBlocked, checkoutController.editAddress)
router.post('/checkout/edit_address', isBlocked, checkoutController.editAddressPost)
router.get('/checkout/delete/:id', isBlocked, checkoutController.addressDeletePost)
router.post('/confirmorder',  paymentController.confirmorder)
router.get('/confirmorder', paymentController.confirmorderGet)
router.get('/profile/wallet', isBlocked, profileController.wallet)
router.post('/payorder/:a', paymentController.razorpayOrder)
router.post('/paymentdone',  paymentController.paymentDone)
// router.post('/verifyCoupon',userRouter.verifyCoupon)
router.get('/codconfirmorder', isBlocked, paymentController.codThankyou)
router.post('/walletconfirmorder',paymentController.walletPayment)
router.get('/return', isBlocked, profileController.returnOrder);
router.post('/verifycoupen', isBlocked, userRouter.verifyCoupen)
router.post('/clearcoupen', userRouter.clearCoupen)
router.get('/wishlist/:id', isBlocked, wishlistController.wishlist)
router.get('/wishlist', isBlocked, wishlistController.wishlistGet)
router.get('/removewishlist/:id', isBlocked, wishlistController.removeWishlist)
router.get('/showaddress/editaddress', isBlocked, profileController.profileAddressEditGet)
router.post('/showaddress/editaddress', isBlocked, profileController.profileAddressEdit)
router.get('/showaddress/delete/:id', profileController.profileAddressDeletePost)
router.get('/invoice/:id', isBlocked, userRouter.invoice)
router.get('/category/:id', userRouter.categoryPage)
router.get('/brand/:id', userRouter.brandPage)

module.exports = router