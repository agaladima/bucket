$("#button").click(function(e) {
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var email = $("#email").val();
	var telephone = $("#telephone").val();
	if(fname.trim() == "" ||
			fname.trim() == "" ||
			lname.trim() == "" ||
			email.trim() == "" ||
			telephone.trim() == ""
		) {
		e.preventDefault();
		alert("OOPS! Looks like you left some fields blank!");
	} else {
		e.preventDefault();
		// create object
		var jsonData = {
			FirstName: fname,
			LastName: lname,
			EmailAddress: email,
			PhoneNumber: telephone
		};
		// alert(JSON.stringify(jsonData));
		// post data
		$.ajax({
			type: "POST",
			url: "https://apply.bucketthechange.com/api/applicant",
			data: {applicant: JSON.stringify(jsonData)},
			success: function(result, status, xhr) {alert("Hazzah! "+result);},
			contentType: "application/json",
			error: function (xhr, ajaxOptions, thrownError) {
        alert("ERROR "+xhr.status+": "+thrownError+". Please try again...");
      }
		});
	}
});