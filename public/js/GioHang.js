// function foo() {
//     sessionStorage.setItem("giaTien", document.getElementById("giaTienOtChuong").textContent);
//     return true;
// }


(function ($) {
    $("document").ready(function () {
        sessionStorage.setItem("daTinhTien", "false");
    });
    $("#tinhTienBtn").click(function () {
        var productName = [];
        $(".product-name").each(function() {
            productName.push($(this).children().text());
        });

        var price = [];
        $("td.price").each(function() {
            price.push(Number.parseInt($(this).text()));
        });

        var quantity = [];
        var isValidQuantity = true;
        $("input.quantity").each(function() {
            if ($(this).val() <= 0) {
                isValidQuantity = false;
                return;
            }
            quantity.push($(this).val());
        });

        if (!isValidQuantity) {
            window.alert("Số lượng nhập không hợp lệ");
            sessionStorage.setItem("daTinhTien", "false");
            return;
        }

        var total = [];
        $(".total").each(function(index) {
            var totalOneItem = price[index] * quantity[index];
            $(this).text(totalOneItem)
            total.push(totalOneItem);
        });

        var i;
        var sumPriceOfAllItem = 0;
        for (item of total) {
            sumPriceOfAllItem = sumPriceOfAllItem + item;
        }
        $(".cart-total").eq(2).children("p").eq(0).children().eq(1).text(sumPriceOfAllItem);
        $(".cart-total").eq(2).children("p").eq(3).children().eq(1).text(sumPriceOfAllItem);
        //$(".total-price").children().eq(1).text(sum);

        var donHangHTML = "";
        var donHang = "";
        var donHangArrayObject = "";
        for (i = 0; i < productName.length; i++) {
            donHangHTML = donHangHTML + '<div class="order-col"> <div>' + quantity[i] + "x " + productName[i] + "</div>";
            donHangHTML = donHangHTML + "<div>" + total[i] + "</div>";
            donHang = donHang + quantity[i] + "x " + productName[i] + "\n" + total[i] + "\n";
            donHangArrayObject = donHangArrayObject + productName[i] + "|" + total[i] + "|" + quantity[i] + ";";
        }
        donHang.trimRight();
        donHangArrayObject = donHangArrayObject.substring(0, donHangArrayObject.length - 1);

        sessionStorage.setItem("donHangHTML", donHangHTML);
        sessionStorage.setItem("sumPriceOfAllItem", sumPriceOfAllItem);
        sessionStorage.setItem("donHang", donHang);
        sessionStorage.setItem("donHangArrayObject", donHangArrayObject);
        sessionStorage.setItem("daTinhTien", "true");
    });

    $("#chuyenSangThanhToanBtn").click(function() {
        if (sessionStorage.getItem("daTinhTien") == "true") {
            return true;
        }
        else {
            window.alert("Vui lòng bấm nút tính tiền trước khi thanh toán");
            return false;
        }
    });
})(jQuery);