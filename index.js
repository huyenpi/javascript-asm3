
$(document).ready(function () {

    // nhập thông tin vào bảng
    $("#btn1").click(function () {

        let fullName = $("#fullname").val().toUpperCase();      // lấy và gán giá trị của field
        let scoreMath = $("#scoremath").val();
        let scorePhysical = $("#scorephysical").val();
        let scoreChemistry = $("#scorechemistry").val();

        if (fullName == "" || scoreMath == "" || scorePhysical == "" || scoreChemistry == "") {
            alert("Hãy nhập đầy đủ thông tin!")
        } else {
            $("#fullname").val("");             // xóa trắng field
            $("#scoremath").val("");
            $("#scorephysical").val("");
            $("#scorechemistry").val("");
            let cel1;                                // lặp qua các dòng và đếm số dòng
            $("tr").each(function (index) {

                cel1 = $("<td></td>").text(++index);
            })                                               // tạo các ô và gán giá trị cho các ô
            let cel2 = $("<td></td>").text(fullName);
            let cel3 = $("<td></td>").text(scoreMath);
            let cel4 = $("<td></td>").text(scorePhysical);
            let cel5 = $("<td></td>").text(scoreChemistry);
            let cel6 = $("<td></td>").text("?");

            let newRow = $("<tr></tr>").append(cel1, cel2, cel3, cel4, cel5, cel6);// tạo dòng mới và thêm vào bảng
            $("#table").append(newRow);
        }
    });

    //tính điểm trung bình
    $("#btn2").click(function () {
        let math;
        let physical;
        let chemistry;
        let medium;
        $("tr").each(function (i, val) {                         // lặp qua các dòng và lấy điểm các môn
            math = $(val).children("td").eq(2).text();
            physical = $(val).children("td").eq(3).text();
            chemistry = $(val).children("td").eq(4).text();           // chyển đổi điểm kiểu string thành kiểu số thực
            medium = ((parseFloat(math) + parseFloat(physical) + parseFloat(chemistry)) / 3).toFixed(1); // làm tròn medium
            $(val).children("td").eq(5).text(medium);  // ghi vào bảng điểm trung bình

        });

    });
    // xác định học sinh giỏi
    $("#btn3").click(function () {
        $("tr").each(function (i, val) {
            let medium = parseFloat($(val).children("td").eq(5).text())
            if (medium >= 8) {
                $(val).addClass("red");
            }
        })
    })





})

