function foo() {
    document.getElementById("caChua").innerHTML = sessionStorage.getItem("giaTien");
}

(function ($) {
    $("document").ready(function () {
        var donHangHTML = sessionStorage.getItem("donHangHTML");
        $(".order-products").append(donHangHTML);
        var sumPriceOfAllItem = sessionStorage.getItem("sumPriceOfAllItem");
        $(".order-total").text(sumPriceOfAllItem);
    });
    $("#xuatHoaDonBtn").click(function () {
        var firstName1 = $("[name = 'first-name']").eq(0).val();
        //var firstName2 = $("[name = 'first-name']").eq(1).val();
        //var lastName1 = $("[name = 'last-name']").eq(0).val();
        //var lastName2 = $("[name = 'last-name']").eq(1).val();
        var email1 = $("[name = 'email']").eq(0).val();
        //var email2 = $("[name = 'email']").eq(1).val();
        var address1 = $("[name = 'address']").eq(0).val();
        //var address2 = $("[name = 'address']").eq(1).val();
        //var city1 = $("[name = 'city']").eq(0).val();
        //var city2 = $("[name = 'city']").eq(1).val();
        var tel1 = $("[name = 'tel']").eq(0).val();
        //var tel2 = $("[name = 'tel']").eq(1).val();
        
        if (firstName1 == "" || email1 == "" || address1 == "" || tel1 == "") {
            window.alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        if (!validateEmail(email1)) {
            window.alert("Email không hợp lệ");
            return;
        }

        var doc = new jsPDF();
        var txt = "CỬA HÀNG CUNG CẤP RAU CỦ VÀ TRÁI CÂY TƯƠI \n \n";
        txt = txt + "THÔNG TIN NGƯỜI BÁN \n";
        txt = txt + "Người bán: rau@gmail.com \n"
        txt = txt + "Địa chỉ: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, TPHCM \n";
        txt = txt + "Điện thoại: 0977777879 \n";
        txt = txt + "Email: info@yourdomain.com \n \n";
        txt = txt + "THÔNG TIN NGƯỜI MUA \n";
        txt = txt + "Họ tên: " + firstName1 + "\n";
        txt = txt + "Email: " + email1 + " \n";
        txt = txt + "Địa chỉ: " + address1 + " \n";
        // txt = txt + "Thành phố: " + city1 + " \n";
        txt = txt + "Điện thoại: " + tel1 + " \n \n";
        txt = txt + "ĐƠN HÀNG ĐÃ ĐẶT\n";
        txt = txt + sessionStorage.getItem("donHang") + "Thành tiền: " + sessionStorage.getItem("sumPriceOfAllItem") + "\n";
        // txt = txt + "ĐỊA CHỈ VẬN CHUYỂN \n";
        // txt = txt + "Họ tên: " + firstName2 + lastName2 + "\n";
        // txt = txt + "Email: " + email2 + "\n";
        // txt = txt + "Địa chỉ: " + address2 + "\n";
        // txt = txt + "Thành phố: " + city2 + "\n";
        // txt = txt + "Điện thoại: " + tel2 + "\n";

        //doc.addFont('VNI-Times-normal.ttf', 'VNI-Times', 'normal');
        doc.setFont('Times New Roman');
        //doc.setFont('VNI-Times', 'normal');
        doc.text(change_alias(txt), 10, 5);
        doc.save('a4.pdf');

        // mailDoc({
        //     bUI: true,
        //     cTo: "hoangvinh175@gmail.com",
        //     cSubject: "Beta Test Report",
        //     cMsg: "This attached PDF form has been completed as requested. Thanks from George Howard for completing this form. He will use this information to improve his website."
        // });
        // window.open('mailto:hoangvinh175@gmail.com');

        // Email.send({
        //     Host : "local",
        //     Username : "username",
        //     Password : "password",
        //     To : 'hoangvinh175@gmail.com',
        //     From : "you@isp.com",
        //     Subject : "This is the subject",
        //     Body : "And this is the body"
        //     }).then(
        //       message => alert(message)
        //     );

        Email.send({
            //SecureToken: "4fdd6f80-f32a-4628-a12a-42b4721af4e4",
            //Host: "smtp@gmail.com",
            //SecureToken: "d8105e23-ca9b-442b-934d-b5bac2ae983a",
            SecureToken: "10e93cbf-74b9-4c3f-bc8b-0aa3bb398d58",
            Username: "hoangvinh175@gmail.com",
            Password: "8C19E4325D9D94B1BD5BB90C0303BEC8E2F6",
            To: email1,
            From: "hoangvinh175@gmail.com",
            Subject: "HÓA ĐƠN CỬA HÀNG RAU",
            Body: txt.replace(/\n/g, "<br/>")
        }).then(
            message => alert("Kết quả gửi đến email " + email1 + ": " + message)
        );
    });

    $("#datHangBtn").click(function () {
        $("[name = 'donHangArrayObject']").eq(0).val(sessionStorage.getItem("donHangArrayObject"));
        var infoUser = getInfoUser();
        if (infoUser == "") {
            alert('Vui lòng điền chính xác thông tin');
            return false;
        }
        $("[name = 'infoUser']").eq(0).val(infoUser);
        alert("Đặt hàng thành công");
    });

    function change_alias(alias) {
        var str = alias;
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/Đ/g,"D");
        //str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        //str = str.replace(/ + /g," ");
        //str = str.trim(); 
        return str;
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function getInfoUser() {
        var firstName = $("[name = 'first-name']").eq(0).val();
        var email = $("[name = 'email']").eq(0).val();
        var address = $("[name = 'address']").eq(0).val();
        var tel = $("[name = 'tel']").eq(0).val();
        if (!validateEmail(email) || firstName == "" || email == "" || address == "" || tel == "") {
            return "";
        }
        return firstName + "|" + email + "|" + address + "|" + tel;
    }



})(jQuery);