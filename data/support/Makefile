
BINDIR = ../bin
INDEXDIR = ../indexes


### Normalized locations for poem settings ################################

NORMLOC = normalized-locations.hmd

RIMESET = rime-settings
GERUSET = gerusalemme-settings
AMINSET = aminta-settings
OTHERSET = other-settings

normloc: rimeloc geruloc aminloc otherloc
	@echo "Run 'make move' after checking *.temp files"

rimeloc:
	$(BINDIR)/linkfield -p $(NORMLOC) $(INDEXDIR)/$(RIMESET).aton \
		> $(RIMESET).temp

geruloc:
	$(BINDIR)/linkfield -p $(NORMLOC) $(INDEXDIR)/$(GERUSET).aton \
		> $(GERUSET).temp

aminloc:
	$(BINDIR)/linkfield -p $(NORMLOC) $(INDEXDIR)/$(AMINSET).aton \
		> $(AMINSET).temp

otherloc:
	$(BINDIR)/linkfield -p $(NORMLOC) $(INDEXDIR)/$(OTHERSET).aton \
		> $(OTHERSET).temp

move:
	mv $(RIMESET).temp  $(INDEXDIR)/$(RIMESET).aton
	mv $(GERUSET).temp  $(INDEXDIR)/$(GERUSET).aton
	mv $(AMINSET).temp  $(INDEXDIR)/$(AMINSET).aton
	mv $(OTHERSET).temp $(INDEXDIR)/$(OTHERSET).aton



