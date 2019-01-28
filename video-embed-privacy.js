
jQuery(function () {
	jQuery(".video-wrapped").each(function () {
		jQuery(this)
			.empty()
			.append(jQuery('<div class="video-wrapped-play">').html(jQuery(this).attr("data-embed-play")))
			.click(function (e) {
				if (e.target.tagName.toLowerCase() !== "a") {
					jQuery(this).html(jQuery(this).attr("data-embed-frame").replace(/(\/embed\/[^"]*\\?[^"]*)/, "$1&autoplay=1")).addClass("video-wrapped-clicked");
				}
			});

		const minHeight = jQuery(this).find(".video-wrapped-play").prop("scrollHeight");

		if (jQuery(this).prop("clientHeight") < minHeight) {
			jQuery(this).css("min-height", minHeight + 20);
		}
	});
});
