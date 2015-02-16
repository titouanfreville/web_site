#include <sys/types.h>
#include <fcntl.h>
#include <sys.stat.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

/* tube 0 -> numéro de fichier ouver pour la lecture 
   tube 1 -> numéro de fichier ouvert pour l'écriture */

int main(int argc, char** argv){
  char* buffer;
  int tube[2];
  int nbcarlu,nbcarecr;
  int ret1 = pipe(tube);
  if (ret1<0){
    perror("pb ouverture tube");
    exit(1);
  }
  do {
    read(0,buffer);
    
  }
}