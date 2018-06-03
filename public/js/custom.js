$(document).ready(function () {
    $("#frm_register").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            password: "required",
            cpassword: {
                required: true,
                equalTo: '#password'
            },
            mobile: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            firstname: "Please fill first name",
            lastname: "Please fill lsat name",
            mobile: "Please fil mobile",
            email: {
                required: "Please fill emaill address",
                email: "Please fill valid email address"
            },
            password: 'Please fill password',
            cpassword: 'Please fill Comfirm password',
            equalTo: 'Confirm Password must same as Password'
        },
        submitHandler: function (form, e) {
            e.preventDefault();
            var formData = $("#frm_register").serialize();
            $.ajax({
                type: 'post',
                url: '/register',
                dataType: 'json',
                data: formData,
                success: function (result) {
                    console.log(result);
                },
                error: function () {

                }
            })
        }
    });
});