#include <stdio.h>
#include <stdlib.h>

#include "Utils.c"

struct Value_
{
  enum { is_ValueInteger, is_ValueDouble, is_ValueChar, is_ValueString } kind;
  union
  {
    struct { int integer_; } valueinteger_;
    struct { float float_; } valuefloat_;
    struct { double double_; } valuedouble_;
    struct { char char_; } valuechar_;
    struct { string string_; } valuestring_;
  } u;
};

typedef struct Value_ *Value;
//Value tmp = (Value) malloc(sizeof(*tmp));

int main(){

    return 0;
}