$(document).ready(function () {

    // Carousel options
    $('#quote-carousel').carousel({
        pause: true, interval: 10000
    });
});

var formValidator = $("#partnerform").validate({
	rules: {
		email: {
			required: true,
			email: true
		},
		phone: {
			required: true,
			customPhone: true
        },
		zip: {
			required: true,
			number: true
		}
	},
	messages: {
		phone: {
			customPhone: "Ungültige Telefonnummer."
		},
		zip: {
			number: "Ungültige PLZ."
        }
	},
	submitHandler: function(form) {
		$.ajax({
			dataType: 'jsonp',
			url: 'https://backend.zasta.de/partner/demo',
			type: 'POST',
			data: $(form).serialize(),
			success: function() {
				$('#partner-demo-form-text').hide();
				$('#partnerform').hide();
				$('#partner-demo-form-result').fadeIn('slow');
			}
		});
	}
});

jQuery.extend(jQuery.validator.messages, {
	required: "Dieses Feld wird benötigt.",
    email: "Ungültige E-Mail-Adresse."
});

jQuery.validator.methods.customPhone = function( value, element ) {
	return this.optional( element ) || /^[0-9+ ]+$/.test( value );
}