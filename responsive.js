$(function() {

				var $container = $('#content');

				function getContainerWidth(){
					return $container.width();
				}

				var containerWidth = getContainerWidth();
			//	console.log(containerWidth);
				var column = assignColumnSize();

				function resetBoxSizing(){
					$('.square').css({
						width: "",
						height: ""
					})

					$('.wide').css({
						width: "",
						height: ""
					})

					$('.tall').css({
						width: "",
						height: ""
					})

					$('.largesquare').css({
						width: "",
						height: ""
					})

					$('.full').css({
						width: "",
						height: ""
					})

					$('.threecol').css({
						width: "",
						height: "",
					})

					$('.tall.impulse').css({
						width: "",
						height: "",
					})

					$('.desc').css({
						width: "",
						height: "",
					})

				/*	$('#footer').css({
						width: "",
						height: "",
					})

				*/
				}

				function assignColumnSize(){
				//	var column;
				//1300 or above
					if (containerWidth == 1188){
						var string1 = "Firing 1188.";
						resetBoxSizing();
						console.log(string1);
						column = 297;
					//	console.log(containerWidth);
					//between 1092 and 1299
					} else if (containerWidth == 984){
						var string2 = "Firing 984.";
						resetBoxSizing();
						console.log(string2);
						column = 246;
					//	console.log(containerWidth);
					//between 798 and 1091
					} else if (containerWidth == 760){
						var string3 = "Firing 760.";
						resetBoxSizing();
						console.log(string3);
						column = 190;
					//	console.log(containerWidth);
					} else if (containerWidth < 760){
						resetBoxSizing();
						var squareWidth = $('.square').width();
						var string4 = "Firing less than 760.";
						console.log(string4);
						//assign widths

						$('.square').css({
							width: "" + squareWidth + "px",
							height: "" + squareWidth + "px"
						})

						$('.wide').css({
							width: "" + squareWidth + "px",
							height: "" + (squareWidth / 2) + "px"
						})

						$('.tall').css({
							width: "" + squareWidth + "px",
							height: "" + (squareWidth * 2) + "px"
						})

						$('.largesquare').css({
							width: "" + squareWidth + "px",
							height: "" + squareWidth + "px"
						})

						$('.full').css({
							width: "" + squareWidth + "px",
							height: "" + (squareWidth / 2) + "px"
						})

						$('.threecol').css({
							width: "" + squareWidth + "px",
							height: "" + (squareWidth / 2) + "px"
						})

						$('.tall.impulse').css({
							width: "" + squareWidth + "px",
							height: "" + (squareWidth / 2) + "px"
						})

						$('.desc').css({
							width: "" + squareWidth + "px",
							height: "" + squareWidth + "px"
						})
					/*
						$('#footer').css({
							width: "" + squareWidth + "px"
						})
					*/
					}
					
				//	console.log(column);
					return column;
				}

				function initIsotope(){
					$container.isotope({
						//options
						itemSelector: '.item',
						masonry: {
					      columnWidth: column
					    }
					});
				}

				window.onresize = _.debounce(function() {
					//check the window size and adjust the layout when necessary.
					containerWidth = getContainerWidth();
				//	console.log(containerWidth);
					column = assignColumnSize();
				//	console.log(column);
					initIsotope();

					//make the layout 100% if #content happens to be less than 760px wide.
					containerWidth = $container.width();
				//	console.log(containerWidth);
				/*	resizing below size was here */
				}, 150);

				//init
				initIsotope(); 

			});