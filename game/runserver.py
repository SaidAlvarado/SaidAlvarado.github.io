import http.server
import socketserver
import sys

if sys.argv[1:]:
    PORT = int(sys.argv[1])
    server_ip=str(sys.argv[2])
else:
    PORT= 5001
    server_ip="127.0.0.1"

Handler= http.server.SimpleHTTPRequestHandler
httpd=socketserver.TCPServer((server_ip,PORT),Handler)

if __name__=="__main__":

    print("Serving at port: ", str(PORT))
    httpd.serve_forever()
