
const admin ={

    product:{
        myproduct:'/product',
        add_product:'/product/add/admin',
        get_product:'/product/get',
        delete_product:'/product/delete',
        update_product:'/product/update',
        get_product_id:'/product/get/id',
        get_server_product_id:'/localhost:3000/product/get/123',
    },

    account:{
        myaccount:'/account',
        account_login:'/account/login',
        account_signup:'/account/signup',
        account_admin:'/account/admin',
        account_delete:'account/delete'
    },

    cart :{
        mycart:'/cart',
        cart_edit:'/cart/edit'
    },

    collaction:{
       mycollaction:'/collaction',
       collaction_all:'collaction/all',
       collaction_latest:'collaction/latest',
       collaction_add_new:'collaction/add',
       collaction_edit:'collaction/edit'
    },

    order:{
        myorder:'/order',
        order_view:'/order/all',
        order_information:'/order/information',
        order_date:'/order/date',
    },

    shop:{
        myshop:'/shop',
        get_shop:'/shop/get'
    },

    catagories:{
        mycatagories:'/catagories',
        electronics_catagory:'/catagories/electronics',
        homeappliences_catagory:'/catagories/homeappliences',
        vehicals_catagory:'/catagories/vehicals',
        foods_catagory:'/catagories/foods',
        catagory_view_all:'catagories/all',
        catagory_delete:'catagories/delete',
        catagory_add_new:'catagories/add/new',
    },

    payment:{
        mypayment:'/payment',
        payment_all:'payment/all',
        payment_done:'payment/done',
        payment_pending:'payment/pending'
    },

};

    const customer ={

    product:{
        myproduct:'/product',
        get_product:'/product/get',
        get_product_id:'/product/get/id',
        get_server_product_id:'/localhost:3000/product/get/123',
    },

    account:{
        myaccount:'/account',
        account_login:'/account/login',
        account_signup:'/account/signup',
        account_customer:'/account/customer',
        account_delete:'account/delete'
    },

    cart :{
        mycart:'/cart',
        cart_add:'/cart/add',
        cart_delete:'/cart/remove'
    },

    collaction:{
       mycollaction:'/collaction',
       collaction_all:'collaction/all',
       collaction_latest:'collaction/latest',
    },

    order:{
        myorder:'/order',
        order_add:'/order/add',
        order_delete:'/order/delete',
        order_delivery:'/order/delivery',
        order_delivery_location:'/order/delivery/location',
        order_shipping:'/order/shiping',
        order_shipping_location:'/order/shiping/location',
        order_payment:'/order/total-payment',
        order_payment_method:'/order/total-payment/method',
        order_payment_method_atm:'/order/total-payment/method/atm',
        order_payment_method_cash:'/order/total-payment/method/cash'
    },

    shop:{
        myshop:'/shop',
        get_shop:'/shop/get'
    },

    catagories:{
        mycatagories:'/catagories',
        electronics_catagory:'/catagories/electronics',
        homeappliences_catagory:'/catagories/homeappliences',
        vehicals_catagory:'/catagories/vehicals',
        foods_catagory:'/catagories/foods',
        catagory_view_all:'catagories/all',
    },

    payment:{
        mypayment:'/payment',
        payment_add:'payment/add',
        payment_delete:'payment/delete',
    },

}

module.exports = {
    admin,
    customer
}