import { paytmmerchantkey, paytmParams } from '../server.js';
import paytmchecksum from '../paytm/PaytmChecksum.js';
import formidable from 'formidable';
import https from 'https';

export const addPaymentGateway = async (request, response) => {

    let paytmCheckSUM = await paytmchecksum.generateSignature(paytmParams, paytmmerchantkey);

    try {
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmCheckSUM
        }
        response.json(params);
    }
    catch (error) {
        console.log("error while calling paytmchecksum", error);
    }

}

export const paymentResponse = (request, response) => {
    const form = new formidable.IncomingForm();
    let paytmCheckSUM = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;
    
    let isVarifySignature = paytmchecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa', paytmCheckSUM);
    
    if (isVarifySignature) {
        var paytmParams = {};
        paytmParams['MID'] = request.body.MID;
        paytmParams['ORDER_ID'] = request.body.ORDERID;
        paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function (checksum) {

            paytmParams["CHECKSUMHASH"] = checksum;

            var post_data = JSON.stringify(paytmParams);

            var options = {

                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            var res = "";
            var post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    res += chunk;
                });

                post_res.on('end', function () {
                    let result = JSON.parse(res)
                    response.redirect(`http://localhost:3000/`)
                });
            });
            post_req.write(post_data);
            post_req.end();
        });

    } else {
        console.log('checksum signature not matched');
    }
}