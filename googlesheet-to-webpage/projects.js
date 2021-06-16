$("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    href: "../css/styles.css"
}).appendTo("head");

var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWNH3_Mmb3FPvZh8J7VxnMAlP-wPln4cs2S6OFnVeFv8iq3-1pBanjVVEs9eI2Y9erEQcGvuP00L7k/pub?gid=310212765&single=true&output=csv';
$(document).ready(function () {
    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            var c = 1;
            var certificates_data = data.split(/\r?\n|\r/);
            var table_data = '<table class="table table-bordered table-striped">';
            for (var count = 0; count < certificates_data.length; count++) {
                var cell_data = certificates_data[count].split(",");
                table_data += '<tr>';
                for (var cell_count = 1; cell_count < cell_data.length-1; cell_count++) {
                    if (count == 0) {
                        table_data += '<th>' + cell_data[cell_count] + '</th>';
                    }
                    else {
                        if (cell_count ==  1) {
                            table_data += '<td>' + c++ + '</td>';
                        }
                        else if (cell_count == 5) {
                            table_data += '<th>' + '<a href="' + cell_data[cell_count] + '" class="btn custom-btn custom-btn2 custom-btn-bg custom-btn-link" target="_blank" title="Click here to View" >🔗</a>' + '</th>';
                        }
                        else {
                            table_data += '<td>' + cell_data[cell_count] + '</td>';
                        }

                    }
                }
                table_data += '</tr>';
            }
            table_data += '</table>';
            $('#projects_table').html(table_data);
        }
    });
});