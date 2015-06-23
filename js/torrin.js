(function() {
	url = 'https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=72157654942642965&extras=url_l&user_id=51359535@N04&format=json&nojsoncallback=?&api_key=da58411f701806acc9869502586dbbf0';
	prev = '<a href="#" class="slidesjs-previous slidesjs-navigation"><i class="icon-chevron-left icon-large"></i></a>';
	next = '<a href="#" class="slidesjs-next slidesjs-navigation"><i class="icon-chevron-right icon-large"></i></a>';

	$.get(url, function(data) {
		photos = data.photoset.photo;

		for (i=0; i<photos.length; i++) {
			purl = photos[i].url_l;
			$('#slides').append($('<img src='+purl+'>'));
		}

		$('#slides').append($(prev));
	    $('#slides').append($(next));

		$('#slides').slidesjs({
			width: 940,
			height: 530,
			navigation: false,
			pagination: false,
			play: {
				active: true,
				effect: "slide",
				interval: 8000,
				auto: true,
				swap: true,
				pauseOnHover: false,
				restartDelay: 2500
			}
		});
	});
})();
