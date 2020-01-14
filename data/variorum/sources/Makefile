

PROG = bin/insertsources

all: check


check:
	for i in *.txt;			\
	do				\
		$(PROG) -r $$i;		\
	done


changes:
	for i in *.txt;			\
	do				\
		$(PROG) $$i;		\
	done


write:
	for i in *.txt;			\
	do				\
		$(PROG) -w $$i;		\
	done
		
