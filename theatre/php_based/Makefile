SASSCOMP = compass compile --force -s compact
SASSWATCH = compass watch --force -s compact
SASSDIR = scss
SASSOUT = stylesheets/

HAMLFILE = haml/

cwatch:
	cd $(SASSOUT)
	$(SASSWATCH) --sass-dir $(SASSDIR) .

haml:
	cd $(HAMLFILE)
	./compilation.sh .
	echo

allcomp: haml
	cd $(SASSOUT)
	$(SASSCOMP) --sass-dir $(SASSDIR) .