function showHideEndDate() {

    if ($('#underway').prop("checked")) {
        $('#endDateDiv').hide();
    } 
    else {
        $('#endDateDiv').show();
    }    
}


function initEndDate() {

    if ( ($('#startDate').val() !== '') && ( $('#endDate').val() === '9999-12-31')) {
        // always clear this invalid date, else browser might die
        $('#endDate').val('');
        // must be 'underway'
        $('#underway').prop('checked', 'checked');
    }
    
    showHideEndDate();
}


	
    $( document ).ready(function() {

        initStudyArray();

        fillStudyList1( $("#programOfStudy").val(), 
                        document.getElementById("fieldOfStudy1"),
                        "0000");
    
        initEndDate();
    }); 

    var Study;

    function initStudyArray() {
		
		Study  = new Array();
		
		//none (Select)
		Study[0] = new Array("");
		
		
		
		
		
		
			
			
				//Close previous one only if not at the start
				
				var id = "0001";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Accounting"
			
		
			
				
			,
			
			"0002 Administration"
			
		
			
				
			,
			
			"0003 Auditing"
			
		
			
				
			,
			
			"0004 Business administration"
			
		
			
				
			,
			
			"0005 Commerce"
			
		
			
				
			,
			
			"0006 E-Business or E-Commerce"
			
		
			
				
			,
			
			"0007 Economics"
			
		
			
				
			,
			
			"0008 Finance"
			
		
			
				
			,
			
			"0009 Human resources"
			
		
			
				
			,
			
			"0010 Information management"
			
		
			
				
			,
			
			"0011 Labour/industrial relations"
			
		
			
				
			,
			
			"0012 Logistics"
			
		
			
				
			,
			
			"0013 Material management"
			
		
			
				
			,
			
			"0014 Supply chain management"
			
		
			
				
			,
			
			"0015 Occupational health and safety"
			
		
			
				
			,
			
			"0016 Public administration"
			
		
			
				
			,
			
			"0017 Statistics"
			
		
			
				
			,
			
			"0018 Taxation"
			
		
			
				
			,
			
			"0019 Other"
			
		
			
				
			,
			
			"0020 N/A"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0002";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Arts"
			
		
			
				
			,
			
			"0002 English"
			
		
			
				
			,
			
			"0003 French"
			
		
			
				
			,
			
			"0004 Linguistics"
			
		
			
				
			,
			
			"0005 Literature"
			
		
			
				
			,
			
			"0006 Other"
			
		
			
				
			,
			
			"0007 N/A"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0003";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Communication"
			
		
			
				
			,
			
			"0002 Information management"
			
		
			
				
			,
			
			"0003 Information sciences"
			
		
			
				
			,
			
			"0004 Library sciences"
			
		
			
				
			,
			
			"0005 Public relations"
			
		
			
				
			,
			
			"0006 Telecommunication"
			
		
			
				
			,
			
			"0007 Other"
			
		
			
				
			,
			
			"0008 N/A"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0004";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Computer engineering"
			
		
			
				
			,
			
			"0002 Computer mathematics"
			
		
			
				
			,
			
			"0003 Computer programming"
			
		
			
				
			,
			
			"0004 Computer science"
			
		
			
				
			,
			
			"0005 Computer science technical"
			
		
			
				
			,
			
			"0006 Computer systems"
			
		
			
				
			,
			
			"0007 Information management"
			
		
			
				
			,
			
			"0008 Information processing"
			
		
			
				
			,
			
			"0009 Information systems"
			
		
			
				
			,
			
			"0010 Information technology"
			
		
			
				
			,
			
			"0011 Networks"
			
		
			
				
			,
			
			"0012 Software engineering"
			
		
			
				
			,
			
			"0013 Other"
			
		
			
				
			,
			
			"0014 N/A"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0005";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Administrative law"
			
		
			
				
			,
			
			"0002 Civil law"
			
		
			
				
			,
			
			"0003 Commercial law"
			
		
			
				
			,
			
			"0004 Common law"
			
		
			
				
			,
			
			"0005 Labour law"
			
		
			
				
			,
			
			"0006 Law"
			
		
			
				
			,
			
			"0007 Tax law"
			
		
			
				
			,
			
			"0008 Other"
			
		
			
				
			,
			
			"0009 N/A"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0006";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Biology"
			
		
			
				
			,
			
			"0002 Biochemistry"
			
		
			
				
			,
			
			"0003 Chemistry"
			
		
			
				
			,
			
			"0004 Geology"
			
		
			
				
			,
			
			"0005 Engineering"
			
		
			
				
			,
			
			"0006 Mathematics"
			
		
			
				
			,
			
			"0007 Physics"
			
		
			
				
			,
			
			"0008 Sciences"
			
		
			
				
			,
			
			"0009 Statistics"
			
		
			
				
			,
			
			"0010 Other"
			
		
			
				
			,
			
			"0011 N/A"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0007";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Anthropology"
			
		
			
				
			,
			
			"0002 Criminology"
			
		
			
				
			,
			
			"0003 Education"
			
		
			
				
			,
			
			"0004 Geography"
			
		
			
				
			,
			
			"0005 History"
			
		
			
				
			,
			
			"0006 Home economics"
			
		
			
				
			,
			
			"0007 Philosophy"
			
		
			
				
			,
			
			"0008 Political science"
			
		
			
				
			,
			
			"0009 Psychology"
			
		
			
				
			,
			
			"0010 Social sciences"
			
		
			
				
			,
			
			"0011 Social work"
			
		
			
				
			,
			
			"0012 Sociology"
			
		
			
				
			,
			
			"0013 Other"
			
		
			
				
			,
			
			"0014 N/A"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0008";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 CS"
			
		
			
				
			,
			
			"0002 HR"
			
		
			
				
			,
			
			"0003 SP (former PG)"
			
		
			
				
			,
			
			"0004 Other"
			
		
			
				
			,
			
			"0005 N/A"
			
		
			
				
			,
			
			"0006 PS"
			
		
			
				
			,
			
			"0007 SI"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0009";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 AU education standard"
			
		
			
				
			,
			
			"0002 CS education standard"
			
		
			
				
			,
			
			"0003 FI-01 educ. standard May 2006"
			
		
			
				
			,
			
			"0004 FI-02 educ. standard May 2006"
			
		
			
				
			,
			
			"0005 HR/RH education standard"
			
		
			
				
			,
			
			"0006 CRA 2 yr accounting certificat"
			
		
			
				
			,
			
			"0007 SP standard - Exception C"
			
		
			
				
			,
			
			"0008 SP standard - Grp 1 - Jan 2007"
			
		
			
				
			,
			
			"0009 SP standard - Grp 1 - Mar 2008"
			
		
			
				
			,
			
			"0010 SP standard - Grp 2 - Jan 2007"
			
		
			
				
			,
			
			"0011 SP standard - Grp 2 - Mar 2008"
			
		
			
				
			,
			
			"0012 SP standard - Grp 2 - Nov 2011"
			
		
			
				
			,
			
			"0013 SP stand. (former PG) Apr 2011"
			
		
			
				
			,
			
			"0014 Other"
			
		
			
				
			,
			
			"0015 N/A"
			
		
			
				
			,
			
			"0016 AC education standard"
			
		
			
				
			,
			
			"0017 CO education standard"
			
		
			
				
			,
			
			"0018 MG education standard Jan 2004"
			
		
			
			
				//Close previous one only if not at the start
				
				)
				
				var id = "0010";
				// Remove leading zeros or javascript parseInt will take it as an octal
				id = id.replace(/^0+/,"");
				id = parseInt(id);
				
				Study[id] = new Array (
				
				
			
			
			"0001 Other"
			
		
		)
	}	
	function fillStudyList1( y, myComboBox, valueSelected ) 
	{
        // First clear entire list by setting length to zero and selected index to the first option:
        myComboBox.options.length = 0;
        
		// If there is nothing selected in the Program of Study, set 
		// default for Field of Study to 'Select' i.e. 0000		
		if ( y == "" ) {
			y = "0";
			valueSelected = "0000"
			
	        // ALWAYS add the default 'Select' first option
	        myComboBox.options[0] = new Option("Select from Area of study first", "");
		}
		else {
	        // ALWAYS add the default 'Select' first option
	        myComboBox.options[0] = new Option("Select", "");
		}

		
		myComboBox.selectedIndex  = 0;  // not working in Firefox for mobile mode!! WHY???? WET3 related?

		// Now add the options from our data array in Study array[x]
		// Remove leading zeros or javascript parseint will take it as an octal 
		var x = parseInt( y.replace(/^0+/,"") );
		
		if (!x)
			x = 0;

		for(i = 0; i < Study[x].length; i++) {
			var newOpt = new Option(Study[x][i].substring(5), Study[x][i].substring(0,4));
			if( valueSelected == Study[x][i].substring(0,4) ) {
				newOpt.selected = true;
			} 
			myComboBox.options[i+1] = newOpt;
		}
	}
