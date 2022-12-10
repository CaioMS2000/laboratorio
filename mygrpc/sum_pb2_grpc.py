# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import sum_pb2 as sum__pb2


class SumNumbersStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Add = channel.unary_unary(
                '/sum.SumNumbers/Add',
                request_serializer=sum__pb2.AddRequest.SerializeToString,
                response_deserializer=sum__pb2.AddReply.FromString,
                )


class SumNumbersServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Add(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_SumNumbersServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Add': grpc.unary_unary_rpc_method_handler(
                    servicer.Add,
                    request_deserializer=sum__pb2.AddRequest.FromString,
                    response_serializer=sum__pb2.AddReply.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'sum.SumNumbers', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class SumNumbers(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Add(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/sum.SumNumbers/Add',
            sum__pb2.AddRequest.SerializeToString,
            sum__pb2.AddReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
