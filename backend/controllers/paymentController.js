const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")("sk_test_51Kji22SF8ENeJMBlsTavXsNm5MfJG68cyo4JApdMYbzH8aNOOXNlZSaYQPcNee72joJZNnCKjLIpfBSO9kEaCfEX003VM0g8Su");

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey:"pk_test_51Kji22SF8ENeJMBlBdeD3eBSDI1L18gd4AlSjlSW5w9hiXhbWSWthxYDGjovHNwifkMuAGxyZ7g4rcXe8Yx5hDDN00rBXF9Q7v" });
});
