$(document).ready(function(){$(document).ready(function(){var e=$(".products_item"),i=$("#next"),t=e.length;e.hide(),t>4&&i.show(),e.slice(0,4).show(),i.click(function(){var a=e.filter(":visible").length;e.slice(a-1,a+4).fadeIn(),e.filter(":visible").length>=t&&i.hide()})}),$(".faq_item .faq_item__question a").on("click",function(){$(".faq_item").removeClass("faq_active"),$(this).closest(".faq_item").toggleClass("faq_active")}),$(".header_wrap_row__nav a").on("click",function(){$(".header__over").toggleClass("header_over_active"),$(".header__navigation").toggleClass("header__fixed")}),$(".header__over").on("click",function(){$(this).removeClass("header_over_active"),$(".header__navigation").removeClass("header__fixed")}),jQuery(document).ready(function(){$(".plus").click(function(e){e.preventDefault(),field="input[name="+$(this).attr("field")+"]";var i=parseInt($(field).val());!isNaN(i)&&i<99&&$(field).val(i+1)}),$(".minus").click(function(e){e.preventDefault(),field="input[name="+$(this).attr("field")+"]";var i=parseInt($(field).val());!isNaN(i)&&i>1&&$(field).val(i-1)})});var e=new Swiper(".gallery-top",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,loopedSlides:4}),i=new Swiper(".gallery-thumbs",{spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0,loop:!0,loopedSlides:4});e.controller.control=i,i.controller.control=e,$(".cart_choose__delete").on("click",function(){$(this).parents(".cart_choose_item").fadeOut()}),$(".ui.dropdown").dropdown(),$(".ui.rating").rating("disable"),$(".bar").each(function(){$(this).find(".bar-inner").animate({width:$(this).attr("data-width")},2e3)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJsaXN0IiwiYnV0dG9uIiwibnVtSW5MaXN0IiwibGVuZ3RoIiwiaGlkZSIsInNob3ciLCJzbGljZSIsImNsaWNrIiwic2hvd2luZyIsImZpbHRlciIsImZhZGVJbiIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJ0aGlzIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwialF1ZXJ5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmllbGQiLCJhdHRyIiwiY3VycmVudFZhbCIsInBhcnNlSW50IiwidmFsIiwiaXNOYU4iLCJnYWxsZXJ5VG9wIiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImxvb3AiLCJsb29wZWRTbGlkZXMiLCJnYWxsZXJ5VGh1bWJzIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXNQZXJWaWV3IiwidG91Y2hSYXRpbyIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJjb250cm9sbGVyIiwiY29udHJvbCIsInBhcmVudHMiLCJmYWRlT3V0IiwiZHJvcGRvd24iLCJyYXRpbmciLCJlYWNoIiwiZmluZCIsImFuaW1hdGUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6IkFBR0FBLEVBQUdDLFVBQVdDLE1BQU0sV0FJaEJGLEVBQUVDLFVBQVVDLE1BQU0sV0FFZCxJQUFJQyxFQUFPSCxFQUFFLGtCQUVUSSxFQUFTSixFQUFFLFNBQ1hLLEVBQVlGLEVBQUtHLE9BQ3JCSCxFQUFLSSxPQUNERixFQUpZLEdBS1pELEVBQU9JLE9BRVhMLEVBQUtNLE1BQU0sRUFQSyxHQU9TRCxPQUV6QkosRUFBT00sTUFBTSxXQUNULElBQUlDLEVBQVVSLEVBQUtTLE9BQU8sWUFBWU4sT0FDdENILEVBQUtNLE1BQU1FLEVBQVUsRUFBR0EsRUFYWixHQVdpQ0UsU0FDNUJWLEVBQUtTLE9BQU8sWUFBWU4sUUFDdkJELEdBQ2RELEVBQU9HLFdBUW5CUCxFQUFFLG1DQUFtQ2MsR0FBRyxRQUFTLFdBQzdDZCxFQUFFLGFBQWFlLFlBQVksY0FDM0JmLEVBQUVnQixNQUFNQyxRQUFRLGFBQWFDLFlBQVksZ0JBTTdDbEIsRUFBRSwyQkFBMkJjLEdBQUcsUUFBUyxXQUNyQ2QsRUFBRSxpQkFBaUJrQixZQUFZLHNCQUMvQmxCLEVBQUUsdUJBQXVCa0IsWUFBWSxtQkFHekNsQixFQUFFLGlCQUFpQmMsR0FBRyxRQUFTLFdBQzNCZCxFQUFFZ0IsTUFBTUQsWUFBWSxzQkFDcEJmLEVBQUUsdUJBQXVCZSxZQUFZLG1CQUt6Q0ksT0FBT2xCLFVBQVVDLE1BQU0sV0FDbkJGLEVBQUUsU0FBU1UsTUFBTyxTQUFTVSxHQUN2QkEsRUFBRUMsaUJBRUZDLE1BQVEsY0FBZ0J0QixFQUFFZ0IsTUFBTU8sS0FBSyxTQUFXLElBRWhELElBQUlDLEVBQWFDLFNBQVN6QixFQUFFc0IsT0FBT0ksUUFFN0JDLE1BQU1ILElBQWVBLEVBQWEsSUFFcEN4QixFQUFFc0IsT0FBT0ksSUFBSUYsRUFBYSxLQUtsQ3hCLEVBQUUsVUFBVVUsTUFBTyxTQUFTVSxHQUV4QkEsRUFBRUMsaUJBR0ZDLE1BQVEsY0FBZ0J0QixFQUFFZ0IsTUFBTU8sS0FBSyxTQUFXLElBR2hELElBQUlDLEVBQWFDLFNBQVN6QixFQUFFc0IsT0FBT0ksUUFHN0JDLE1BQU1ILElBQWVBLEVBQWEsR0FFcEN4QixFQUFFc0IsT0FBT0ksSUFBSUYsRUFBYSxPQVN0QyxJQUFJSSxFQUFhLElBQUlDLE9BQU8sZ0JBQ3hCQyxhQUFjLEdBQ2RDLFlBQ0lDLE9BQVEsc0JBQ1JDLE9BQVEsdUJBRVpDLE1BQU0sRUFDTkMsYUFBYyxJQUVkQyxFQUFnQixJQUFJUCxPQUFPLG1CQUMzQkMsYUFBYyxHQUNkTyxnQkFBZ0IsRUFDaEJDLGNBQWUsT0FDZkMsV0FBWSxHQUNaQyxxQkFBcUIsRUFDckJOLE1BQU0sRUFDTkMsYUFBYyxJQUVsQlAsRUFBV2EsV0FBV0MsUUFBVU4sRUFDaENBLEVBQWNLLFdBQVdDLFFBQVVkLEVBSW5DNUIsRUFBRSx3QkFBd0JjLEdBQUcsUUFBUyxXQUNsQ2QsRUFBRWdCLE1BQU0yQixRQUFRLHFCQUFxQkMsWUFLekM1QyxFQUFFLGdCQUNHNkMsV0FJTDdDLEVBQUUsY0FDRzhDLE9BQU8sV0FLWjlDLEVBQUUsUUFBUStDLEtBQUssV0FDWC9DLEVBQUVnQixNQUFNZ0MsS0FBSyxjQUFjQyxTQUN2QkMsTUFBT2xELEVBQUVnQixNQUFNTyxLQUFLLGVBQ3RCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ3VzdG9tXG4gKi9cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBMb2FkIG1vcmVcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgdmFyIGxpc3QgPSAkKFwiLnByb2R1Y3RzX2l0ZW1cIik7XG4gICAgICAgIHZhciBudW1Ub1Nob3cgPSA0O1xuICAgICAgICB2YXIgYnV0dG9uID0gJChcIiNuZXh0XCIpO1xuICAgICAgICB2YXIgbnVtSW5MaXN0ID0gbGlzdC5sZW5ndGg7XG4gICAgICAgIGxpc3QuaGlkZSgpO1xuICAgICAgICBpZiAobnVtSW5MaXN0ID4gbnVtVG9TaG93KSB7XG4gICAgICAgICAgICBidXR0b24uc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3Quc2xpY2UoMCwgbnVtVG9TaG93KS5zaG93KCk7XG5cbiAgICAgICAgYnV0dG9uLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgc2hvd2luZyA9IGxpc3QuZmlsdGVyKCc6dmlzaWJsZScpLmxlbmd0aDtcbiAgICAgICAgICAgIGxpc3Quc2xpY2Uoc2hvd2luZyAtIDEsIHNob3dpbmcgKyBudW1Ub1Nob3cpLmZhZGVJbigpO1xuICAgICAgICAgICAgdmFyIG5vd1Nob3dpbmcgPSBsaXN0LmZpbHRlcignOnZpc2libGUnKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobm93U2hvd2luZyA+PSBudW1Jbkxpc3QpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgLy8gRkFRXG5cbiAgICAkKCcuZmFxX2l0ZW0gLmZhcV9pdGVtX19xdWVzdGlvbiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuZmFxX2l0ZW0nKS5yZW1vdmVDbGFzcygnZmFxX2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mYXFfaXRlbScpLnRvZ2dsZUNsYXNzKCdmYXFfYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG5cblxuICAgICQoJy5oZWFkZXJfd3JhcF9yb3dfX25hdiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuaGVhZGVyX19vdmVyJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9vdmVyX2FjdGl2ZScpO1xuICAgICAgICAkKCcuaGVhZGVyX19uYXZpZ2F0aW9uJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fZml4ZWQnKTtcbiAgICB9KTtcblxuICAgICQoJy5oZWFkZXJfX292ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9vdmVyX2FjdGl2ZScpO1xuICAgICAgICAkKCcuaGVhZGVyX19uYXZpZ2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fZml4ZWQnKTtcbiAgICB9KTtcblxuICAgIC8vIFF1YW50aXR5XG5cbiAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIucGx1c1wiKS5jbGljayggZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gRGVmaW5lIGZpZWxkIHZhcmlhYmxlXG4gICAgICAgICAgICBmaWVsZCA9IFwiaW5wdXRbbmFtZT1cIiArICQodGhpcykuYXR0cihcImZpZWxkXCIpICsgXCJdXCI7XG4gICAgICAgICAgICAvLyBHZXQgaXRzIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoJChmaWVsZCkudmFsKCkpO1xuICAgICAgICAgICAgLy8gSWYgaXMgbm90IHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCAhaXNOYU4oY3VycmVudFZhbCkgJiYgY3VycmVudFZhbCA8IDk5ICkge1xuICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudFxuICAgICAgICAgICAgICAgICQoZmllbGQpLnZhbChjdXJyZW50VmFsICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgYnV0dG9uIHdpbGwgZGVjcmVtZW50IHRoZSB2YWx1ZSB0aWxsIDBcbiAgICAgICAgJChcIi5taW51c1wiKS5jbGljayggZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBmaWVsZCB2YXJpYWJsZVxuICAgICAgICAgICAgZmllbGQgPSBcImlucHV0W25hbWU9XCIgKyAkKHRoaXMpLmF0dHIoXCJmaWVsZFwiKSArIFwiXVwiO1xuXG4gICAgICAgICAgICAvLyBHZXQgaXRzIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoJChmaWVsZCkudmFsKCkpO1xuXG4gICAgICAgICAgICAvLyBJZiBpdCBpc24ndCB1bmRlZmluZWQgb3IgaXRzIGdyZWF0ZXIgdGhhbiAwXG4gICAgICAgICAgICBpZiAoICFpc05hTihjdXJyZW50VmFsKSAmJiBjdXJyZW50VmFsID4gMSApIHtcbiAgICAgICAgICAgICAgICAvLyBEZWNyZW1lbnQgb25lXG4gICAgICAgICAgICAgICAgJChmaWVsZCkudmFsKGN1cnJlbnRWYWwgLSAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFNsaWRlciBzaW5nbGUgcHJvZHVjdFxuXG5cbiAgICB2YXIgZ2FsbGVyeVRvcCA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXRvcCcsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbG9vcGVkU2xpZGVzOiA0XG4gICAgfSk7XG4gICAgdmFyIGdhbGxlcnlUaHVtYnMgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS10aHVtYnMnLCB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHRvdWNoUmF0aW86IDAuMixcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbG9vcGVkU2xpZGVzOiA0XG4gICAgfSk7XG4gICAgZ2FsbGVyeVRvcC5jb250cm9sbGVyLmNvbnRyb2wgPSBnYWxsZXJ5VGh1bWJzO1xuICAgIGdhbGxlcnlUaHVtYnMuY29udHJvbGxlci5jb250cm9sID0gZ2FsbGVyeVRvcDtcblxuICAgIC8vIERlbGV0ZSB0b3RhbFxuXG4gICAgJCgnLmNhcnRfY2hvb3NlX19kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50cygnLmNhcnRfY2hvb3NlX2l0ZW0nKS5mYWRlT3V0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBEcm9wZG93blxuXG4gICAgJCgnLnVpLmRyb3Bkb3duJylcbiAgICAgICAgLmRyb3Bkb3duKCk7XG5cbiAgICAvLyBSYXRpbmdcblxuICAgICQoJy51aS5yYXRpbmcnKVxuICAgICAgICAucmF0aW5nKCdkaXNhYmxlJylcbiAgICA7XG5cbiAgICAvLyBCYXJcblxuICAgICQoXCIuYmFyXCIpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmJhci1pbm5lclwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmF0dHIoXCJkYXRhLXdpZHRoXCIpXG4gICAgICAgIH0sMjAwMClcbiAgICB9KTtcbn0pOyJdfQ==
