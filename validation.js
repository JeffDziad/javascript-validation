$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true
                },
            grade:
                {
                    required: true,
                    min: 5,
                    max: 8
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Please enter your first name."
                },
            grade:
                {
                    required: "Please enter a grade between 5 and 8.",
                    min: "Only students between grades 5 and 8 are allowed.",
                    max: "Only students between grades 5 and 8 are allowed."
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var student = $("#firstName").val();
        var grade = $("#grade").val();
        $("#message").text(`You have registered ${student} for grade ${grade} camp!`);
    }



});