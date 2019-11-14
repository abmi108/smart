var newField = `<div class="row">
                    <div class="col-6">
                        <div class="form-group">
                        <label for="fieldName" class="bmd-label-floating">Field Name</label>
                        <input type="text" class="form-control" id="fieldName">
                        </div>   
                    </div>

                    <div class="col-6">
                        <div class="form-group">
                        <label for="fieldValue" class="bmd-label-floating">Field Value</label>
                        <input type="text" class="form-control" id="fieldValue">
                        </div>
                    </div>
                </div>
                `;

if ($(".nav-item.active").hasClass("user-menu")) {
  $(".username")
    .removeClass("collapsed")
    .attr("aria-expanded", true);
} else {
  $(".nav-item.active")
    .parents("a[data-toggle]")
    .removeClass("collapsed")
    .attr("aria-expanded", true);
}

$(".nav-item.active")
  .closest(".collapse")
  .addClass("show");

$(".change-password-button").on("click", function() {
  $("#change-password-fields").toggleClass("invisible");
});

$(".add-field-button").on("click", function() {
  $(".modaL-form").append(newField);
});
