function makeCollapsible(target, item, collapsible, triggerTarget, setInitStatus, setFirstStatus)
{
	var triggerExpand = gettext('Show');
	var triggerCollapse = gettext('Hide');
	var triggerLink = '<a href="javascript:void(0)"></a>';
	var triggerPrepend = ' ( ';
	var triggerAppend = ' )';
	
	$(target).find(item).each(function(i) {
		var trigger = $(triggerLink)
		$(this).find(triggerTarget).append(trigger);
		trigger.before(triggerPrepend);
		trigger.after(triggerAppend);
		var item = this
		var toggleCollapse = function(status)
		{
			if (status == null) {
				status = !item.collapseStatus;
			}
			item.collapseStatus = status;
			if (status) {
				trigger.html(triggerCollapse);
				$(item).find(collapsible).slideDown("normal");
			} else {
				trigger.html(triggerExpand);
				$(item).find(collapsible).slideUp("normal");
			}
		}

		trigger.click(function(event) {
			event.preventDefault();
			toggleCollapse()
		})

		// Collapse by default unless there are errors
		initStatus = setInitStatus != null ? setInitStatus : $(this).find('.errors').length != 0;
		firstStatus = setFirstStatus != null ? setFirstStatus : initStatus;

		toggleCollapse(i == 0 ? firstStatus : initStatus)
	});
}

jQuery(function($) {
	makeCollapsible('div.inline-group', 'div.inline-related', 'fieldset', 'h3 b');
});
