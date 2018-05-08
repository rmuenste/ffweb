#include <stdlib.h>
#include <stdio.h>

typedef double Daten_Typ;
typedef unsigned int Index_Typ;
typedef unsigned int Zaehler_Typ;
typedef Zaehler_Typ Anz_Typ;

typedef struct
{
  Anz_Typ Anz_Nodes;
  Daten_Typ *X,*Y;
} Nodes_Typ;

/* Moegliche Zustaende fuer Reg_Flag[i] */
#define REG_UNKNOWN 0 
#define REG_REGULAR 1 
#define REG_IRREGULAR 2 

typedef struct
{
  Anz_Typ Anz_Cells;
  Index_Typ *Vert;
  unsigned char *Reg_Flag;
} Cells_Typ;

typedef struct 
{
  Nodes_Typ Nodes;
  Cells_Typ Cells;	
} Gitter_Typ;

typedef struct
{
  Gitter_Typ Gitter;
  Daten_Typ *U,*V;
  Daten_Typ *P,*S;
#ifdef BOUSS
  Daten_Typ *T;
#endif
} Input_Typ;

typedef struct
{
  Daten_Typ L[4];
} B_Coord_Typ;

typedef struct
{
  Anz_Typ Anz_Tracer;
  Daten_Typ *X,*Y;
  Daten_Typ *Farbe,*Expire;
  Index_Typ *InCell;
  B_Coord_Typ *B_Coords;
} Tracer_Typ;

typedef struct
{
  Gitter_Typ Gitter;
  Tracer_Typ Tracers;
  Daten_Typ *P,*S;
#ifdef BOUSS
  Daten_Typ *T;
#endif
} Output_Typ;

typedef struct
{
  Daten_Typ P1X,P1Y,P2X,P2Y,Farbe,Haltbarkeit;
  Anz_Typ NX,NY;
  Anz_Typ Modul,Offset,Start,Stop;
} Block_Typ;

 const Daten_Typ EPS=0.5E-8;
 
 void Lese_Daten(FILE *f,Anz_Typ Anz,Daten_Typ *Daten)
 {
   Zaehler_Typ i;
   if(Daten==NULL)
     {
       for(i=0;i<Anz;i++) fscanf(f,"%*f");
     }
   else
     {
       for(i=0;i<Anz;i++,Daten++) fscanf(f,"%lf",Daten);
     }
 }
 void Schreibe_Daten(FILE *f,Anz_Typ Anz,Daten_Typ *Daten)
 {
   Zaehler_Typ i;
   if(Daten==NULL)
     {
       for(i=0;i<Anz;i++) fprintf(f,"%.8f\n",0.0);
     }
   else
     {
       for(i=0;i<Anz;i++,Daten++) fprintf(f,"%.8f\n",*Daten);
     }
 }
 void Lese_Index(FILE *f,Anz_Typ Anz,Index_Typ *Index)
 {
   Zaehler_Typ i;
   if(Index==NULL)
     {
       for(i=0;i<Anz;i++) fscanf(f,"%*u");
     }
   else
     {
       for(i=0;i<Anz;i++,Index++) fscanf(f,"%u",Index);
     }
 }
 void Schreibe_Index(FILE *f,Anz_Typ Anz,Index_Typ *Index)
 {
   Zaehler_Typ i;
   if(Index==NULL)
     {
       for(i=0;i<Anz;i++) fprintf(f,"%u\n",0);
     }
   else
     {
       for(i=0;i<Anz;i++,Index++) fprintf(f,"%u\n",*Index);
     }
 }
void Lese_Anz(FILE *f,Anz_Typ *Anz)
{
  if(Anz==NULL) fscanf(f,"%*u");
  else fscanf(f,"%u",Anz);
}
void Schreibe_Anz(FILE *f,Anz_Typ Anz)
{
  fprintf(f,"%u\n",Anz);
}
 
void Schreibe_Gitter(FILE *f,Gitter_Typ *Gitter)
{
  Zaehler_Typ i;
  Anz_Typ A;
  fprintf(f,"gmvinput ascii\nnodes ");
  A=Gitter->Nodes.Anz_Nodes;
  Schreibe_Anz(f,A);
  Schreibe_Daten(f,A,Gitter->Nodes.X+1);
  Schreibe_Daten(f,A,Gitter->Nodes.Y+1);
  Schreibe_Daten(f,A,NULL);
  fprintf(f,"cells ");
  A=Gitter->Cells.Anz_Cells;
  Schreibe_Anz(f,A);
  for(i=1;i<=A;i++)
  { 
    fprintf(f,"quad 4\n");
    Schreibe_Index(f,4,Gitter->Cells.Vert+i*4);
  }
}

void Lese_Gitter(FILE *f,Gitter_Typ *Gitter)
{
   Anz_Typ A;
   Zaehler_Typ i;
   fscanf(f,"gmvinput ascii\nnodes");
   Lese_Anz(f,&A);
   if(Gitter!=NULL)
   {
     printf("Ich alloziere nun Speicher für %u Knoten...\n",A);
     Gitter->Nodes.Anz_Nodes=A;
     Gitter->Nodes.X=(Daten_Typ *)calloc(A+1,sizeof(Daten_Typ));
     Gitter->Nodes.Y=(Daten_Typ *)calloc(A+1,sizeof(Daten_Typ));
     printf("Ich lese nun %u Knoten ein...\n",A);
     Lese_Daten(f,A,Gitter->Nodes.X+1);
     Lese_Daten(f,A,Gitter->Nodes.Y+1);
     Lese_Daten(f,A,NULL);
   }
   else
   {
     printf("Ich überlese nun %u Knoten...\n",A);
     Lese_Daten(f,3*A,NULL);
   }
   fscanf(f,"\ncells");
   Lese_Anz(f,&A);
   if(Gitter!=NULL)
   {
     printf("Ich alloziere nun Speicher für %u Zellen...\n",A);
     Gitter->Cells.Anz_Cells=A;
     Gitter->Cells.Vert=(Index_Typ *)calloc((A+1)*4,sizeof(Index_Typ));
     Gitter->Cells.Reg_Flag=(unsigned char *)calloc(A+1,sizeof(unsigned char));
     printf("Ich lese nun %u Zellen ein...\n",A);
     for(i=1;i<=A;i++)
     {
        fscanf(f,"\nquad 4");
        Lese_Index(f,4,Gitter->Cells.Vert+i*4);
     }
   }
   else
   {
     printf("Ich überlese nun %u Zellen...\n",A);
     for(i=1;i<=A;i++)
     {
       fscanf(f,"\nquad 4");
       Lese_Index(f,4,NULL);
     }
   }
}

void Startup_Input(const char *Name,Input_Typ *Input)
{
  FILE *f;
  Anz_Typ A;
  f=fopen(Name,"r");
  Lese_Gitter(f,&(Input->Gitter));
  A=Input->Gitter.Nodes.Anz_Nodes;
  printf("Ich alloziere Speicher für Geschwindigkeit,Druck,Stromfunktion\n");
#ifdef BOUSS
  printf("und Temperatur...\n");
#endif
  Input->U=(Daten_Typ *)calloc(A+1,sizeof(Daten_Typ));
  Input->V=(Daten_Typ *)calloc(A+1,sizeof(Daten_Typ));
  Input->P=(Daten_Typ *)calloc(A+1,sizeof(Daten_Typ));
  Input->S=(Daten_Typ *)calloc(A+1,sizeof(Daten_Typ));
#ifdef BOUSS
  Input->T=(Daten_Typ *)calloc(A+1,sizeof(Daten_Typ));
#endif
  printf("Ich lese nun die Datensätze ein...\n");
  fscanf(f,"\nvelocity 1");
  Lese_Daten(f,A,Input->U+1);
  Lese_Daten(f,A,Input->V+1);
  Lese_Daten(f,A,NULL);
  printf("Geschwindigkeitsfeld gelesen!\n");
  fscanf(f,"\nvariable\npressure 1");
  Lese_Daten(f,A,Input->P+1);
  printf("Druck gelesen!\n");
#ifdef BOUSS
  fscanf(f,"\nviscosity 1");
#else
  fscanf(f,"\nstreamfunction 1");
#endif
  Lese_Daten(f,A,Input->S+1);
  printf("Stromfunktion gelesen!\n");
#ifdef BOUSS
  fscanf(f,"\ntemperature 1");
  Lese_Daten(f,A,Input->T+1);
  printf("Temperatur gelesen!\n");
#endif
  fclose(f);
}

void Update_Input(const char *Name,Input_Typ *Input)
{
  FILE *f;
  Anz_Typ A;
  f=fopen(Name,"r");
  Lese_Gitter(f,NULL);
  A=Input->Gitter.Nodes.Anz_Nodes;
  printf("Ich lese nun die aktualisierten Datensätze ein...\n");
  fscanf(f,"\nvelocity 1");
  Lese_Daten(f,A,Input->U+1);
  Lese_Daten(f,A,Input->V+1);
  Lese_Daten(f,A,NULL);
  printf("Geschwindigkeitsfeld gelesen!\n");
  fscanf(f,"\nvariable\npressure 1");
  Lese_Daten(f,A,Input->P+1);
  printf("Druck gelesen!\n");
#ifdef BOUSS
  fscanf(f,"\nviscosity 1");
#else
  fscanf(f,"\nstreamfunction 1");
#endif
  Lese_Daten(f,A,Input->S+1);
  printf("Stromfunktion gelesen!\n");
#ifdef BOUSS
  fscanf(f,"\ntemperature 1");
  Lese_Daten(f,A,Input->T+1);
  printf("Temperatur gelesen!\n");
#endif
  fclose(f);
}

void Cleanup_Input(Input_Typ *Input)
{
   if(Input!=NULL)
   {
     printf("Ich gebe nun allozierten Speicher wieder frei...\n");
     free(Input->U);
     free(Input->V);
     free(Input->P);
     free(Input->S);
#ifdef BOUSS
     free(Input->T);
#endif
     free(Input->Gitter.Nodes.X);
     free(Input->Gitter.Nodes.Y);
     free(Input->Gitter.Cells.Vert);
     free(Input->Gitter.Cells.Reg_Flag);
   }
}

/* Momentan noch leer! */
void Startup_Suchen(void)
{
}
/**/

Daten_Typ My_Abs(Daten_Typ Val)
{
   return (Val<0.0 ? -Val:Val);
}

int Test_Linie(Gitter_Typ *Gitter,Index_Typ P1,Index_Typ P2,Daten_Typ X,Daten_Typ Y)
{
  Daten_Typ Normal[2],Vect[2],Erg;
  Zaehler_Typ i;
  Vect[0]=X-Gitter->Nodes.X[P1];
  Vect[1]=Y-Gitter->Nodes.Y[P1];
  Normal[0]=-(Gitter->Nodes.Y[P2]-Gitter->Nodes.Y[P1]);
  Normal[1]=Gitter->Nodes.X[P2]-Gitter->Nodes.X[P1];
  for(Erg=0.0,i=0;i<2;i++) Erg+=Vect[i]*Normal[i];
  return (Erg<0.0 ?0:1);
}

int Test_Zelle(Index_Typ C,Gitter_Typ *Gitter,Daten_Typ X,Daten_Typ Y)
{
  Zaehler_Typ i;
  Index_Typ *D;
  D=Gitter->Cells.Vert+4*C;
  for(i=0;i<4;i++) 
  {
    if(!Test_Linie(Gitter,*(D+i),*(D+(i+1)%4),X,Y)) return 0;
  }
  return 1;
}

unsigned char Is_Regular(Index_Typ C,Gitter_Typ *G)
{
  Daten_Typ V[4][2],Erg;
  Zaehler_Typ i;
  if(G->Cells.Reg_Flag[C]!=REG_UNKNOWN) return G->Cells.Reg_Flag[C];
  for(i=0;i<4;i++)
  {
    V[i][0]=G->Nodes.X[G->Cells.Vert[4*C+((i+1)%4)]]-
      G->Nodes.X[G->Cells.Vert[4*C+i]];
    V[i][1]=G->Nodes.Y[G->Cells.Vert[4*C+((i+1)%4)]]-
      G->Nodes.Y[G->Cells.Vert[4*C+i]];
  }
  for(i=0;i<4;i++)
  {
    Erg=V[i][0]*V[(i+1)%4][0]+V[i][1]*V[(i+1)%4][1];
    if(My_Abs(Erg)>=EPS)
    {
      G->Cells.Reg_Flag[C]=REG_IRREGULAR;
      return REG_IRREGULAR;
    }
  }
  G->Cells.Reg_Flag[C]=REG_REGULAR;
  return REG_REGULAR;
}

/* Einfaches lineares Suchen */
Index_Typ Suche_Zelle(Gitter_Typ *Gitter,Daten_Typ X,Daten_Typ Y)
{
  Index_Typ i;
  for(i=1;i<=Gitter->Cells.Anz_Cells;i++)
  {
    if(Test_Zelle(i,Gitter,X,Y)) return i;
  }
  return 0;
}

Index_Typ Append_Tracers(Output_Typ *O,Anz_Typ Anz)
{
   Anz_Typ Neu;
   Neu=O->Tracers.Anz_Tracer+Anz;
   O->Tracers.X=(Daten_Typ *)realloc(O->Tracers.X,Neu*sizeof(Daten_Typ));
   O->Tracers.Y=(Daten_Typ *)realloc(O->Tracers.Y,Neu*sizeof(Daten_Typ));
   O->Tracers.Farbe=(Daten_Typ *)realloc(O->Tracers.Farbe,Neu*sizeof(Daten_Typ));
   O->Tracers.Expire=(Daten_Typ *)realloc(O->Tracers.Expire,Neu*sizeof(Daten_Typ));
   O->Tracers.InCell=(Index_Typ *)realloc(O->Tracers.InCell,Neu*sizeof(Index_Typ));
   O->Tracers.B_Coords=(B_Coord_Typ *)realloc(O->Tracers.B_Coords,Neu*sizeof(B_Coord_Typ));
   O->P=(Daten_Typ *)realloc(O->P,Neu*sizeof(Daten_Typ));
   O->S=(Daten_Typ *)realloc(O->S,Neu*sizeof(Daten_Typ));
#ifdef BOUSS
   O->T=(Daten_Typ *)realloc(O->T,Neu*sizeof(Daten_Typ));
#endif
   Neu=O->Tracers.Anz_Tracer;
   O->Tracers.Anz_Tracer+=Anz;
   return Neu;
}

void Clear_Tracer(Output_Typ *O,Index_Typ Pos)
{
  Index_Typ i;
  O->Tracers.Anz_Tracer--;
  for(i=Pos;i<O->Tracers.Anz_Tracer;i++)
  {
    O->Tracers.X[i]=O->Tracers.X[i+1];
    O->Tracers.Y[i]=O->Tracers.Y[i+1];
    O->Tracers.Farbe[i]=O->Tracers.Farbe[i+1];
    O->Tracers.Expire[i]=O->Tracers.Expire[i+1];
    O->Tracers.InCell[i]=O->Tracers.InCell[i+1];
    O->Tracers.B_Coords[i]=O->Tracers.B_Coords[i+1];
    O->P[i]=O->P[i+1];
    O->S[i]=O->S[i+1];
#ifdef BOUSS
    O->T[i]=O->T[i+1];
#endif
  }
}

int Barc(Daten_Typ X1,Daten_Typ X2,Daten_Typ X3,Daten_Typ Y1,Daten_Typ Y2,
  Daten_Typ Y3,Daten_Typ X,Daten_Typ Y,Daten_Typ *L)
{
  Zaehler_Typ i;
  Daten_Typ Delta,A[3],B[3],C[3];
  Delta=(X3-X2)*(Y1-Y2)-(Y3-Y2)*(X1-X2);
  A[0]=(X2*Y3-X3*Y2)/Delta;
  B[0]=(Y2-Y3)/Delta;
  C[0]=(X3-X2)/Delta;
  A[1]=(X3*Y1-X1*Y3)/Delta;
  B[1]=(Y3-Y1)/Delta;
  C[1]=(X1-X3)/Delta;
  A[2]=(X1*Y2-X2*Y1)/Delta;
  B[2]=(Y1-Y2)/Delta;
  C[2]=(X2-X1)/Delta;
  for (i=0;i<3;i++) L[i]=A[i]+B[i]*X+C[i]*Y;
  for(i=0;i<3;i++)
  { 
    if(L[i]<=-EPS) return 0;
  }
  return 1;
}

void Calc_Barc(Gitter_Typ *G,Tracer_Typ *T,Index_Typ P)
{
  Index_Typ C;
  Anz_Typ NC;
  Zaehler_Typ i;
  Daten_Typ Alpha,Beta,Alph,Bet,X[4],Y[4],L[3];
  C=T->InCell[P];
  for(i=0;i<4;i++)
  {
    X[i]=G->Nodes.X[G->Cells.Vert[i+4*C]];
    Y[i]=G->Nodes.Y[G->Cells.Vert[i+4*C]];
  }
  if (Is_Regular(C,G)==REG_REGULAR)
  {
    if(My_Abs(X[1]-X[0])>EPS) Alpha=(T->X[P]-X[0])/(X[1]-X[0]);
    else Alpha=(T->Y[P]-Y[0])/(Y[1]-Y[0]);
    Alph=1.0-Alpha;
    if(My_Abs(X[0]-X[3])>EPS) Beta=(T->X[P]-X[0])/(X[3]-X[0]);
    else Beta=(T->Y[P]-Y[0])/(Y[3]-Y[0]);
    Bet=1.0-Beta;
    T->B_Coords[P].L[0]=Alph*Bet;
    T->B_Coords[P].L[1]=Alpha*Bet;
    T->B_Coords[P].L[2]=Alpha*Beta;
    T->B_Coords[P].L[3]=Alph*Beta;  
  }
  else
  {
    NC=0;
    for(i=0;i<4;i++) T->B_Coords[P].L[i]=0.0;
    if(Barc(X[0],X[1],X[2],Y[0],Y[1],Y[2],T->X[P],T->Y[P],&L[0]))
    {
      T->B_Coords[P].L[0]+=L[0];
      T->B_Coords[P].L[1]+=L[1];
      T->B_Coords[P].L[2]+=L[2];
      NC++;
    }
    if(Barc(X[0],X[2],X[3],Y[0],Y[2],Y[3],T->X[P],T->Y[P],&L[0]))
    {
      T->B_Coords[P].L[0]+=L[0];
      T->B_Coords[P].L[2]+=L[1];
      T->B_Coords[P].L[3]+=L[2];
      NC++;
    }
    if(Barc(X[1],X[2],X[3],Y[1],Y[2],Y[3],T->X[P],T->Y[P],&L[0]))
    {
      T->B_Coords[P].L[1]+=L[0];
      T->B_Coords[P].L[2]+=L[1];
      T->B_Coords[P].L[3]+=L[2];
      NC++;
    }
    if(Barc(X[0],X[1],X[3],Y[0],Y[1],Y[3],T->X[P],T->Y[P],&L[0]))
    {
      T->B_Coords[P].L[0]+=L[0];
      T->B_Coords[P].L[1]+=L[1];
      T->B_Coords[P].L[3]+=L[2];
      NC++;
    }
    for(i=0;i<4;i++) T->B_Coords[P].L[i]/=NC;
  }
}

void Gen_Tracers(Gitter_Typ* G,Output_Typ *O,Block_Typ *B)
{
  Index_Typ Offset;
  Zaehler_Typ i,j;
  Daten_Typ HX,HY;
  Offset=Append_Tracers(O,B->NX*B->NY);
  HX=(B->P2X-B->P1X)/B->NX;
  HY=(B->P2Y-B->P1Y)/B->NY;
  for(i=0;i<B->NX;i++)
    for(j=0;j<B->NY;j++)
    {
      O->Tracers.X[Offset]=B->P1X+(0.5+i)*HX;
      O->Tracers.Y[Offset]=B->P1Y+(0.5+j)*HY;
      O->Tracers.Farbe[Offset]=B->Farbe;
      O->Tracers.Expire[Offset]=B->Haltbarkeit;
      O->Tracers.InCell[Offset]=Suche_Zelle(G,O->Tracers.X[Offset],O->Tracers.Y[Offset]);
      if(!O->Tracers.InCell[Offset]) Clear_Tracer(O,Offset);
      else
      {
        Calc_Barc(G,&(O->Tracers),Offset);
      	Offset++;
      }
    }
}

void Bewege_Tracer(Output_Typ *O,Input_Typ *I,Daten_Typ t)
{
  Zaehler_Typ i,j,pos,stop;
  Daten_Typ Dummy;
  stop=O->Tracers.Anz_Tracer;
  for(i=0,pos=0;i<stop;i++)
  {
    for(j=0,Dummy=0.0;j<4;j++)
      Dummy+=O->Tracers.B_Coords[pos].L[j]*
      I->U[I->Gitter.Cells.Vert[j+4*O->Tracers.InCell[pos]]];
    O->Tracers.X[pos]+=t*Dummy;
    for(j=0,Dummy=0.0;j<4;j++)
      Dummy+=O->Tracers.B_Coords[pos].L[j]*
      I->V[I->Gitter.Cells.Vert[j+4*O->Tracers.InCell[pos]]];
    O->Tracers.Y[pos]+=t*Dummy;
    if(!Test_Zelle(O->Tracers.InCell[pos],&(I->Gitter),O->Tracers.X[pos],O->Tracers.Y[pos]));
    {
      O->Tracers.InCell[pos]=Suche_Zelle(&(I->Gitter),O->Tracers.X[pos],O->Tracers.Y[pos]);
    }
    O->Tracers.Expire[pos]-=t;
    if((!O->Tracers.InCell[pos])||(O->Tracers.Expire[pos]<-EPS)) Clear_Tracer(O,pos);
    else
    {
      Calc_Barc(&(I->Gitter),&(O->Tracers),pos);
      pos++;
    }
  }
}

void Calculate_Values(Output_Typ *O,Input_Typ *I)
{
  Zaehler_Typ i,j;
  Daten_Typ Dummy;
  for(i=0;i<O->Tracers.Anz_Tracer;i++)
  {
    for(j=0,Dummy=0.0;j<4;j++)
      Dummy+=O->Tracers.B_Coords[i].L[j]*
      I->P[I->Gitter.Cells.Vert[j+4*O->Tracers.InCell[i]]];
    O->P[i]=Dummy;
    for(j=0,Dummy=0.0;j<4;j++)
      Dummy+=O->Tracers.B_Coords[i].L[j]*
      I->S[I->Gitter.Cells.Vert[j+4*O->Tracers.InCell[i]]];
    O->S[i]=Dummy;
#ifdef BOUSS
    for(j=0,Dummy=0.0;j<4;j++)
      Dummy+=O->Tracers.B_Coords[i].L[j]*
      I->T[I->Gitter.Cells.Vert[j+4*O->Tracers.InCell[i]]];
    O->T[i]=Dummy;
#endif    
  }
}

void Schreibe_Output(const char *Name,Output_Typ *O)
{
  FILE *f;
  Anz_Typ A;
  f=fopen(Name,"w");
  Schreibe_Gitter(f,&(O->Gitter));
  fprintf(f,"tracers ");
  A=O->Tracers.Anz_Tracer;
  Schreibe_Anz(f,A);
  Schreibe_Daten(f,A,O->Tracers.X);
  Schreibe_Daten(f,A,O->Tracers.Y);
  Schreibe_Daten(f,A,NULL);
  fprintf(f,"Pressure\n");
  Schreibe_Daten(f,A,O->P);
  fprintf(f,"Stream\n");
  Schreibe_Daten(f,A,O->S);
#ifdef BOUSS
  fprintf(f,"Temp\n");
  Schreibe_Daten(f,A,O->T);
#endif
  fprintf(f,"Farbe\n");
  Schreibe_Daten(f,A,O->Tracers.Farbe);
  fprintf(f,"endtrace\n");
  fprintf(f,"endgmv\n");
  fclose(f);
}

void Cleanup_Output(Output_Typ *O)
{
  free(O->Gitter.Nodes.X);
  free(O->Gitter.Nodes.Y);
  O->Gitter.Nodes.Anz_Nodes=0;
  free(O->Gitter.Cells.Vert);
  free(O->Gitter.Cells.Reg_Flag);
  O->Gitter.Cells.Anz_Cells=0;
  free(O->Tracers.X);
  free(O->Tracers.Y);
  free(O->Tracers.Farbe);
  free(O->Tracers.Expire);
  free(O->Tracers.InCell);
  free(O->Tracers.B_Coords);
  O->Tracers.Anz_Tracer=0;
  free(O->P);
  free(O->S);
#ifdef BOUSS
  free(O->T);
#endif
}

int Datei_Existiert(const char *Name)
{
  FILE *f;
  f=fopen(Name,"r");
  if(f==NULL) return 0;
  fclose(f);
  return 1;
}

Zaehler_Typ Modul_Input,Modul_Output;
Anz_Typ Anz_Zeitschritte,Anz_Block;
Daten_Typ Zeitschritt;
Block_Typ *Blocks;

void Lese_Parameter(const char *Name)
{
  FILE *f;
  Zaehler_Typ i;
  f=fopen(Name,"r");
  Lese_Anz(f,&Anz_Zeitschritte);Lese_Daten(f,1,&Zeitschritt);
  Lese_Anz(f,&Modul_Input);Lese_Anz(f,&Modul_Output);
  Lese_Anz(f,&Anz_Block);
  Blocks=(Block_Typ *)calloc(Anz_Block,sizeof(Block_Typ));
  for(i=0;i<Anz_Block;i++)
  {
    Lese_Daten(f,1,&(Blocks[i].P1X));
    Lese_Daten(f,1,&(Blocks[i].P1Y));
    Lese_Daten(f,1,&(Blocks[i].P2X));
    Lese_Daten(f,1,&(Blocks[i].P2Y));
    Lese_Anz(f,&(Blocks[i].NX));
    Lese_Anz(f,&(Blocks[i].NY));
    Lese_Anz(f,&(Blocks[i].Modul));
    Lese_Anz(f,&(Blocks[i].Offset));
    Lese_Anz(f,&(Blocks[i].Start));
    Lese_Anz(f,&(Blocks[i].Stop));
    Lese_Daten(f,1,&(Blocks[i].Farbe));
    Lese_Daten(f,1,&(Blocks[i].Haltbarkeit));
  }
}
#define BSize 1024 
char NOut[BSize],NIn[BSize];
Output_Typ O;
Input_Typ I;

int main(void)
{
  Zaehler_Typ In_Pos,Out_Pos,T_Pos,i;
  FILE *f;
  
#ifdef BOUSS
  puts("GMVPT angepasst fuer BOUSS");
#else
  puts("GMVPT angepasst fuer PP2D,CP2D,...");
#endif
  Lese_Parameter("#data/gmvpt.dat");
  In_Pos=0;
  Out_Pos=0;
  O.Tracers.X=O.Tracers.Y=O.P=O.S=NULL;
#ifdef BOUSS
  O.T=NULL;
#endif
  O.Tracers.Anz_Tracer=0;
  O.Tracers.Farbe=NULL;
  O.Tracers.Expire=NULL;
  O.Tracers.InCell=NULL;
  O.Tracers.B_Coords=NULL;
  f=fopen("#gmv/coarse.gmv","r");
  Lese_Gitter(f,&O.Gitter);
  fclose(f);
  Startup_Suchen();
  for(T_Pos=0;T_Pos<Anz_Zeitschritte;T_Pos++)
  {
    if(T_Pos%Modul_Input==0)
    {
      do {
        In_Pos++;
        sprintf(NIn,"#gmv/u.%d.gmv",In_Pos);
      } while(!Datei_Existiert(NIn));
      if(T_Pos==0) Startup_Input(NIn,&I);
      else Update_Input(NIn,&I);
    }
    for(i=0;i<Anz_Block;i++)
    {
      if((T_Pos>=Blocks[i].Start)&&(T_Pos<=Blocks[i].Stop)&&
	 ((T_Pos+(Blocks[i].Modul-Blocks[i].Offset))%Blocks[i].Modul==0))
      {
        printf("Erzeuge Block %d ...\n",i+1); 
        Gen_Tracers(&(I.Gitter),&O,Blocks+i);
      }
    }
    if(T_Pos%Modul_Output==0)
    {
      printf("Ausgabe der Tracer!\n");
      Out_Pos++;
      sprintf(NOut,"#gmv/t.%d.gmv",Out_Pos);
      Calculate_Values(&O,&I);
      Schreibe_Output(NOut,&O);
    }
    printf("Bewege Tracer um einen Zeitschritt...\n");
    Bewege_Tracer(&O,&I,Zeitschritt);

  }
  Cleanup_Input(&I);
  Cleanup_Output(&O);
  return EXIT_SUCCESS;
}
