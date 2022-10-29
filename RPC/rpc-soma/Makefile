all: common client servidor
common:
	rpcgen -C simp.x
	gcc -c *.c
client:
	gcc -o client simpclient.o simp_clnt.o simp_xdr.o -lnsl
servidor:
	gcc -o server simpservice.o simp_svc.o simp_xdr.o -lrpcsvc -lnsl
run: ./servidor