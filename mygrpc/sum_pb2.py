# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: sum.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\tsum.proto\x12\x03sum\"\"\n\nAddRequest\x12\t\n\x01\x61\x18\x01 \x01(\x05\x12\t\n\x01\x62\x18\x02 \x01(\x05\"\x15\n\x08\x41\x64\x64Reply\x12\t\n\x01r\x18\x01 \x01(\x05\x32\x33\n\nSumNumbers\x12%\n\x03\x41\x64\x64\x12\x0f.sum.AddRequest\x1a\r.sum.AddReplyb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'sum_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _ADDREQUEST._serialized_start=18
  _ADDREQUEST._serialized_end=52
  _ADDREPLY._serialized_start=54
  _ADDREPLY._serialized_end=75
  _SUMNUMBERS._serialized_start=77
  _SUMNUMBERS._serialized_end=128
# @@protoc_insertion_point(module_scope)