function getPrefix()
{
 if ($("div#main.view-active").length)
	return "cpp_ref/";
 return "";
}

function toggleVisibility(linkObj)
{
 var base = dQuery(linkObj).attr('id');
 var summary = dQuery('#'+base+'-summary');
 var content = dQuery('#'+base+'-content');
 var trigger = dQuery('#'+base+'-trigger');
 var src=dQuery(trigger).attr('src');
 if (content.is(':visible')===true) {
   content.slideUp();
   summary.slideDown();
   dQuery(linkObj).addClass('closed').removeClass('opened');
   dQuery(trigger).attr('src',src.substring(0,src.length-8)+'closed.png');
 } else {
   content.slideDown();
   summary.slideUp();
   dQuery(linkObj).removeClass('closed').addClass('opened');
   dQuery(trigger).attr('src',src.substring(0,src.length-10)+'open.png');
 } 
 return false;
}

function updateStripes()
{
  dQuery('table.directory tr').
       removeClass('even').filter(':visible:even').addClass('even');
}

function toggleLevel(level)
{
  dQuery('table.directory tr').each(function() {
    var l = this.id.split('_').length-1;
    var i = dQuery('#img'+this.id.substring(3));
    var a = dQuery('#arr'+this.id.substring(3));
    if (l<level+1) {
      i.removeClass('iconfopen iconfclosed').addClass('iconfopen');
      a.html('&#9660;');
      dQuery(this).slideDown();
    } else if (l==level+1) {
      i.removeClass('iconfclosed iconfopen').addClass('iconfclosed');
      a.html('&#9658;');
      dQuery(this).slideDown();
    } else {
      dQuery(this).slideUp();
    }
  });
  updateStripes();
}

function toggleFolder(id)
{
  // the clicked row
  var currentRow = dQuery('#row_'+id);

  // all rows after the clicked row
  var rows = currentRow.nextAll("tr");

  var re = new RegExp('^row_'+id+'\\d+_$', "i"); //only one sub

  // only match elements AFTER this one (can't hide elements before)
  var childRows = rows.filter(function() { return this.id.match(re); });

  // first row is visible we are HIDING
  if (childRows.filter(':first').is(':visible')===true) {
    // replace down arrow by right arrow for current row
    var currentRowSpans = currentRow.find("span");
    currentRowSpans.filter(".iconfopen").removeClass("iconfopen").addClass("iconfclosed");
    currentRowSpans.filter(".arrow").html('&#9658;');
    rows.filter("[id^=row_"+id+"]").slideUp(); // hide all children
  } else { // we are SHOWING
    // replace right arrow by down arrow for current row
    var currentRowSpans = currentRow.find("span");
    currentRowSpans.filter(".iconfclosed").removeClass("iconfclosed").addClass("iconfopen");
    currentRowSpans.filter(".arrow").html('&#9660;');
    // replace down arrows by right arrows for child rows
    var childRowsSpans = childRows.find("span");
    childRowsSpans.filter(".iconfopen").removeClass("iconfopen").addClass("iconfclosed");
    childRowsSpans.filter(".arrow").html('&#9658;');
    childRows.slideDown(); //show all children
  }
  updateStripes();
}


function toggleInherit(id)
{
  var rows = dQuery('tr.inherit.'+id);
  var img = dQuery('tr.inherit_header.'+id+' img');
  var src = dQuery(img).attr('src');
  if (rows.filter(':first').is(':visible')===true) {
    rows.css('display','none');
    dQuery(img).attr('src',src.substring(0,src.length-8)+'closed.png');
  } else {
    rows.css('display','table-row'); // using slideDown() causes jump in firefox
    if (navigator.appVersion.indexOf("MSIE 7.")!=-1) { rows.css('display','block'); } // fix for IE7 and CHMs
    dQuery(img).attr('src',src.substring(0,src.length-10)+'open.png');
  }
}

