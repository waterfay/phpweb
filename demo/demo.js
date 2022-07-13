$(document).ready(function () {
    //ajax抓取json資料
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function (res) {
            if (res !== null) {
                $.each(res.data, function (index) {
                    // console.log(res.data[index]);
                    // console.log(res.data[index].sex);
                    // console.log(res.data[index].cn_name);
                    // console.log(res.data[index].en_name);
                    // console.log(res.data[index].email);
                    // console.log(res.data[index].phone);
                    let info = res.data[index];
                    // console.log(info.cn_name)
                    let strsex = '';
                    if (res.data[index].sex == 0) {
                        strsex = '男';
                    } else {
                        strsex = '女';
                    }
                    let strlike = '';
                    if (res.data[index].like == 0) {
                        strlike = '☆';
                    } else {
                        strlike = '★';
                    }

                    //印出表格
                    var row = $("<tr></tr>");
                    row.append("<td class='text-center'><div class='dropdown'><a href='#' role='button' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false'><i class='fas fa-ellipsis-v icon-table'></i></a><div class='dropdown-menu' role='menu'><a class='dropdown-item' data-bs-toggle='modal' data-bs-target='#edit-modal' role='presentation'>修改</a><a class='dropdown-item' data-bs-toggle='modal' data-bs-target='#delete-modal' role='presentation' >刪除</a></div></div></td>");
                    row.append("<td class='js-tooltip' title=" + "[" + strsex + "]" + info.cn_name + "(" + info.en_name + ")" + ">" + info.cn_name + "</td>");
                    row.append($("<td>" + info.en_name + "</td>"));
                    row.append($("<td>" + strsex + "</td>"));
                    row.append($("<td>" + info.email + "</td>"));
                    row.append($("<td  class='js-popover' data-content=" + '聯絡方式：' + info.phone + " data-placement='auto'>" + info.phone + "</td>"));
                    row.append($("<td class='like-click' data-like=" + info.id + ">" + strlike + "</td>"));
                    $("#output").append(row);
                    //tooltip
                    $(".js-tooltip").tooltip({
                        items: "[title]",
                        content: function () {
                            return ($(this).html());
                        }
                    });
                    //popover
                    $(".js-popover").webuiPopover();

                    $(".icon-table").click(function () {
                        $(this).toggleClass("rotate-transform");
                    })
                        $(".like-click").click(function () {
                            if ($(this).text() == "★") {
                                $(this).text("☆");
                            } else if ($(this).text() == "☆") {
                                $(this).text("★");
                            }
                
                        });

                })

            }
        },
        error: function (err) {
            console.log("失敗")
        }
    })






})





