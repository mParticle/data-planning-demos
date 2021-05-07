;(function(root, factory) {
  if (typeof define === "function" && define.amd) define(["exports"], factory)
  else if (typeof exports === "object") factory(module.exports)
  else
    root["smartype-smartype"] = factory(
      typeof this["smartype-smartype"] === "undefined"
        ? {}
        : this["smartype-smartype"]
    )
})(this, function(_) {
  "use strict"
  AbstractSet.prototype = Object.create(AbstractCollection.prototype)
  AbstractSet.prototype.constructor = AbstractSet
  _no_name_provided__2.prototype = Object.create(AbstractSet.prototype)
  _no_name_provided__2.prototype.constructor = _no_name_provided__2
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype)
  IntProgressionIterator.prototype.constructor = IntProgressionIterator
  CharProgressionIterator.prototype = Object.create(CharIterator.prototype)
  CharProgressionIterator.prototype.constructor = CharProgressionIterator
  IntRange.prototype = Object.create(IntProgression.prototype)
  IntRange.prototype.constructor = IntRange
  CharRange.prototype = Object.create(CharProgression.prototype)
  CharRange.prototype.constructor = CharRange
  AbstractMutableCollection.prototype = Object.create(
    AbstractCollection.prototype
  )
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection
  AbstractMutableList.prototype = Object.create(
    AbstractMutableCollection.prototype
  )
  AbstractMutableList.prototype.constructor = AbstractMutableList
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype)
  AbstractMutableMap.prototype.constructor = AbstractMutableMap
  AbstractMutableSet.prototype = Object.create(
    AbstractMutableCollection.prototype
  )
  AbstractMutableSet.prototype.constructor = AbstractMutableSet
  _no_name_provided__5.prototype = Object.create(AbstractMutableSet.prototype)
  _no_name_provided__5.prototype.constructor = _no_name_provided__5
  ArrayList.prototype = Object.create(AbstractMutableList.prototype)
  ArrayList.prototype.constructor = ArrayList
  HashMap.prototype = Object.create(AbstractMutableMap.prototype)
  HashMap.prototype.constructor = HashMap
  EntrySet.prototype = Object.create(AbstractMutableSet.prototype)
  EntrySet.prototype.constructor = EntrySet
  HashSet.prototype = Object.create(AbstractMutableSet.prototype)
  HashSet.prototype.constructor = HashSet
  LinkedHashMap.prototype = Object.create(HashMap.prototype)
  LinkedHashMap.prototype.constructor = LinkedHashMap
  ChainEntry.prototype = Object.create(SimpleEntry.prototype)
  ChainEntry.prototype.constructor = ChainEntry
  EntrySet_0.prototype = Object.create(AbstractMutableSet.prototype)
  EntrySet_0.prototype.constructor = EntrySet_0
  LinkedHashSet.prototype = Object.create(HashSet.prototype)
  LinkedHashSet.prototype.constructor = LinkedHashSet
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype)
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype)
  NothingKClassImpl.prototype.constructor = NothingKClassImpl
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype)
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl
  Long.prototype = Object.create(Number_0.prototype)
  Long.prototype.constructor = Long
  Exception.prototype = Object.create(Error.prototype)
  Exception.prototype.constructor = Exception
  RuntimeException.prototype = Object.create(Exception.prototype)
  RuntimeException.prototype.constructor = RuntimeException
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype)
  IllegalArgumentException.prototype.constructor = IllegalArgumentException
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype)
  NoSuchElementException.prototype.constructor = NoSuchElementException
  IllegalStateException.prototype = Object.create(RuntimeException.prototype)
  IllegalStateException.prototype.constructor = IllegalStateException
  UnsupportedOperationException.prototype = Object.create(
    RuntimeException.prototype
  )
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException
  IndexOutOfBoundsException.prototype = Object.create(
    RuntimeException.prototype
  )
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException
  ArithmeticException.prototype = Object.create(RuntimeException.prototype)
  ArithmeticException.prototype.constructor = ArithmeticException
  NumberFormatException.prototype = Object.create(
    IllegalArgumentException.prototype
  )
  NumberFormatException.prototype.constructor = NumberFormatException
  NullPointerException.prototype = Object.create(RuntimeException.prototype)
  NullPointerException.prototype.constructor = NullPointerException
  ClassCastException.prototype = Object.create(RuntimeException.prototype)
  ClassCastException.prototype.constructor = ClassCastException
  UninitializedPropertyAccessException.prototype = Object.create(
    RuntimeException.prototype
  )
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException
  UpdateMode.prototype = Object.create(Enum.prototype)
  UpdateMode.prototype.constructor = UpdateMode
  PolymorphicSerializer.prototype = Object.create(
    AbstractPolymorphicSerializer.prototype
  )
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer
  SerializationException.prototype = Object.create(
    IllegalArgumentException.prototype
  )
  SerializationException.prototype.constructor = SerializationException
  UnknownFieldException.prototype = Object.create(
    SerializationException.prototype
  )
  UnknownFieldException.prototype.constructor = UnknownFieldException
  MissingFieldException.prototype = Object.create(
    SerializationException.prototype
  )
  MissingFieldException.prototype.constructor = MissingFieldException
  PolymorphicKind.prototype = Object.create(SerialKind.prototype)
  PolymorphicKind.prototype.constructor = PolymorphicKind
  PrimitiveKind.prototype = Object.create(SerialKind.prototype)
  PrimitiveKind.prototype.constructor = PrimitiveKind
  StructureKind.prototype = Object.create(SerialKind.prototype)
  StructureKind.prototype.constructor = StructureKind
  ENUM.prototype = Object.create(SerialKind.prototype)
  ENUM.prototype.constructor = ENUM
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype)
  CONTEXTUAL.prototype.constructor = CONTEXTUAL
  OPEN.prototype = Object.create(PolymorphicKind.prototype)
  OPEN.prototype.constructor = OPEN
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype)
  BOOLEAN.prototype.constructor = BOOLEAN
  BYTE.prototype = Object.create(PrimitiveKind.prototype)
  BYTE.prototype.constructor = BYTE
  CHAR.prototype = Object.create(PrimitiveKind.prototype)
  CHAR.prototype.constructor = CHAR
  SHORT.prototype = Object.create(PrimitiveKind.prototype)
  SHORT.prototype.constructor = SHORT
  INT.prototype = Object.create(PrimitiveKind.prototype)
  INT.prototype.constructor = INT
  LONG.prototype = Object.create(PrimitiveKind.prototype)
  LONG.prototype.constructor = LONG
  FLOAT.prototype = Object.create(PrimitiveKind.prototype)
  FLOAT.prototype.constructor = FLOAT
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype)
  DOUBLE.prototype.constructor = DOUBLE
  STRING.prototype = Object.create(PrimitiveKind.prototype)
  STRING.prototype.constructor = STRING
  CLASS.prototype = Object.create(StructureKind.prototype)
  CLASS.prototype.constructor = CLASS
  LIST.prototype = Object.create(StructureKind.prototype)
  LIST.prototype.constructor = LIST
  MAP.prototype = Object.create(StructureKind.prototype)
  MAP.prototype.constructor = MAP
  OBJECT.prototype = Object.create(StructureKind.prototype)
  OBJECT.prototype.constructor = OBJECT
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype)
  HashSetClassDesc.prototype.constructor = HashSetClassDesc
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype)
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype)
  HashMapClassDesc.prototype.constructor = HashMapClassDesc
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype)
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype)
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc
  ListLikeSerializer.prototype = Object.create(
    AbstractCollectionSerializer.prototype
  )
  ListLikeSerializer.prototype.constructor = ListLikeSerializer
  HashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype)
  HashSetSerializer.prototype.constructor = HashSetSerializer
  MapLikeSerializer.prototype = Object.create(
    AbstractCollectionSerializer.prototype
  )
  MapLikeSerializer.prototype.constructor = MapLikeSerializer
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype)
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype)
  HashMapSerializer.prototype.constructor = HashMapSerializer
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype)
  ArrayListSerializer.prototype.constructor = ArrayListSerializer
  LinkedHashSetSerializer.prototype = Object.create(
    ListLikeSerializer.prototype
  )
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer
  EnumDescriptor.prototype = Object.create(
    PluginGeneratedSerialDescriptor.prototype
  )
  EnumDescriptor.prototype.constructor = EnumDescriptor
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype)
  NamedValueDecoder.prototype.constructor = NamedValueDecoder
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype)
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0
  JsonImpl.prototype = Object.create(Json.prototype)
  JsonImpl.prototype.constructor = JsonImpl
  Default.prototype = Object.create(Json.prototype)
  Default.prototype.constructor = Default
  JsonPrimitive.prototype = Object.create(JsonElement.prototype)
  JsonPrimitive.prototype.constructor = JsonPrimitive
  JsonNull.prototype = Object.create(JsonPrimitive.prototype)
  JsonNull.prototype.constructor = JsonNull
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype)
  JsonLiteral.prototype.constructor = JsonLiteral
  JsonObject.prototype = Object.create(JsonElement.prototype)
  JsonObject.prototype.constructor = JsonObject
  JsonArray.prototype = Object.create(JsonElement.prototype)
  JsonArray.prototype.constructor = JsonArray
  JsonException.prototype = Object.create(SerializationException.prototype)
  JsonException.prototype.constructor = JsonException
  JsonDecodingException.prototype = Object.create(JsonException.prototype)
  JsonDecodingException.prototype.constructor = JsonDecodingException
  JsonEncodingException.prototype = Object.create(JsonException.prototype)
  JsonEncodingException.prototype.constructor = JsonEncodingException
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype)
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype)
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype)
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder
  JsonTreeListDecoder.prototype = Object.create(
    AbstractJsonTreeDecoder.prototype
  )
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype)
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder
  WriteMode.prototype = Object.create(Enum.prototype)
  WriteMode.prototype.constructor = WriteMode
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype)
  SerialModuleImpl.prototype.constructor = SerialModuleImpl
  EventType.prototype = Object.create(Enum.prototype)
  EventType.prototype.constructor = EventType
  CustomEvent.prototype = Object.create(BaseEvent.prototype)
  CustomEvent.prototype.constructor = CustomEvent
  CustomEventType.prototype = Object.create(Enum.prototype)
  CustomEventType.prototype.constructor = CustomEventType
  ScreenViewEvent.prototype = Object.create(BaseEvent.prototype)
  ScreenViewEvent.prototype.constructor = ScreenViewEvent
  AddCustomizationColor.prototype = Object.create(Message.prototype)
  AddCustomizationColor.prototype.constructor = AddCustomizationColor
  AddCustomizationConfig.prototype = Object.create(Message.prototype)
  AddCustomizationConfig.prototype.constructor = AddCustomizationConfig
  SmartypeApi.prototype = Object.create(SmartypeApiBase.prototype)
  SmartypeApi.prototype.constructor = SmartypeApi
  function toList(_this_) {
    var tmp0_subject = _this_.length
    switch (tmp0_subject) {
      case 0:
        return emptyList()
      case 1:
        return listOf(_this_[0])
      default:
        return toMutableList(_this_)
    }
  }
  function withIndex(_this_) {
    return new IndexingIterable(_no_name_provided_$factory(_this_))
  }
  function _get_indices_(_this_) {
    return new IntRange(0, _get_lastIndex_(_this_))
  }
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0
      var last_0 = (_this_.length - 1) | 0
      if (inductionVariable <= last_0)
        do {
          var index = inductionVariable
          inductionVariable = (inductionVariable + 1) | 0
          if (_this_[index] == null) {
            return index
          }
        } while (inductionVariable <= last_0)
    } else {
      var inductionVariable_0 = 0
      var last_1 = (_this_.length - 1) | 0
      if (inductionVariable_0 <= last_1)
        do {
          var index_0 = inductionVariable_0
          inductionVariable_0 = (inductionVariable_0 + 1) | 0
          if (equals_0(element, _this_[index_0])) {
            return index_0
          }
        } while (inductionVariable_0 <= last_1)
    }
    return -1
  }
  function toMutableList(_this_) {
    return ArrayList_init_$Create$_1(asCollection(_this_))
  }
  function _get_lastIndex_(_this_) {
    return (_this_.length - 1) | 0
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0
  }
  function joinToString(
    _this_,
    separator,
    prefix,
    postfix,
    limit,
    truncated,
    transform
  ) {
    return joinTo(
      _this_,
      StringBuilder_init_$Create$(),
      separator,
      prefix,
      postfix,
      limit,
      truncated,
      transform
    ).toString()
  }
  function joinToString$default(
    _this_,
    separator,
    prefix,
    postfix,
    limit,
    truncated,
    transform,
    $mask0,
    $handler
  ) {
    var separator_0 = !(($mask0 & 1) === 0) ? ", " : separator
    var prefix_0 = !(($mask0 & 2) === 0) ? "" : prefix
    var postfix_0 = !(($mask0 & 4) === 0) ? "" : postfix
    var limit_0 = !(($mask0 & 8) === 0) ? -1 : limit
    var truncated_0 = !(($mask0 & 16) === 0) ? "..." : truncated
    var transform_0 = !(($mask0 & 32) === 0) ? null : transform
    return joinToString(
      _this_,
      separator_0,
      prefix_0,
      postfix_0,
      limit_0,
      truncated_0,
      transform_0
    )
  }
  function joinTo(
    _this_,
    buffer,
    separator,
    prefix,
    postfix,
    limit,
    truncated,
    transform
  ) {
    buffer.append_3(prefix)
    Unit_getInstance()
    var count = 0
    var indexedObject = _this_
    var inductionVariable = 0
    var last_0 = indexedObject.length
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable]
      inductionVariable = (inductionVariable + 1) | 0
      count = (count + 1) | 0
      if (count > 1) {
        buffer.append_3(separator)
        Unit_getInstance()
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform)
      } else break
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated)
      Unit_getInstance()
    }
    buffer.append_3(postfix)
    Unit_getInstance()
    return buffer
  }
  function _no_name_provided_($this) {
    this._$this = $this
  }
  _no_name_provided_.prototype.invoke_60 = function() {
    return arrayIterator(this._$this)
  }
  _no_name_provided_.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided_$factory($this) {
    var i = new _no_name_provided_($this)
    return function() {
      return i.invoke_60()
    }
  }
  function toBooleanArray(_this_) {
    var result = booleanArray(_this_._get_size__27())
    var index = 0
    var tmp0_iterator = _this_.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var element = tmp0_iterator.next_14()
      var tmp1 = index
      index = (tmp1 + 1) | 0
      result[tmp1] = element
    }
    return result
  }
  function joinToString_0(
    _this_,
    separator,
    prefix,
    postfix,
    limit,
    truncated,
    transform
  ) {
    return joinTo_0(
      _this_,
      StringBuilder_init_$Create$(),
      separator,
      prefix,
      postfix,
      limit,
      truncated,
      transform
    ).toString()
  }
  function joinToString$default_0(
    _this_,
    separator,
    prefix,
    postfix,
    limit,
    truncated,
    transform,
    $mask0,
    $handler
  ) {
    var separator_0 = !(($mask0 & 1) === 0) ? ", " : separator
    var prefix_0 = !(($mask0 & 2) === 0) ? "" : prefix
    var postfix_0 = !(($mask0 & 4) === 0) ? "" : postfix
    var limit_0 = !(($mask0 & 8) === 0) ? -1 : limit
    var truncated_0 = !(($mask0 & 16) === 0) ? "..." : truncated
    var transform_0 = !(($mask0 & 32) === 0) ? null : transform
    return joinToString_0(
      _this_,
      separator_0,
      prefix_0,
      postfix_0,
      limit_0,
      truncated_0,
      transform_0
    )
  }
  function joinTo_0(
    _this_,
    buffer,
    separator,
    prefix,
    postfix,
    limit,
    truncated,
    transform
  ) {
    buffer.append_3(prefix)
    Unit_getInstance()
    var count = 0
    var tmp0_iterator = _this_.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var element = tmp0_iterator.next_14()
      count = (count + 1) | 0
      if (count > 1) {
        buffer.append_3(separator)
        Unit_getInstance()
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform)
      } else break
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated)
      Unit_getInstance()
    }
    buffer.append_3(postfix)
    Unit_getInstance()
    return buffer
  }
  function last(_this_) {
    if (_this_.isEmpty_28())
      throw NoSuchElementException_init_$Create$_0("List is empty.")
    return _this_.get_27(_get_lastIndex__0(_this_))
  }
  function toList_0(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__27()
      var tmp
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList()
          break
        case 1:
          var tmp_0
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_27(0)
          } else {
            {
              tmp_0 = _this_.iterator_37().next_14()
            }
          }

          tmp = listOf(tmp_0)
          break
        default:
          tmp = toMutableList_0(_this_)
          break
      }
      return tmp
    } else {
    }
    return optimizeReadOnlyList(toMutableList_1(_this_))
  }
  function lastOrNull(_this_) {
    return _this_.isEmpty_28()
      ? null
      : _this_.get_27((_this_._get_size__27() - 1) | 0)
  }
  function toMutableList_0(_this_) {
    return ArrayList_init_$Create$_1(_this_)
  }
  function toMutableList_1(_this_) {
    if (isInterface(_this_, Collection)) return toMutableList_0(_this_)
    else {
    }
    return toCollection(_this_, ArrayList_init_$Create$())
  }
  function toCollection(_this_, destination) {
    var tmp0_iterator = _this_.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var item = tmp0_iterator.next_14()
      destination.add_16(item)
      Unit_getInstance()
    }
    return destination
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE_1)
      return Companion_getInstance_2()._EMPTY
    return numberRangeToNumber(_this_, (to_0 - 1) | 0)
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_
  }
  function dropLast(_this_, n) {
    var tmp0_require_0 = n >= 0
    if (!tmp0_require_0) {
      var message_2 =
        "" + "Requested character count " + n + " is less than zero."
      throw IllegalArgumentException_init_$Create$(toString_1(message_2))
    }
    return take(_this_, coerceAtLeast((_this_.length - n) | 0, 0))
  }
  function take(_this_, n) {
    var tmp0_require_0 = n >= 0
    if (!tmp0_require_0) {
      var message_2 =
        "" + "Requested character count " + n + " is less than zero."
      throw IllegalArgumentException_init_$Create$(toString_1(message_2))
    }
    var tmp1_substring_0 = 0
    var tmp2_substring_0 = coerceAtMost(n, _this_.length)
    return _this_.substring(tmp1_substring_0, tmp2_substring_0)
  }
  function single(_this_) {
    var tmp0_subject = charSequenceLength(_this_)
    var tmp
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0("Char sequence is empty.")
      case 1:
        tmp = charSequenceGet(_this_, 0)
        break
      default:
        throw IllegalArgumentException_init_$Create$(
          "Char sequence has more than one element."
        )
    }
    return tmp
  }
  function AbstractCollection() {}
  AbstractCollection.prototype.contains_23 = function(element) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_28()
      } else {
        {
          tmp = false
        }
      }
      if (tmp) {
        tmp$ret$0 = false
        break l$ret$1
      } else {
      }
      var tmp0_iterator_1 = this.iterator_37()
      while (tmp0_iterator_1.hasNext_14()) {
        var element_2 = tmp0_iterator_1.next_14()
        if (equals_0(element_2, element)) {
          tmp$ret$0 = true
          break l$ret$1
        } else {
        }
      }
      tmp$ret$0 = false
    } while (false)
    return tmp$ret$0
  }
  AbstractCollection.prototype.containsAll_20 = function(elements) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_28()
      } else {
        {
          tmp = false
        }
      }
      if (tmp) {
        tmp$ret$0 = true
        break l$ret$1
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_37()
      while (tmp0_iterator_1.hasNext_14()) {
        var element_2 = tmp0_iterator_1.next_14()
        if (!this.contains_23(element_2)) {
          tmp$ret$0 = false
          break l$ret$1
        } else {
        }
      }
      tmp$ret$0 = true
    } while (false)
    return tmp$ret$0
  }
  AbstractCollection.prototype.isEmpty_28 = function() {
    return this._get_size__27() === 0
  }
  AbstractCollection.prototype.toString = function() {
    return joinToString$default_0(
      this,
      ", ",
      "[",
      "]",
      0,
      null,
      _no_name_provided_$factory_0(this),
      24,
      null
    )
  }
  AbstractCollection.prototype.toArray = function() {
    return copyToArrayImpl_0(this)
  }
  AbstractCollection.$metadata$ = {
    simpleName: "AbstractCollection",
    kind: "class",
    interfaces: [Collection],
  }
  function _no_name_provided_$factory_0($this) {
    var i = new _no_name_provided__0($this)
    return function(p1) {
      return i.invoke_0(p1)
    }
  }
  function _no_name_provided__0($this) {
    this._$this_0 = $this
  }
  _no_name_provided__0.prototype.invoke_0 = function(it) {
    return it === this._$this_0 ? "(this Collection)" : toString_0(it)
  }
  _no_name_provided__0.prototype.invoke_66 = function(p1) {
    return this.invoke_0((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__0.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function Companion_0() {
    Companion_instance = this
  }
  Companion_0.prototype.checkElementIndex = function(index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$(
        "" + "index: " + index + ", size: " + size
      )
    }
  }
  Companion_0.prototype.checkPositionIndex = function(index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$(
        "" + "index: " + index + ", size: " + size
      )
    }
  }
  Companion_0.prototype.checkBoundsIndexes = function(
    startIndex,
    endIndex,
    size
  ) {
    if (startIndex < 0 ? true : endIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$(
        "" +
          "startIndex: " +
          startIndex +
          ", endIndex: " +
          endIndex +
          ", size: " +
          size
      )
    }
    if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$(
        "" + "startIndex: " + startIndex + " > endIndex: " + endIndex
      )
    }
  }
  Companion_0.prototype.orderedHashCode = function(c) {
    var hashCode_1 = 1
    var tmp0_iterator = c.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var e = tmp0_iterator.next_14()
      var tmp = imul(31, hashCode_1)
      var tmp1_safe_receiver = e
      var tmp2_elvis_lhs =
        tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver)
      hashCode_1 = (tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs)) | 0
    }
    return hashCode_1
  }
  Companion_0.prototype.orderedEquals = function(c, other) {
    if (!(c._get_size__27() === other._get_size__27())) return false
    var otherIterator = other.iterator_37()
    var tmp0_iterator = c.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var elem = tmp0_iterator.next_14()
      var elemOther = otherIterator.next_14()
      if (!equals_0(elem, elemOther)) {
        return false
      }
    }
    return true
  }
  Companion_0.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance
  function Companion_getInstance() {
    if (Companion_instance == null) new Companion_0()
    return Companion_instance
  }
  function AbstractMap() {
    this.__keys = null
    this.__values = null
  }
  AbstractMap.prototype.containsKey_8 = function(key) {
    return !(implFindEntry(this, key) == null)
  }
  AbstractMap.prototype.containsEntry_2 = function(entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false)) return false
    else {
    }
    var key = entry._get_key__3()
    var value = entry._get_value__11()
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_16(key)
    if (!equals_0(value, ourValue)) {
      return false
    }
    var tmp
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_8(key)
    } else {
      tmp = false
    }
    if (tmp) {
      return false
    } else {
    }
    return true
  }
  AbstractMap.prototype.equals = function(other) {
    if (other === this) return true
    if (!(!(other == null) ? isInterface(other, Map_0) : false)) return false
    else {
    }
    if (!(this._get_size__27() === other._get_size__27())) return false
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__5()
      var tmp
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_28()
      } else {
        {
          tmp = false
        }
      }
      if (tmp) {
        tmp$ret$0 = true
        break l$ret$1
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_37()
      while (tmp0_iterator_1.hasNext_14()) {
        var element_2 = tmp0_iterator_1.next_14()
        if (!this.containsEntry_2(element_2)) {
          tmp$ret$0 = false
          break l$ret$1
        } else {
        }
      }
      tmp$ret$0 = true
    } while (false)
    return tmp$ret$0
  }
  AbstractMap.prototype.get_16 = function(key) {
    var tmp0_safe_receiver = implFindEntry(this, key)
    return tmp0_safe_receiver == null
      ? null
      : tmp0_safe_receiver._get_value__11()
  }
  AbstractMap.prototype.hashCode = function() {
    return hashCode(this._get_entries__5())
  }
  AbstractMap.prototype.isEmpty_28 = function() {
    return this._get_size__27() === 0
  }
  AbstractMap.prototype._get_size__27 = function() {
    return this._get_entries__5()._get_size__27()
  }
  AbstractMap.prototype._get_keys__5 = function() {
    if (this.__keys == null) {
      var tmp = this
      tmp.__keys = new _no_name_provided__2(this)
    }
    return ensureNotNull(this.__keys)
  }
  AbstractMap.prototype.toString = function() {
    var tmp = this._get_entries__5()
    return joinToString$default_0(
      tmp,
      ", ",
      "{",
      "}",
      0,
      null,
      _no_name_provided_$factory_1(this),
      24,
      null
    )
  }
  AbstractMap.prototype.toString_0 = function(entry) {
    return (
      toString(this, entry._get_key__3()) +
      "=" +
      toString(this, entry._get_value__11())
    )
  }
  AbstractMap.$metadata$ = {
    simpleName: "AbstractMap",
    kind: "class",
    interfaces: [Map_0],
  }
  function _no_name_provided_$factory_1($this) {
    var i = new _no_name_provided__3($this)
    return function(p1) {
      return i.invoke_2(p1)
    }
  }
  function _no_name_provided__1($entryIterator) {
    this._$entryIterator = $entryIterator
  }
  _no_name_provided__1.prototype.hasNext_14 = function() {
    return this._$entryIterator.hasNext_14()
  }
  _no_name_provided__1.prototype.next_14 = function() {
    return this._$entryIterator.next_14()._get_key__3()
  }
  _no_name_provided__1.$metadata$ = {
    kind: "class",
    interfaces: [Iterator],
  }
  function toString($this, o) {
    return o === $this ? "(this Map)" : toString_0(o)
  }
  function implFindEntry($this, key) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__5()
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_37()
      while (tmp0_iterator_1.hasNext_14()) {
        var element_2 = tmp0_iterator_1.next_14()
        if (equals_0(element_2._get_key__3(), key)) {
          tmp$ret$0 = element_2
          break l$ret$1
        } else {
        }
      }
      tmp$ret$0 = null
    } while (false)
    return tmp$ret$0
  }
  function Companion_1() {
    Companion_instance_0 = this
  }
  Companion_1.prototype.entryHashCode = function(e) {
    var tmp2_safe_receiver_4 = e._get_key__3()
    var tmp3_elvis_lhs_3 =
      tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4)
    var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3
    var tmp0_safe_receiver_6 = e._get_value__11()
    var tmp1_elvis_lhs_5 =
      tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6)
    return tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5)
  }
  Companion_1.prototype.entryToString = function(e) {
    return "" + e._get_key__3() + "=" + e._get_value__11()
  }
  Companion_1.prototype.entryEquals = function(e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false)) return false
    else {
    }
    return equals_0(e._get_key__3(), other._get_key__3())
      ? equals_0(e._get_value__11(), other._get_value__11())
      : false
  }
  Companion_1.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_0
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null) new Companion_1()
    return Companion_instance_0
  }
  function _no_name_provided__2($this) {
    this._$this_1 = $this
    AbstractSet.call(this)
  }
  _no_name_provided__2.prototype.contains_19 = function(element) {
    return this._$this_1.containsKey_8(element)
  }
  _no_name_provided__2.prototype.contains_23 = function(element) {
    if (!(element == null ? true : isObject(element))) return false
    else {
    }
    return this.contains_19(
      (element == null ? true : isObject(element)) ? element : THROW_CCE()
    )
  }
  _no_name_provided__2.prototype.iterator_37 = function() {
    var entryIterator = this._$this_1._get_entries__5().iterator_37()
    return new _no_name_provided__1(entryIterator)
  }
  _no_name_provided__2.prototype._get_size__27 = function() {
    return this._$this_1._get_size__27()
  }
  _no_name_provided__2.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__3($this) {
    this._$this_2 = $this
  }
  _no_name_provided__3.prototype.invoke_2 = function(it) {
    return this._$this_2.toString_0(it)
  }
  _no_name_provided__3.prototype.invoke_66 = function(p1) {
    return this.invoke_2(
      (!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE()
    )
  }
  _no_name_provided__3.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function AbstractSet() {
    AbstractCollection.call(this)
  }
  AbstractSet.prototype.equals = function(other) {
    if (other === this) return true
    if (!(!(other == null) ? isInterface(other, Set) : false)) return false
    else {
    }
    return Companion_getInstance_1().setEquals(this, other)
  }
  AbstractSet.prototype.hashCode = function() {
    return Companion_getInstance_1().unorderedHashCode(this)
  }
  AbstractSet.$metadata$ = {
    simpleName: "AbstractSet",
    kind: "class",
    interfaces: [Set],
  }
  function Companion_2() {
    Companion_instance_1 = this
  }
  Companion_2.prototype.unorderedHashCode = function(c) {
    var hashCode_1 = 0
    var tmp0_iterator = c.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var element = tmp0_iterator.next_14()
      var tmp = hashCode_1
      var tmp1_safe_receiver = element
      var tmp2_elvis_lhs =
        tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver)
      hashCode_1 = (tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs)) | 0
    }
    return hashCode_1
  }
  Companion_2.prototype.setEquals = function(c, other) {
    if (!(c._get_size__27() === other._get_size__27())) return false
    return c.containsAll_20(other)
  }
  Companion_2.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_1
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null) new Companion_2()
    return Companion_instance_1
  }
  function emptyList() {
    return EmptyList_getInstance()
  }
  function EmptyList() {
    EmptyList_instance = this
    this._serialVersionUID = new Long(-1478467534, -1720727600)
  }
  EmptyList.prototype.equals = function(other) {
    var tmp
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_28()
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  EmptyList.prototype.hashCode = function() {
    return 1
  }
  EmptyList.prototype.toString = function() {
    return "[]"
  }
  EmptyList.prototype._get_size__27 = function() {
    return 0
  }
  EmptyList.prototype.isEmpty_28 = function() {
    return true
  }
  EmptyList.prototype.containsAll_6 = function(elements) {
    return elements.isEmpty_28()
  }
  EmptyList.prototype.containsAll_20 = function(elements) {
    return this.containsAll_6(elements)
  }
  EmptyList.prototype.get_27 = function(index) {
    throw IndexOutOfBoundsException_init_$Create$(
      "" + "Empty list doesn't contain element at index " + index + "."
    )
  }
  EmptyList.prototype.iterator_37 = function() {
    return EmptyIterator_getInstance()
  }
  EmptyList.$metadata$ = {
    simpleName: "EmptyList",
    kind: "object",
    interfaces: [List, Serializable, RandomAccess],
  }
  var EmptyList_instance
  function EmptyList_getInstance() {
    if (EmptyList_instance == null) new EmptyList()
    return EmptyList_instance
  }
  function EmptyIterator() {
    EmptyIterator_instance = this
  }
  EmptyIterator.prototype.hasNext_14 = function() {
    return false
  }
  EmptyIterator.prototype.next_14 = function() {
    throw NoSuchElementException_init_$Create$()
  }
  EmptyIterator.$metadata$ = {
    simpleName: "EmptyIterator",
    kind: "object",
    interfaces: [ListIterator],
  }
  var EmptyIterator_instance
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null) new EmptyIterator()
    return EmptyIterator_instance
  }
  function _get_lastIndex__0(_this_) {
    return (_this_._get_size__27() - 1) | 0
  }
  function asCollection(_this_) {
    return new ArrayAsCollection(_this_, false)
  }
  function arrayListOf(elements) {
    return elements.length === 0
      ? ArrayList_init_$Create$()
      : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true))
  }
  function ArrayAsCollection(values_1, isVarargs) {
    this._values = values_1
    this._isVarargs = isVarargs
  }
  ArrayAsCollection.prototype._get_size__27 = function() {
    return this._values.length
  }
  ArrayAsCollection.prototype.isEmpty_28 = function() {
    var tmp0_isEmpty_0 = this._values
    return tmp0_isEmpty_0.length === 0
  }
  ArrayAsCollection.prototype.contains_4 = function(element) {
    return contains(this._values, element)
  }
  ArrayAsCollection.prototype.containsAll_4 = function(elements) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_28()
      } else {
        {
          tmp = false
        }
      }
      if (tmp) {
        tmp$ret$0 = true
        break l$ret$1
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_37()
      while (tmp0_iterator_1.hasNext_14()) {
        var element_2 = tmp0_iterator_1.next_14()
        if (!this.contains_4(element_2)) {
          tmp$ret$0 = false
          break l$ret$1
        } else {
        }
      }
      tmp$ret$0 = true
    } while (false)
    return tmp$ret$0
  }
  ArrayAsCollection.prototype.containsAll_20 = function(elements) {
    return this.containsAll_4(elements)
  }
  ArrayAsCollection.prototype.iterator_37 = function() {
    return arrayIterator(this._values)
  }
  ArrayAsCollection.$metadata$ = {
    simpleName: "ArrayAsCollection",
    kind: "class",
    interfaces: [Collection],
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$("Index overflow has happened.")
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__27()
    switch (tmp0_subject) {
      case 0:
        return emptyList()
      case 1:
        return listOf(_this_.get_27(0))
      default:
        return _this_
    }
  }
  function IndexedValue(index, value) {
    this._index = index
    this._value = value
  }
  IndexedValue.prototype.toString = function() {
    return (
      "" + "IndexedValue(index=" + this._index + ", value=" + this._value + ")"
    )
  }
  IndexedValue.prototype.hashCode = function() {
    return (
      (imul(this._index, 31) +
        (this._value == null ? 0 : hashCode(this._value))) |
      0
    )
  }
  IndexedValue.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof IndexedValue)) return false
    else {
    }
    var tmp0_other_with_cast =
      other instanceof IndexedValue ? other : THROW_CCE()
    if (!(this._index === tmp0_other_with_cast._index)) return false
    if (!equals_0(this._value, tmp0_other_with_cast._value)) return false
    return true
  }
  IndexedValue.$metadata$ = {
    simpleName: "IndexedValue",
    kind: "class",
    interfaces: [],
  }
  function IndexingIterable(iteratorFactory) {
    this._iteratorFactory = iteratorFactory
  }
  IndexingIterable.prototype.iterator_37 = function() {
    return new IndexingIterator(this._iteratorFactory())
  }
  IndexingIterable.$metadata$ = {
    simpleName: "IndexingIterable",
    kind: "class",
    interfaces: [Iterable],
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__27()
    } else {
      {
        tmp = default_0
      }
    }
    return tmp
  }
  function IndexingIterator(iterator) {
    this._iterator = iterator
    this._index_0 = 0
  }
  IndexingIterator.prototype.hasNext_14 = function() {
    return this._iterator.hasNext_14()
  }
  IndexingIterator.prototype.next_14 = function() {
    var tmp0_this = this
    var tmp1 = tmp0_this._index_0
    tmp0_this._index_0 = (tmp1 + 1) | 0
    return new IndexedValue(checkIndexOverflow(tmp1), this._iterator.next_14())
  }
  IndexingIterator.$metadata$ = {
    simpleName: "IndexingIterator",
    kind: "class",
    interfaces: [Iterator],
  }
  function getOrImplicitDefault(_this_, key) {
    if (isInterface(_this_, MapWithDefault))
      return _this_.getOrImplicitDefault(key)
    else {
    }
    var tmp$ret$0
    l$ret$1: do {
      var value_1 = _this_.get_16(key)
      if (value_1 == null ? !_this_.containsKey_8(key) : false) {
        throw NoSuchElementException_init_$Create$_0(
          "" + "Key " + key + " is missing in the map."
        )
      } else {
        tmp$ret$0 = (value_1 == null
        ? true
        : isObject(value_1))
          ? value_1
          : THROW_CCE()
        break l$ret$1
      }
    } while (false)
    return tmp$ret$0
  }
  function MapWithDefault() {}
  MapWithDefault.$metadata$ = {
    simpleName: "MapWithDefault",
    kind: "interface",
    interfaces: [Map_0],
  }
  function mapOf(pairs) {
    return pairs.length > 0
      ? toMap_0(pairs, LinkedHashMap_init_$Create$_0(mapCapacity(pairs.length)))
      : emptyMap()
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance()
    return isInterface(tmp, Map_0) ? tmp : THROW_CCE()
  }
  function getValue(_this_, key) {
    return getOrImplicitDefault(_this_, key)
  }
  function toMap(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__27()
      var tmp
      switch (tmp0_subject) {
        case 0:
          tmp = emptyMap()
          break
        case 1:
          var tmp_0
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_27(0)
          } else {
            {
              tmp_0 = _this_.iterator_37().next_14()
            }
          }

          tmp = mapOf_0(tmp_0)
          break
        default:
          tmp = toMap_1(
            _this_,
            LinkedHashMap_init_$Create$_0(mapCapacity(_this_._get_size__27()))
          )
          break
      }
      return tmp
    } else {
    }
    return optimizeReadOnlyMap(toMap_1(_this_, LinkedHashMap_init_$Create$()))
  }
  function toMap_0(_this_, destination) {
    putAll(destination, _this_)
    return destination
  }
  function EmptyMap() {
    EmptyMap_instance = this
    this._serialVersionUID_0 = new Long(-888910638, 1920087921)
  }
  EmptyMap.prototype.equals = function(other) {
    var tmp
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp = other.isEmpty_28()
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  EmptyMap.prototype.hashCode = function() {
    return 0
  }
  EmptyMap.prototype.toString = function() {
    return "{}"
  }
  EmptyMap.prototype._get_size__27 = function() {
    return 0
  }
  EmptyMap.prototype.isEmpty_28 = function() {
    return true
  }
  EmptyMap.prototype.containsKey_0 = function(key) {
    return false
  }
  EmptyMap.prototype.containsKey_8 = function(key) {
    if (!(key == null ? true : isObject(key))) return false
    else {
    }
    return this.containsKey_0(
      (key == null ? true : isObject(key)) ? key : THROW_CCE()
    )
  }
  EmptyMap.prototype.get_2 = function(key) {
    return null
  }
  EmptyMap.prototype.get_16 = function(key) {
    if (!(key == null ? true : isObject(key))) return null
    else {
    }
    return this.get_2((key == null ? true : isObject(key)) ? key : THROW_CCE())
  }
  EmptyMap.prototype._get_entries__5 = function() {
    return EmptySet_getInstance()
  }
  EmptyMap.prototype._get_keys__5 = function() {
    return EmptySet_getInstance()
  }
  EmptyMap.$metadata$ = {
    simpleName: "EmptyMap",
    kind: "object",
    interfaces: [Map_0, Serializable],
  }
  var EmptyMap_instance
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null) new EmptyMap()
    return EmptyMap_instance
  }
  function toMap_1(_this_, destination) {
    putAll_0(destination, _this_)
    return destination
  }
  function optimizeReadOnlyMap(_this_) {
    var tmp0_subject = _this_._get_size__27()
    var tmp
    switch (tmp0_subject) {
      case 0:
        tmp = emptyMap()
        break
      case 1:
        tmp = _this_
        break
      default:
        tmp = _this_
        break
    }
    return tmp
  }
  function putAll(_this_, pairs) {
    var indexedObject = pairs
    var inductionVariable = 0
    var last_0 = indexedObject.length
    while (inductionVariable < last_0) {
      var tmp1_loop_parameter = indexedObject[inductionVariable]
      inductionVariable = (inductionVariable + 1) | 0
      var key = tmp1_loop_parameter.component1_5()
      var value = tmp1_loop_parameter.component2()
      _this_.put_5(key, value)
      Unit_getInstance()
    }
  }
  function putAll_0(_this_, pairs) {
    var tmp0_iterator = pairs.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var tmp1_loop_parameter = tmp0_iterator.next_14()
      var key = tmp1_loop_parameter.component1_5()
      var value = tmp1_loop_parameter.component2()
      _this_.put_5(key, value)
      Unit_getInstance()
    }
  }
  function hashMapOf(pairs) {
    var tmp0_apply_0 = HashMap_init_$Create$_1(mapCapacity(pairs.length))
    putAll(tmp0_apply_0, pairs)
    return tmp0_apply_0
  }
  function EmptySet() {
    EmptySet_instance = this
    this._serialVersionUID_1 = new Long(1993859828, 793161749)
  }
  EmptySet.prototype.equals = function(other) {
    var tmp
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_28()
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  EmptySet.prototype.hashCode = function() {
    return 0
  }
  EmptySet.prototype.toString = function() {
    return "[]"
  }
  EmptySet.prototype._get_size__27 = function() {
    return 0
  }
  EmptySet.prototype.isEmpty_28 = function() {
    return true
  }
  EmptySet.prototype.contains_5 = function(element) {
    return false
  }
  EmptySet.prototype.contains_23 = function(element) {
    if (!false) return false
    else {
    }
    var tmp
    if (false) {
      tmp = element
    } else {
      {
        tmp = THROW_CCE()
      }
    }
    return this.contains_5(tmp)
  }
  EmptySet.prototype.containsAll_6 = function(elements) {
    return elements.isEmpty_28()
  }
  EmptySet.prototype.containsAll_20 = function(elements) {
    return this.containsAll_6(elements)
  }
  EmptySet.prototype.iterator_37 = function() {
    return EmptyIterator_getInstance()
  }
  EmptySet.$metadata$ = {
    simpleName: "EmptySet",
    kind: "object",
    interfaces: [Set, Serializable],
  }
  var EmptySet_instance
  function EmptySet_getInstance() {
    if (EmptySet_instance == null) new EmptySet()
    return EmptySet_instance
  }
  function KClassifier() {}
  KClassifier.$metadata$ = {
    simpleName: "KClassifier",
    kind: "interface",
    interfaces: [],
  }
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_3(transform(element))
      Unit_getInstance()
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_3(element)
        Unit_getInstance()
      } else {
        if (element instanceof Char) {
          _this_.append_2(element)
          Unit_getInstance()
        } else {
          {
            _this_.append_3(toString_0(element))
            Unit_getInstance()
          }
        }
      }
    }
  }
  function toIntOrNull(_this_) {
    return toIntOrNull_0(_this_, 10)
  }
  function toIntOrNull_0(_this_, radix) {
    checkRadix(radix)
    Unit_getInstance()
    var length = _this_.length
    if (length === 0) return null
    var start
    var isNegative_0
    var limit
    var firstChar = charSequenceGet(_this_, 0)
    if (firstChar.compareTo(new Char(48)) < 0) {
      if (length === 1) return null
      start = 1
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true
        limit = IntCompanionObject_getInstance()._MIN_VALUE_1
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false
        limit = -IntCompanionObject_getInstance()._MAX_VALUE_1 | 0
      } else return null
    } else {
      start = 0
      isNegative_0 = false
      limit = -IntCompanionObject_getInstance()._MAX_VALUE_1 | 0
    }
    var limitForMaxRadix =
      ((-IntCompanionObject_getInstance()._MAX_VALUE_1 | 0) / 36) | 0
    var limitBeforeMul = limitForMaxRadix
    var result = 0
    var inductionVariable = start
    var last_0 = (length - 1) | 0
    if (!(length === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var digit = digitOf(charSequenceGet(_this_, i), radix)
        if (digit < 0) return null
        if (result < limitBeforeMul) {
          if (limitBeforeMul === limitForMaxRadix) {
            limitBeforeMul = (limit / radix) | 0
            if (result < limitBeforeMul) {
              return null
            }
          } else {
            return null
          }
        }
        result = imul(result, radix)
        if (result < ((limit + digit) | 0)) return null
        result = (result - digit) | 0
      } while (inductionVariable <= last_0)
    return isNegative_0 ? result : -result | 0
  }
  function toLongOrNull(_this_) {
    return toLongOrNull_0(_this_, 10)
  }
  function toByteOrNull(_this_) {
    return toByteOrNull_0(_this_, 10)
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$(
      "" + "Invalid number format: '" + input + "'"
    )
  }
  function toShortOrNull(_this_) {
    return toShortOrNull_0(_this_, 10)
  }
  function toLongOrNull_0(_this_, radix) {
    checkRadix(radix)
    Unit_getInstance()
    var length = _this_.length
    if (length === 0) return null
    var start
    var isNegative_0
    var limit
    var firstChar = charSequenceGet(_this_, 0)
    if (firstChar.compareTo(new Char(48)) < 0) {
      if (length === 1) return null
      start = 1
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true
        limit = new Long(0, -2147483648)
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false
        limit = new Long(1, -2147483648)
      } else return null
    } else {
      start = 0
      isNegative_0 = false
      limit = new Long(1, -2147483648)
    }
    var tmp0_div_0 = new Long(1, -2147483648)
    var tmp1_div_0 = 36
    var limitForMaxRadix = tmp0_div_0.div_27(toLong_0(tmp1_div_0))
    var limitBeforeMul = limitForMaxRadix
    var result = new Long(0, 0)
    var inductionVariable = start
    var last_0 = (length - 1) | 0
    if (!(length === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var digit = digitOf(charSequenceGet(_this_, i), radix)
        if (digit < 0) return null
        if (result.compareTo_29(limitBeforeMul) < 0) {
          if (limitBeforeMul.equals(limitForMaxRadix)) {
            limitBeforeMul = limit.div_27(toLong_0(radix))
            if (result.compareTo_29(limitBeforeMul) < 0) {
              return null
            }
          } else {
            return null
          }
        }
        var tmp2_times_0 = result
        result = tmp2_times_0.times_27(toLong_0(radix))
        var tmp = result
        if (tmp.compareTo_29(limit.plus_27(toLong_0(digit))) < 0) return null
        else {
        }
        var tmp3_minus_0 = result
        result = tmp3_minus_0.minus_28(toLong_0(digit))
      } while (inductionVariable <= last_0)
    return isNegative_0 ? result : result.unaryMinus_4()
  }
  function toByteOrNull_0(_this_, radix) {
    var tmp0_elvis_lhs = toIntOrNull_0(_this_, radix)
    var tmp
    if (tmp0_elvis_lhs == null) {
      return null
    } else {
      tmp = tmp0_elvis_lhs
    }
    var int = tmp
    if (
      int < ByteCompanionObject_getInstance()._MIN_VALUE
        ? true
        : int > ByteCompanionObject_getInstance()._MAX_VALUE
    )
      return null
    return toByte_0(int)
  }
  function toShortOrNull_0(_this_, radix) {
    var tmp0_elvis_lhs = toIntOrNull_0(_this_, radix)
    var tmp
    if (tmp0_elvis_lhs == null) {
      return null
    } else {
      tmp = tmp0_elvis_lhs
    }
    var int = tmp
    if (
      int < ShortCompanionObject_getInstance()._MIN_VALUE_0
        ? true
        : int > ShortCompanionObject_getInstance()._MAX_VALUE_0
    )
      return null
    return toShort_0(int)
  }
  function _get_lastIndex__1(_this_) {
    return (charSequenceLength(_this_) - 1) | 0
  }
  function Lazy() {}
  Lazy.$metadata$ = {
    simpleName: "Lazy",
    kind: "interface",
    interfaces: [],
  }
  function UnsafeLazyImpl(initializer) {
    this._initializer = initializer
    this.__value = UNINITIALIZED_VALUE_getInstance()
  }
  UnsafeLazyImpl.prototype._get_value__11 = function() {
    if (this.__value === UNINITIALIZED_VALUE_getInstance()) {
      this.__value = ensureNotNull(this._initializer)()
      this._initializer = null
    }
    var tmp = this.__value
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE()
  }
  UnsafeLazyImpl.prototype.isInitialized = function() {
    return !(this.__value === UNINITIALIZED_VALUE_getInstance())
  }
  UnsafeLazyImpl.prototype.toString = function() {
    return this.isInitialized()
      ? toString_0(this._get_value__11())
      : "Lazy value not initialized yet."
  }
  UnsafeLazyImpl.$metadata$ = {
    simpleName: "UnsafeLazyImpl",
    kind: "class",
    interfaces: [Lazy, Serializable],
  }
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this
  }
  UNINITIALIZED_VALUE.$metadata$ = {
    simpleName: "UNINITIALIZED_VALUE",
    kind: "object",
    interfaces: [],
  }
  var UNINITIALIZED_VALUE_instance
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null) new UNINITIALIZED_VALUE()
    return UNINITIALIZED_VALUE_instance
  }
  function Pair(first, second) {
    this._first = first
    this._second = second
  }
  Pair.prototype.toString = function() {
    return "" + "(" + this._first + ", " + this._second + ")"
  }
  Pair.prototype.component1_5 = function() {
    return this._first
  }
  Pair.prototype.component2 = function() {
    return this._second
  }
  Pair.prototype.hashCode = function() {
    return (
      (imul(this._first == null ? 0 : hashCode(this._first), 31) +
        (this._second == null ? 0 : hashCode(this._second))) |
      0
    )
  }
  Pair.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof Pair)) return false
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE()
    if (!equals_0(this._first, tmp0_other_with_cast._first)) return false
    if (!equals_0(this._second, tmp0_other_with_cast._second)) return false
    return true
  }
  Pair.$metadata$ = {
    simpleName: "Pair",
    kind: "class",
    interfaces: [Serializable],
  }
  function to(_this_, that) {
    return new Pair(_this_, that)
  }
  function Annotation() {}
  Annotation.$metadata$ = {
    simpleName: "Annotation",
    kind: "interface",
    interfaces: [],
  }
  function CharSequence() {}
  CharSequence.$metadata$ = {
    simpleName: "CharSequence",
    kind: "interface",
    interfaces: [],
  }
  function Comparable() {}
  Comparable.$metadata$ = {
    simpleName: "Comparable",
    kind: "interface",
    interfaces: [],
  }
  function Iterator() {}
  Iterator.$metadata$ = {
    simpleName: "Iterator",
    kind: "interface",
    interfaces: [],
  }
  function ListIterator() {}
  ListIterator.$metadata$ = {
    simpleName: "ListIterator",
    kind: "interface",
    interfaces: [Iterator],
  }
  function MutableIterator() {}
  MutableIterator.$metadata$ = {
    simpleName: "MutableIterator",
    kind: "interface",
    interfaces: [Iterator],
  }
  function Number_0() {}
  Number_0.$metadata$ = {
    simpleName: "Number",
    kind: "class",
    interfaces: [],
  }
  function IntIterator() {}
  IntIterator.prototype.next_14 = function() {
    return this.nextInt_0()
  }
  IntIterator.$metadata$ = {
    simpleName: "IntIterator",
    kind: "class",
    interfaces: [Iterator],
  }
  function CharIterator() {}
  CharIterator.prototype.next_14 = function() {
    return this.nextChar_0()
  }
  CharIterator.$metadata$ = {
    simpleName: "CharIterator",
    kind: "class",
    interfaces: [Iterator],
  }
  function IntProgressionIterator(first, last_0, step) {
    IntIterator.call(this)
    this._step = step
    this._finalElement = last_0
    this._hasNext = this._step > 0 ? first <= last_0 : first >= last_0
    this._next = this._hasNext ? first : this._finalElement
  }
  IntProgressionIterator.prototype.hasNext_14 = function() {
    return this._hasNext
  }
  IntProgressionIterator.prototype.nextInt_0 = function() {
    var value = this._next
    if (value === this._finalElement) {
      if (!this._hasNext) throw NoSuchElementException_init_$Create$()
      this._hasNext = false
    } else {
      var tmp0_this = this
      tmp0_this._next = (tmp0_this._next + this._step) | 0
    }
    return value
  }
  IntProgressionIterator.$metadata$ = {
    simpleName: "IntProgressionIterator",
    kind: "class",
    interfaces: [],
  }
  function CharProgressionIterator(first, last_0, step) {
    CharIterator.call(this)
    this._step_0 = step
    this._finalElement_0 = last_0.toInt_5()
    this._hasNext_0 =
      this._step_0 > 0
        ? first.compareTo(last_0) <= 0
        : first.compareTo(last_0) >= 0
    this._next_0 = this._hasNext_0 ? first.toInt_5() : this._finalElement_0
  }
  CharProgressionIterator.prototype.hasNext_14 = function() {
    return this._hasNext_0
  }
  CharProgressionIterator.prototype.nextChar_0 = function() {
    var value = this._next_0
    if (value === this._finalElement_0) {
      if (!this._hasNext_0) throw NoSuchElementException_init_$Create$()
      this._hasNext_0 = false
    } else {
      var tmp0_this = this
      tmp0_this._next_0 = (tmp0_this._next_0 + this._step_0) | 0
    }
    return numberToChar(value)
  }
  CharProgressionIterator.$metadata$ = {
    simpleName: "CharProgressionIterator",
    kind: "class",
    interfaces: [],
  }
  function IntProgression(start, endInclusive, step) {
    if (step === 0)
      throw IllegalArgumentException_init_$Create$("Step must be non-zero.")
    if (step === IntCompanionObject_getInstance()._MIN_VALUE_1)
      throw IllegalArgumentException_init_$Create$(
        "Step must be greater than Int.MIN_VALUE to avoid overflow on negation."
      )
    this._first_0 = start
    this._last = getProgressionLastElement(start, endInclusive, step)
    this._step_1 = step
  }
  IntProgression.prototype._get_first__2 = function() {
    return this._first_0
  }
  IntProgression.prototype._get_last__2 = function() {
    return this._last
  }
  IntProgression.prototype.iterator_37 = function() {
    return new IntProgressionIterator(this._first_0, this._last, this._step_1)
  }
  IntProgression.prototype.isEmpty_28 = function() {
    return this._step_1 > 0
      ? this._first_0 > this._last
      : this._first_0 < this._last
  }
  IntProgression.prototype.equals = function(other) {
    var tmp
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_28()
      ? other.isEmpty_28()
      : false)
        ? true
        : (this._first_0 === other._first_0
          ? this._last === other._last
          : false)
        ? this._step_1 === other._step_1
        : false
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  IntProgression.prototype.hashCode = function() {
    return this.isEmpty_28()
      ? -1
      : (imul(31, (imul(31, this._first_0) + this._last) | 0) + this._step_1) |
          0
  }
  IntProgression.prototype.toString = function() {
    return this._step_1 > 0
      ? "" + this._first_0 + ".." + this._last + " step " + this._step_1
      : "" +
          this._first_0 +
          " downTo " +
          this._last +
          " step " +
          (-this._step_1 | 0)
  }
  IntProgression.$metadata$ = {
    simpleName: "IntProgression",
    kind: "class",
    interfaces: [Iterable],
  }
  function CharProgression(start, endInclusive, step) {
    if (step === 0)
      throw IllegalArgumentException_init_$Create$("Step must be non-zero.")
    if (step === IntCompanionObject_getInstance()._MIN_VALUE_1)
      throw IllegalArgumentException_init_$Create$(
        "Step must be greater than Int.MIN_VALUE to avoid overflow on negation."
      )
    this._first_1 = start
    this._last_0 = numberToChar(
      getProgressionLastElement(start.toInt_5(), endInclusive.toInt_5(), step)
    )
    this._step_2 = step
  }
  CharProgression.prototype._get_first__2 = function() {
    return this._first_1
  }
  CharProgression.prototype._get_last__2 = function() {
    return this._last_0
  }
  CharProgression.prototype.iterator_37 = function() {
    return new CharProgressionIterator(
      this._first_1,
      this._last_0,
      this._step_2
    )
  }
  CharProgression.prototype.isEmpty_28 = function() {
    return this._step_2 > 0
      ? this._first_1.compareTo(this._last_0) > 0
      : this._first_1.compareTo(this._last_0) < 0
  }
  CharProgression.prototype.equals = function(other) {
    var tmp
    if (other instanceof CharProgression) {
      tmp = (this.isEmpty_28()
      ? other.isEmpty_28()
      : false)
        ? true
        : (this._first_1.equals(other._first_1)
          ? this._last_0.equals(other._last_0)
          : false)
        ? this._step_2 === other._step_2
        : false
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  CharProgression.prototype.hashCode = function() {
    return this.isEmpty_28()
      ? -1
      : (imul(
          31,
          (imul(31, this._first_1.toInt_5()) + this._last_0.toInt_5()) | 0
        ) +
          this._step_2) |
          0
  }
  CharProgression.prototype.toString = function() {
    return this._step_2 > 0
      ? "" + this._first_1 + ".." + this._last_0 + " step " + this._step_2
      : "" +
          this._first_1 +
          " downTo " +
          this._last_0 +
          " step " +
          (-this._step_2 | 0)
  }
  CharProgression.$metadata$ = {
    simpleName: "CharProgression",
    kind: "class",
    interfaces: [Iterable],
  }
  function ClosedRange() {}
  ClosedRange.$metadata$ = {
    simpleName: "ClosedRange",
    kind: "interface",
    interfaces: [],
  }
  function IntRange(start, endInclusive) {
    IntProgression.call(this, start, endInclusive, 1)
  }
  IntRange.prototype.contains_7 = function(value) {
    return this._get_first__2() <= value ? value <= this._get_last__2() : false
  }
  IntRange.prototype.isEmpty_28 = function() {
    return this._get_first__2() > this._get_last__2()
  }
  IntRange.prototype.equals = function(other) {
    var tmp
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_28()
      ? other.isEmpty_28()
      : false)
        ? true
        : this._get_first__2() === other._get_first__2()
        ? this._get_last__2() === other._get_last__2()
        : false
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  IntRange.prototype.hashCode = function() {
    return this.isEmpty_28()
      ? -1
      : (imul(31, this._get_first__2()) + this._get_last__2()) | 0
  }
  IntRange.prototype.toString = function() {
    return "" + this._get_first__2() + ".." + this._get_last__2()
  }
  IntRange.$metadata$ = {
    simpleName: "IntRange",
    kind: "class",
    interfaces: [ClosedRange],
  }
  function CharRange(start, endInclusive) {
    CharProgression.call(this, start, endInclusive, 1)
  }
  CharRange.prototype.contains_8 = function(value) {
    return this._get_first__2().compareTo(value) <= 0
      ? value.compareTo(this._get_last__2()) <= 0
      : false
  }
  CharRange.prototype.isEmpty_28 = function() {
    return this._get_first__2().compareTo(this._get_last__2()) > 0
  }
  CharRange.prototype.equals = function(other) {
    var tmp
    if (other instanceof CharRange) {
      tmp = (this.isEmpty_28()
      ? other.isEmpty_28()
      : false)
        ? true
        : this._get_first__2().equals(other._get_first__2())
        ? this._get_last__2().equals(other._get_last__2())
        : false
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  CharRange.prototype.hashCode = function() {
    return this.isEmpty_28()
      ? -1
      : (imul(31, this._get_first__2().toInt_5()) +
          this._get_last__2().toInt_5()) |
          0
  }
  CharRange.prototype.toString = function() {
    return "" + this._get_first__2() + ".." + this._get_last__2()
  }
  CharRange.$metadata$ = {
    simpleName: "CharRange",
    kind: "class",
    interfaces: [ClosedRange],
  }
  function Companion_3() {
    Companion_instance_2 = this
    this._EMPTY = new IntRange(1, 0)
  }
  Companion_3.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_2
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null) new Companion_3()
    return Companion_instance_2
  }
  function Unit() {
    Unit_instance = this
  }
  Unit.prototype.toString = function() {
    return "kotlin.Unit"
  }
  Unit.$metadata$ = {
    simpleName: "Unit",
    kind: "object",
    interfaces: [],
  }
  var Unit_instance
  function Unit_getInstance() {
    if (Unit_instance == null) new Unit()
    return Unit_instance
  }
  function getProgressionLastElement(start, end, step) {
    var tmp
    if (step > 0) {
      tmp = start >= end ? end : (end - differenceModulo(end, start, step)) | 0
    } else if (step < 0) {
      tmp =
        start <= end ? end : (end + differenceModulo(start, end, -step | 0)) | 0
    } else {
      throw IllegalArgumentException_init_$Create$("Step is zero.")
    }
    return tmp
  }
  function differenceModulo(a, b, c) {
    return mod((mod(a, c) - mod(b, c)) | 0, c)
  }
  function mod(a, b) {
    var mod_0 = a % b
    return mod_0 >= 0 ? mod_0 : (mod_0 + b) | 0
  }
  function ByteCompanionObject_0() {
    ByteCompanionObject_instance = this
    this._MIN_VALUE = -128
    this._MAX_VALUE = 127
    this._SIZE_BYTES = 1
    this._SIZE_BITS = 8
  }
  ByteCompanionObject_0.prototype._get_MIN_VALUE__3 = function() {
    return this._MIN_VALUE
  }
  ByteCompanionObject_0.prototype._get_MAX_VALUE__3 = function() {
    return this._MAX_VALUE
  }
  ByteCompanionObject_0.prototype._get_SIZE_BYTES__3 = function() {
    return this._SIZE_BYTES
  }
  ByteCompanionObject_0.prototype._get_SIZE_BITS__3 = function() {
    return this._SIZE_BITS
  }
  ByteCompanionObject_0.$metadata$ = {
    simpleName: "ByteCompanionObject",
    kind: "object",
    interfaces: [],
  }
  Object.defineProperty(ByteCompanionObject_0.prototype, "MIN_VALUE", {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MIN_VALUE__3,
  })
  Object.defineProperty(ByteCompanionObject_0.prototype, "MAX_VALUE", {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MAX_VALUE__3,
  })
  Object.defineProperty(ByteCompanionObject_0.prototype, "SIZE_BYTES", {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BYTES__3,
  })
  Object.defineProperty(ByteCompanionObject_0.prototype, "SIZE_BITS", {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BITS__3,
  })
  var ByteCompanionObject_instance
  function ByteCompanionObject_getInstance() {
    if (ByteCompanionObject_instance == null) new ByteCompanionObject_0()
    return ByteCompanionObject_instance
  }
  function ShortCompanionObject_0() {
    ShortCompanionObject_instance = this
    this._MIN_VALUE_0 = -32768
    this._MAX_VALUE_0 = 32767
    this._SIZE_BYTES_0 = 2
    this._SIZE_BITS_0 = 16
  }
  ShortCompanionObject_0.prototype._get_MIN_VALUE__3 = function() {
    return this._MIN_VALUE_0
  }
  ShortCompanionObject_0.prototype._get_MAX_VALUE__3 = function() {
    return this._MAX_VALUE_0
  }
  ShortCompanionObject_0.prototype._get_SIZE_BYTES__3 = function() {
    return this._SIZE_BYTES_0
  }
  ShortCompanionObject_0.prototype._get_SIZE_BITS__3 = function() {
    return this._SIZE_BITS_0
  }
  ShortCompanionObject_0.$metadata$ = {
    simpleName: "ShortCompanionObject",
    kind: "object",
    interfaces: [],
  }
  Object.defineProperty(ShortCompanionObject_0.prototype, "MIN_VALUE", {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MIN_VALUE__3,
  })
  Object.defineProperty(ShortCompanionObject_0.prototype, "MAX_VALUE", {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MAX_VALUE__3,
  })
  Object.defineProperty(ShortCompanionObject_0.prototype, "SIZE_BYTES", {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BYTES__3,
  })
  Object.defineProperty(ShortCompanionObject_0.prototype, "SIZE_BITS", {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BITS__3,
  })
  var ShortCompanionObject_instance
  function ShortCompanionObject_getInstance() {
    if (ShortCompanionObject_instance == null) new ShortCompanionObject_0()
    return ShortCompanionObject_instance
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this
    this._MIN_VALUE_1 = -2147483648
    this._MAX_VALUE_1 = 2147483647
    this._SIZE_BYTES_1 = 4
    this._SIZE_BITS_1 = 32
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__3 = function() {
    return this._MIN_VALUE_1
  }
  IntCompanionObject_0.prototype._get_MAX_VALUE__3 = function() {
    return this._MAX_VALUE_1
  }
  IntCompanionObject_0.prototype._get_SIZE_BYTES__3 = function() {
    return this._SIZE_BYTES_1
  }
  IntCompanionObject_0.prototype._get_SIZE_BITS__3 = function() {
    return this._SIZE_BITS_1
  }
  IntCompanionObject_0.$metadata$ = {
    simpleName: "IntCompanionObject",
    kind: "object",
    interfaces: [],
  }
  Object.defineProperty(IntCompanionObject_0.prototype, "MIN_VALUE", {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__3,
  })
  Object.defineProperty(IntCompanionObject_0.prototype, "MAX_VALUE", {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__3,
  })
  Object.defineProperty(IntCompanionObject_0.prototype, "SIZE_BYTES", {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__3,
  })
  Object.defineProperty(IntCompanionObject_0.prototype, "SIZE_BITS", {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__3,
  })
  var IntCompanionObject_instance
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null) new IntCompanionObject_0()
    return IntCompanionObject_instance
  }
  function FloatCompanionObject_0() {
    FloatCompanionObject_instance = this
    this._MIN_VALUE_2 = 1.4e-45
    this._MAX_VALUE_2 = 3.4028235e38
    this._POSITIVE_INFINITY = Infinity
    this._NEGATIVE_INFINITY = -Infinity
    this._NaN = NaN
    this._SIZE_BYTES_2 = 4
    this._SIZE_BITS_2 = 32
  }
  FloatCompanionObject_0.prototype._get_MIN_VALUE__3 = function() {
    return this._MIN_VALUE_2
  }
  FloatCompanionObject_0.prototype._get_MAX_VALUE__3 = function() {
    return this._MAX_VALUE_2
  }
  FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function() {
    return this._POSITIVE_INFINITY
  }
  FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function() {
    return this._NEGATIVE_INFINITY
  }
  FloatCompanionObject_0.prototype._get_NaN__0 = function() {
    return this._NaN
  }
  FloatCompanionObject_0.prototype._get_SIZE_BYTES__3 = function() {
    return this._SIZE_BYTES_2
  }
  FloatCompanionObject_0.prototype._get_SIZE_BITS__3 = function() {
    return this._SIZE_BITS_2
  }
  FloatCompanionObject_0.$metadata$ = {
    simpleName: "FloatCompanionObject",
    kind: "object",
    interfaces: [],
  }
  Object.defineProperty(FloatCompanionObject_0.prototype, "MIN_VALUE", {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MIN_VALUE__3,
  })
  Object.defineProperty(FloatCompanionObject_0.prototype, "MAX_VALUE", {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MAX_VALUE__3,
  })
  Object.defineProperty(FloatCompanionObject_0.prototype, "POSITIVE_INFINITY", {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0,
  })
  Object.defineProperty(FloatCompanionObject_0.prototype, "NEGATIVE_INFINITY", {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0,
  })
  Object.defineProperty(FloatCompanionObject_0.prototype, "NaN", {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NaN__0,
  })
  Object.defineProperty(FloatCompanionObject_0.prototype, "SIZE_BYTES", {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BYTES__3,
  })
  Object.defineProperty(FloatCompanionObject_0.prototype, "SIZE_BITS", {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BITS__3,
  })
  var FloatCompanionObject_instance
  function FloatCompanionObject_getInstance() {
    if (FloatCompanionObject_instance == null) new FloatCompanionObject_0()
    return FloatCompanionObject_instance
  }
  function DoubleCompanionObject_0() {
    DoubleCompanionObject_instance = this
    this._MIN_VALUE_3 = 4.9e-324
    this._MAX_VALUE_3 = 1.7976931348623157e308
    this._POSITIVE_INFINITY_0 = Infinity
    this._NEGATIVE_INFINITY_0 = -Infinity
    this._NaN_0 = NaN
    this._SIZE_BYTES_3 = 8
    this._SIZE_BITS_3 = 64
  }
  DoubleCompanionObject_0.prototype._get_MIN_VALUE__3 = function() {
    return this._MIN_VALUE_3
  }
  DoubleCompanionObject_0.prototype._get_MAX_VALUE__3 = function() {
    return this._MAX_VALUE_3
  }
  DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function() {
    return this._POSITIVE_INFINITY_0
  }
  DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function() {
    return this._NEGATIVE_INFINITY_0
  }
  DoubleCompanionObject_0.prototype._get_NaN__0 = function() {
    return this._NaN_0
  }
  DoubleCompanionObject_0.prototype._get_SIZE_BYTES__3 = function() {
    return this._SIZE_BYTES_3
  }
  DoubleCompanionObject_0.prototype._get_SIZE_BITS__3 = function() {
    return this._SIZE_BITS_3
  }
  DoubleCompanionObject_0.$metadata$ = {
    simpleName: "DoubleCompanionObject",
    kind: "object",
    interfaces: [],
  }
  Object.defineProperty(DoubleCompanionObject_0.prototype, "MIN_VALUE", {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MIN_VALUE__3,
  })
  Object.defineProperty(DoubleCompanionObject_0.prototype, "MAX_VALUE", {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MAX_VALUE__3,
  })
  Object.defineProperty(
    DoubleCompanionObject_0.prototype,
    "POSITIVE_INFINITY",
    {
      configurable: true,
      get: DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0,
    }
  )
  Object.defineProperty(
    DoubleCompanionObject_0.prototype,
    "NEGATIVE_INFINITY",
    {
      configurable: true,
      get: DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0,
    }
  )
  Object.defineProperty(DoubleCompanionObject_0.prototype, "NaN", {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NaN__0,
  })
  Object.defineProperty(DoubleCompanionObject_0.prototype, "SIZE_BYTES", {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BYTES__3,
  })
  Object.defineProperty(DoubleCompanionObject_0.prototype, "SIZE_BITS", {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BITS__3,
  })
  var DoubleCompanionObject_instance
  function DoubleCompanionObject_getInstance() {
    if (DoubleCompanionObject_instance == null) new DoubleCompanionObject_0()
    return DoubleCompanionObject_instance
  }
  function StringCompanionObject() {
    StringCompanionObject_instance = this
  }
  StringCompanionObject.$metadata$ = {
    simpleName: "StringCompanionObject",
    kind: "object",
    interfaces: [],
  }
  var StringCompanionObject_instance
  function StringCompanionObject_getInstance() {
    if (StringCompanionObject_instance == null) new StringCompanionObject()
    return StringCompanionObject_instance
  }
  function BooleanCompanionObject() {
    BooleanCompanionObject_instance = this
  }
  BooleanCompanionObject.$metadata$ = {
    simpleName: "BooleanCompanionObject",
    kind: "object",
    interfaces: [],
  }
  var BooleanCompanionObject_instance
  function BooleanCompanionObject_getInstance() {
    if (BooleanCompanionObject_instance == null) new BooleanCompanionObject()
    return BooleanCompanionObject_instance
  }
  function mapCapacity(expectedSize) {
    return expectedSize
  }
  function mapOf_0(pair) {
    return hashMapOf([pair])
  }
  function listOf(element) {
    return arrayListOf([element])
  }
  function copyToArray_0(collection) {
    var tmp
    if (collection.toArray !== undefined) {
      var tmp0_unsafeCast_0 = collection.toArray()
      tmp = tmp0_unsafeCast_0
    } else {
      {
        var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection)
        tmp = tmp1_unsafeCast_0
      }
    }
    return tmp
  }
  function copyToArrayImpl_0(collection) {
    var array = []
    var iterator = collection.iterator_37()
    while (iterator.hasNext_14()) {
      array.push(iterator.next_14())
    }
    return array
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow()
    }
    return index
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this)
  }
  AbstractMutableCollection.prototype.remove_12 = function(element) {
    this.checkIsMutable_10()
    var iterator = this.iterator_37()
    while (iterator.hasNext_14()) {
      if (equals_0(iterator.next_14(), element)) {
        iterator.remove_11()
        return true
      }
    }
    return false
  }
  AbstractMutableCollection.prototype.addAll_2 = function(elements) {
    this.checkIsMutable_10()
    var modified = false
    var tmp0_iterator = elements.iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var element = tmp0_iterator.next_14()
      if (this.add_16(element)) modified = true
    }
    return modified
  }
  AbstractMutableCollection.prototype.toJSON = function() {
    return this.toArray()
  }
  AbstractMutableCollection.prototype.checkIsMutable_10 = function() {}
  AbstractMutableCollection.$metadata$ = {
    simpleName: "AbstractMutableCollection",
    kind: "class",
    interfaces: [MutableCollection],
  }
  function AbstractMutableList() {
    AbstractMutableCollection.call(this)
    this._modCount = 0
  }
  AbstractMutableList.prototype._set_modCount__0 = function(_set___) {
    this._modCount = _set___
  }
  AbstractMutableList.prototype._get_modCount__0 = function() {
    return this._modCount
  }
  AbstractMutableList.prototype.add_16 = function(element) {
    this.checkIsMutable_10()
    this.add_7(this._get_size__27(), element)
    return true
  }
  AbstractMutableList.prototype.iterator_37 = function() {
    return new IteratorImpl(this)
  }
  AbstractMutableList.prototype.contains_23 = function(element) {
    return this.indexOf_0(element) >= 0
  }
  AbstractMutableList.prototype.indexOf_0 = function(element) {
    var inductionVariable = 0
    var last_0 = _get_lastIndex__0(this)
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        if (equals_0(this.get_27(index), element)) {
          return index
        }
      } while (!(index === last_0))
    return -1
  }
  AbstractMutableList.prototype.equals = function(other) {
    if (other === this) return true
    if (!(!(other == null) ? isInterface(other, List) : false)) return false
    else {
    }
    return Companion_getInstance().orderedEquals(this, other)
  }
  AbstractMutableList.prototype.hashCode = function() {
    return Companion_getInstance().orderedHashCode(this)
  }
  AbstractMutableList.$metadata$ = {
    simpleName: "AbstractMutableList",
    kind: "class",
    interfaces: [MutableList],
  }
  function IteratorImpl($outer) {
    this._$this_3 = $outer
    this._index_1 = 0
    this._last_1 = -1
  }
  IteratorImpl.prototype.hasNext_14 = function() {
    return this._index_1 < this._$this_3._get_size__27()
  }
  IteratorImpl.prototype.next_14 = function() {
    if (!this.hasNext_14()) throw NoSuchElementException_init_$Create$()
    var tmp = this
    var tmp0_this = this
    var tmp1 = tmp0_this._index_1
    tmp0_this._index_1 = (tmp1 + 1) | 0
    tmp._last_1 = tmp1
    return this._$this_3.get_27(this._last_1)
  }
  IteratorImpl.prototype.remove_11 = function() {
    var tmp0_check_0 = !(this._last_1 === -1)
    if (!tmp0_check_0) {
      var message_1 =
        "Call next() or previous() before removing element from the iterator."
      throw IllegalStateException_init_$Create$(toString_1(message_1))
    }
    this._$this_3.removeAt_1(this._last_1)
    Unit_getInstance()
    this._index_1 = this._last_1
    this._last_1 = -1
  }
  IteratorImpl.$metadata$ = {
    simpleName: "IteratorImpl",
    kind: "class",
    interfaces: [MutableIterator],
  }
  function AbstractMutableMap() {
    AbstractMap.call(this)
    this.__keys_0 = null
    this.__values_0 = null
  }
  AbstractMutableMap.prototype._get_keys__5 = function() {
    if (this.__keys_0 == null) {
      var tmp = this
      tmp.__keys_0 = new _no_name_provided__5(this)
    }
    return ensureNotNull(this.__keys_0)
  }
  AbstractMutableMap.prototype.putAll_1 = function(from) {
    this.checkIsMutable_10()
    var tmp0_iterator = from._get_entries__5().iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var tmp1_loop_parameter = tmp0_iterator.next_14()
      var key = tmp1_loop_parameter._get_key__3()
      var value = tmp1_loop_parameter._get_value__11()
      this.put_5(key, value)
      Unit_getInstance()
    }
  }
  AbstractMutableMap.prototype.checkIsMutable_10 = function() {}
  AbstractMutableMap.$metadata$ = {
    simpleName: "AbstractMutableMap",
    kind: "class",
    interfaces: [MutableMap],
  }
  function _no_name_provided__4($entryIterator) {
    this._$entryIterator_0 = $entryIterator
  }
  _no_name_provided__4.prototype.hasNext_14 = function() {
    return this._$entryIterator_0.hasNext_14()
  }
  _no_name_provided__4.prototype.next_14 = function() {
    return this._$entryIterator_0.next_14()._get_key__3()
  }
  _no_name_provided__4.prototype.remove_11 = function() {
    return this._$entryIterator_0.remove_11()
  }
  _no_name_provided__4.$metadata$ = {
    kind: "class",
    interfaces: [MutableIterator],
  }
  function SimpleEntry(key, value) {
    this._key = key
    this.__value_0 = value
  }
  SimpleEntry.prototype._get_key__3 = function() {
    return this._key
  }
  SimpleEntry.prototype._get_value__11 = function() {
    return this.__value_0
  }
  SimpleEntry.prototype.setValue_1 = function(newValue) {
    var oldValue = this.__value_0
    this.__value_0 = newValue
    return oldValue
  }
  SimpleEntry.prototype.hashCode = function() {
    return Companion_getInstance_0().entryHashCode(this)
  }
  SimpleEntry.prototype.toString = function() {
    return Companion_getInstance_0().entryToString(this)
  }
  SimpleEntry.prototype.equals = function(other) {
    return Companion_getInstance_0().entryEquals(this, other)
  }
  SimpleEntry.$metadata$ = {
    simpleName: "SimpleEntry",
    kind: "class",
    interfaces: [MutableEntry],
  }
  function _no_name_provided__5($this) {
    this._$this_4 = $this
    AbstractMutableSet.call(this)
  }
  _no_name_provided__5.prototype.add_3 = function(element) {
    throw UnsupportedOperationException_init_$Create$_0(
      "Add is not supported on keys"
    )
  }
  _no_name_provided__5.prototype.add_16 = function(element) {
    return this.add_3(
      (element == null ? true : isObject(element)) ? element : THROW_CCE()
    )
  }
  _no_name_provided__5.prototype.contains_19 = function(element) {
    return this._$this_4.containsKey_8(element)
  }
  _no_name_provided__5.prototype.contains_23 = function(element) {
    if (!(element == null ? true : isObject(element))) return false
    else {
    }
    return this.contains_19(
      (element == null ? true : isObject(element)) ? element : THROW_CCE()
    )
  }
  _no_name_provided__5.prototype.iterator_37 = function() {
    var entryIterator = this._$this_4._get_entries__5().iterator_37()
    return new _no_name_provided__4(entryIterator)
  }
  _no_name_provided__5.prototype._get_size__27 = function() {
    return this._$this_4._get_size__27()
  }
  _no_name_provided__5.prototype.checkIsMutable_10 = function() {
    return this._$this_4.checkIsMutable_10()
  }
  _no_name_provided__5.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this)
  }
  AbstractMutableSet.prototype.equals = function(other) {
    if (other === this) return true
    if (!(!(other == null) ? isInterface(other, Set) : false)) return false
    else {
    }
    return Companion_getInstance_1().setEquals(this, other)
  }
  AbstractMutableSet.prototype.hashCode = function() {
    return Companion_getInstance_1().unorderedHashCode(this)
  }
  AbstractMutableSet.$metadata$ = {
    simpleName: "AbstractMutableSet",
    kind: "class",
    interfaces: [MutableSet],
  }
  function ArrayList(array) {
    AbstractMutableList.call(this)
    this._array = array
    this._isReadOnly = false
  }
  ArrayList.prototype.ensureCapacity = function(minCapacity) {}
  ArrayList.prototype._get_size__27 = function() {
    return this._array.length
  }
  ArrayList.prototype.get_27 = function(index) {
    var tmp = this._array[rangeCheck(this, index)]
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE()
  }
  ArrayList.prototype.add_16 = function(element) {
    this.checkIsMutable_10()
    var tmp0_asDynamic_0 = this._array
    tmp0_asDynamic_0.push(element)
    var tmp0_this = this
    var tmp1 = tmp0_this._get_modCount__0()
    tmp0_this._set_modCount__0((tmp1 + 1) | 0)
    Unit_getInstance()
    return true
  }
  ArrayList.prototype.add_7 = function(index, element) {
    this.checkIsMutable_10()
    var tmp0_asDynamic_0 = this._array
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element)
    var tmp0_this = this
    var tmp1 = tmp0_this._get_modCount__0()
    tmp0_this._set_modCount__0((tmp1 + 1) | 0)
    Unit_getInstance()
  }
  ArrayList.prototype.removeAt_1 = function(index) {
    this.checkIsMutable_10()
    rangeCheck(this, index)
    Unit_getInstance()
    var tmp0_this = this
    var tmp1 = tmp0_this._get_modCount__0()
    tmp0_this._set_modCount__0((tmp1 + 1) | 0)
    Unit_getInstance()
    var tmp
    if (index === _get_lastIndex__0(this)) {
      var tmp0_asDynamic_0 = this._array
      tmp = tmp0_asDynamic_0.pop()
    } else {
      var tmp1_asDynamic_0 = this._array
      tmp = tmp1_asDynamic_0.splice(index, 1)[0]
    }
    return tmp
  }
  ArrayList.prototype.remove_12 = function(element) {
    this.checkIsMutable_10()
    var inductionVariable = 0
    var last_0 = (this._array.length - 1) | 0
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        if (equals_0(this._array[index], element)) {
          var tmp0_asDynamic_0 = this._array
          tmp0_asDynamic_0.splice(index, 1)
          var tmp1_this = this
          var tmp2 = tmp1_this._get_modCount__0()
          tmp1_this._set_modCount__0((tmp2 + 1) | 0)
          Unit_getInstance()
          return true
        }
      } while (inductionVariable <= last_0)
    return false
  }
  ArrayList.prototype.indexOf_0 = function(element) {
    return indexOf(this._array, element)
  }
  ArrayList.prototype.toString = function() {
    return arrayToString(this._array)
  }
  ArrayList.prototype.toArray_0 = function() {
    return [].slice.call(this._array)
  }
  ArrayList.prototype.toArray = function() {
    return this.toArray_0()
  }
  ArrayList.prototype.checkIsMutable_10 = function() {
    if (this._isReadOnly) throw UnsupportedOperationException_init_$Create$()
  }
  ArrayList.$metadata$ = {
    simpleName: "ArrayList",
    kind: "class",
    interfaces: [MutableList, RandomAccess],
  }
  function ArrayList_init_$Init$($this) {
    ArrayList.call($this, [])
    return $this
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype))
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    ArrayList.call($this, [])
    return $this
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(
      initialCapacity,
      Object.create(ArrayList.prototype)
    )
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements))
    return $this
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype))
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__27())
    return index
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__27())
    return index
  }
  function EqualityComparator() {}
  EqualityComparator.$metadata$ = {
    simpleName: "EqualityComparator",
    kind: "interface",
    interfaces: [],
  }
  function HashCode() {
    HashCode_instance = this
  }
  HashCode.prototype.equals_1 = function(value1, value2) {
    return equals_0(value1, value2)
  }
  HashCode.prototype.getHashCode_0 = function(value) {
    var tmp0_safe_receiver = value
    var tmp1_elvis_lhs =
      tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver)
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs
  }
  HashCode.$metadata$ = {
    simpleName: "HashCode",
    kind: "object",
    interfaces: [EqualityComparator],
  }
  var HashCode_instance
  function HashCode_getInstance() {
    if (HashCode_instance == null) new HashCode()
    return HashCode_instance
  }
  HashMap.prototype.containsKey_8 = function(key) {
    return this._internalMap.contains_19(key)
  }
  HashMap.prototype._get_entries__5 = function() {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0()
    }
    return ensureNotNull(this.__entries)
  }
  HashMap.prototype.createEntrySet_0 = function() {
    return new EntrySet(this)
  }
  HashMap.prototype.get_16 = function(key) {
    return this._internalMap.get_16(key)
  }
  HashMap.prototype.put_5 = function(key, value) {
    return this._internalMap.put_5(key, value)
  }
  HashMap.prototype.remove_10 = function(key) {
    return this._internalMap.remove_10(key)
  }
  HashMap.prototype._get_size__27 = function() {
    return this._internalMap._get_size__27()
  }
  function HashMap() {
    this.__entries = null
  }
  HashMap.$metadata$ = {
    simpleName: "HashMap",
    kind: "class",
    interfaces: [MutableMap],
  }
  function EntrySet($outer) {
    this._$this_5 = $outer
    AbstractMutableSet.call(this)
  }
  EntrySet.prototype.add_11 = function(element) {
    throw UnsupportedOperationException_init_$Create$_0(
      "Add is not supported on entries"
    )
  }
  EntrySet.prototype.add_16 = function(element) {
    return this.add_11(
      (!(element == null)
      ? isInterface(element, MutableEntry)
      : false)
        ? element
        : THROW_CCE()
    )
  }
  EntrySet.prototype.contains_20 = function(element) {
    return this._$this_5.containsEntry_2(element)
  }
  EntrySet.prototype.contains_23 = function(element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false
    else {
    }
    return this.contains_20(
      (!(element == null)
      ? isInterface(element, MutableEntry)
      : false)
        ? element
        : THROW_CCE()
    )
  }
  EntrySet.prototype.iterator_37 = function() {
    return this._$this_5._internalMap.iterator_37()
  }
  EntrySet.prototype._get_size__27 = function() {
    return this._$this_5._get_size__27()
  }
  EntrySet.$metadata$ = {
    simpleName: "EntrySet",
    kind: "class",
    interfaces: [],
  }
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this)
    HashMap.call($this)
    $this._internalMap = internalMap
    $this._equality = internalMap._get_equality__0()
    return $this
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this)
    return $this
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype))
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this)
    var tmp0_require_0 = initialCapacity >= 0
    if (!tmp0_require_0) {
      var message_1 = "" + "Negative initial capacity: " + initialCapacity
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    var tmp1_require_0 = loadFactor >= 0
    if (!tmp1_require_0) {
      var message_1_0 = "" + "Non-positive load factor: " + loadFactor
      throw IllegalArgumentException_init_$Create$(toString_1(message_1_0))
    }
    return $this
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(
      initialCapacity,
      loadFactor,
      Object.create(HashMap.prototype)
    )
  }
  function HashMap_init_$Init$_2(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this)
    return $this
  }
  function HashMap_init_$Create$_1(initialCapacity) {
    return HashMap_init_$Init$_2(
      initialCapacity,
      Object.create(HashMap.prototype)
    )
  }
  function HashMap_init_$Init$_3(original, $this) {
    HashMap_init_$Init$_0($this)
    $this.putAll_1(original)
    return $this
  }
  function HashMap_init_$Create$_2(original) {
    return HashMap_init_$Init$_3(original, Object.create(HashMap.prototype))
  }
  HashSet.prototype._get_map__0 = function() {
    return this._map
  }
  HashSet.prototype.add_16 = function(element) {
    var old = this._map.put_5(element, this)
    return old == null
  }
  HashSet.prototype.contains_23 = function(element) {
    return this._map.containsKey_8(element)
  }
  HashSet.prototype.isEmpty_28 = function() {
    return this._map.isEmpty_28()
  }
  HashSet.prototype.iterator_37 = function() {
    return this._map._get_keys__5().iterator_37()
  }
  HashSet.prototype._get_size__27 = function() {
    return this._map._get_size__27()
  }
  function HashSet() {}
  HashSet.$metadata$ = {
    simpleName: "HashSet",
    kind: "class",
    interfaces: [MutableSet],
  }
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this)
    HashSet.call($this)
    $this._map = HashMap_init_$Create$()
    return $this
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(Object.create(HashSet.prototype))
  }
  function HashSet_init_$Init$_0(elements, $this) {
    AbstractMutableSet.call($this)
    HashSet.call($this)
    $this._map = HashMap_init_$Create$_1(elements._get_size__27())
    $this.addAll_2(elements)
    Unit_getInstance()
    return $this
  }
  function HashSet_init_$Create$_0(elements) {
    return HashSet_init_$Init$_0(elements, Object.create(HashSet.prototype))
  }
  function HashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this)
    HashSet.call($this)
    $this._map = HashMap_init_$Create$_0(initialCapacity, loadFactor)
    return $this
  }
  function HashSet_init_$Init$_2(initialCapacity, $this) {
    HashSet_init_$Init$_1(initialCapacity, 0.0, $this)
    return $this
  }
  function HashSet_init_$Create$_1(initialCapacity) {
    return HashSet_init_$Init$_2(
      initialCapacity,
      Object.create(HashSet.prototype)
    )
  }
  function HashSet_init_$Init$_3(map, $this) {
    AbstractMutableSet.call($this)
    HashSet.call($this)
    $this._map = map
    return $this
  }
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality
    this._backingMap = this.createJsMap_0()
    this._size = 0
  }
  InternalHashCodeMap.prototype._get_equality__0 = function() {
    return this._equality_0
  }
  InternalHashCodeMap.prototype._get_size__27 = function() {
    return this._size
  }
  InternalHashCodeMap.prototype.put_5 = function(key, value) {
    var hashCode_1 = this._equality_0.getHashCode_0(key)
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1)
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value)
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry
        if (this._equality_0.equals_1(entry._get_key__3(), key)) {
          return entry.setValue_1(value)
        } else {
          var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)]
          this._backingMap[hashCode_1] = tmp0_arrayOf_0
          var tmp0_this = this
          var tmp1 = tmp0_this._size
          tmp0_this._size = (tmp1 + 1) | 0
          Unit_getInstance()
          return null
        }
      } else {
        {
          var chain = chainOrEntry
          var entry_0 = findEntryInChain(chain, this, key)
          if (!(entry_0 == null)) {
            return entry_0.setValue_1(value)
          }
          chain.push(new SimpleEntry(key, value))
        }
      }
    }
    var tmp2_this = this
    var tmp3 = tmp2_this._size
    tmp2_this._size = (tmp3 + 1) | 0
    Unit_getInstance()
    return null
  }
  InternalHashCodeMap.prototype.remove_10 = function(key) {
    var hashCode_1 = this._equality_0.getHashCode_0(key)
    var tmp0_elvis_lhs = getChainOrEntryOrNull(this, hashCode_1)
    var tmp
    if (tmp0_elvis_lhs == null) {
      return null
    } else {
      tmp = tmp0_elvis_lhs
    }
    var chainOrEntry = tmp
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry
      if (this._equality_0.equals_1(entry._get_key__3(), key)) {
        jsDeleteProperty(this._backingMap, hashCode_1)
        var tmp1_this = this
        var tmp2 = tmp1_this._size
        tmp1_this._size = (tmp2 - 1) | 0
        Unit_getInstance()
        return entry._get_value__11()
      } else {
        return null
      }
    } else {
      {
        var chain = chainOrEntry
        var inductionVariable = 0
        var last_0 = (chain.length - 1) | 0
        if (inductionVariable <= last_0)
          do {
            var index = inductionVariable
            inductionVariable = (inductionVariable + 1) | 0
            var entry_0 = chain[index]
            if (this._equality_0.equals_1(key, entry_0._get_key__3())) {
              if (chain.length === 1) {
                chain.length = 0
                jsDeleteProperty(this._backingMap, hashCode_1)
              } else {
                chain.splice(index, 1)
              }
              var tmp4_this = this
              var tmp5 = tmp4_this._size
              tmp4_this._size = (tmp5 - 1) | 0
              Unit_getInstance()
              return entry_0._get_value__11()
            }
          } while (inductionVariable <= last_0)
      }
    }
    return null
  }
  InternalHashCodeMap.prototype.contains_19 = function(key) {
    return !(getEntry(this, key) == null)
  }
  InternalHashCodeMap.prototype.get_16 = function(key) {
    var tmp0_safe_receiver = getEntry(this, key)
    return tmp0_safe_receiver == null
      ? null
      : tmp0_safe_receiver._get_value__11()
  }
  InternalHashCodeMap.prototype.iterator_37 = function() {
    return new _no_name_provided__6(this)
  }
  InternalHashCodeMap.$metadata$ = {
    simpleName: "InternalHashCodeMap",
    kind: "class",
    interfaces: [InternalMap],
  }
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp0_unsafeCast_0 = $this._chainOrEntry
      var chainSize = tmp0_unsafeCast_0.length
      var tmp0_this = $this
      tmp0_this._itemIndex = (tmp0_this._itemIndex + 1) | 0
      if (tmp0_this._itemIndex < chainSize) return 0
      else {
      }
    }
    var tmp1_this = $this
    tmp1_this._keyIndex = (tmp1_this._keyIndex + 1) | 0
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry =
        $this._$this_6._backingMap[$this._keys[$this._keyIndex]]
      var tmp = $this
      var tmp_0 = $this._chainOrEntry
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false
      $this._itemIndex = 0
      return 0
    } else {
      {
        $this._chainOrEntry = null
        return 1
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull(
      $this,
      $this._equality_0.getHashCode_0(key)
    )
    var tmp
    if (tmp0_elvis_lhs == null) {
      return null
    } else {
      tmp = tmp0_elvis_lhs
    }
    var chainOrEntry = tmp
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry
      if ($this._equality_0.equals_1(entry._get_key__3(), key)) {
        return entry
      } else {
        return null
      }
    } else {
      {
        var chain = chainOrEntry
        return findEntryInChain(chain, $this, key)
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$0
    l$ret$1: do {
      var indexedObject = _this_
      var inductionVariable = 0
      var last_0 = indexedObject.length
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable]
        inductionVariable = (inductionVariable + 1) | 0
        if ($this._equality_0.equals_1(element_2._get_key__3(), key)) {
          tmp$ret$0 = element_2
          break l$ret$1
        } else {
        }
      }
      tmp$ret$0 = null
    } while (false)
    return tmp$ret$0
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1]
    return chainOrEntry === undefined ? null : chainOrEntry
  }
  function _no_name_provided__6($this) {
    this._$this_6 = $this
    this._state = -1
    this._keys = Object.keys(this._$this_6._backingMap)
    this._keyIndex = -1
    this._chainOrEntry = null
    this._isChain = false
    this._itemIndex = -1
    this._lastEntry = null
  }
  _no_name_provided__6.prototype.hasNext_14 = function() {
    if (this._state === -1) this._state = computeNext(this)
    return this._state === 0
  }
  _no_name_provided__6.prototype.next_14 = function() {
    if (!this.hasNext_14()) throw NoSuchElementException_init_$Create$()
    var tmp
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry
      tmp = tmp0_unsafeCast_0[this._itemIndex]
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry
      tmp = tmp1_unsafeCast_0
    }
    var lastEntry = tmp
    this._lastEntry = lastEntry
    this._state = -1
    return lastEntry
  }
  _no_name_provided__6.prototype.remove_11 = function() {
    var tmp0_checkNotNull_0 = this._lastEntry
    var tmp$ret$0
    l$ret$1: do {
      if (tmp0_checkNotNull_0 == null) {
        var message_2_1 = "Required value was null."
        throw IllegalStateException_init_$Create$(toString_1(message_2_1))
      } else {
        tmp$ret$0 = tmp0_checkNotNull_0
        break l$ret$1
      }
    } while (false)
    Unit_getInstance()
    this._$this_6.remove_10(ensureNotNull(this._lastEntry)._get_key__3())
    Unit_getInstance()
    this._lastEntry = null
    var tmp0_this = this
    var tmp1 = tmp0_this._itemIndex
    tmp0_this._itemIndex = (tmp1 - 1) | 0
    Unit_getInstance()
  }
  _no_name_provided__6.$metadata$ = {
    kind: "class",
    interfaces: [MutableIterator],
  }
  function InternalMap() {}
  InternalMap.prototype.createJsMap_0 = function() {
    var result = Object.create(null)
    result["foo"] = 1
    jsDeleteProperty(result, "foo")
    return result
  }
  InternalMap.$metadata$ = {
    simpleName: "InternalMap",
    kind: "interface",
    interfaces: [MutableIterable],
  }
  LinkedHashMap.prototype.containsKey_8 = function(key) {
    return this._map_0.containsKey_8(key)
  }
  LinkedHashMap.prototype.createEntrySet_0 = function() {
    return new EntrySet_0(this)
  }
  LinkedHashMap.prototype.get_16 = function(key) {
    var tmp0_safe_receiver = this._map_0.get_16(key)
    return tmp0_safe_receiver == null
      ? null
      : tmp0_safe_receiver._get_value__11()
  }
  LinkedHashMap.prototype.put_5 = function(key, value) {
    this.checkIsMutable_10()
    var old = this._map_0.get_16(key)
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value)
      this._map_0.put_5(key, newEntry)
      Unit_getInstance()
      addToEnd(newEntry, this)
      return null
    } else {
      return old.setValue_1(value)
    }
  }
  LinkedHashMap.prototype.remove_10 = function(key) {
    this.checkIsMutable_10()
    var entry = this._map_0.remove_10(key)
    if (!(entry == null)) {
      remove(entry, this)
      return entry._get_value__11()
    }
    return null
  }
  LinkedHashMap.prototype._get_size__27 = function() {
    return this._map_0._get_size__27()
  }
  LinkedHashMap.prototype.checkIsMutable_10 = function() {
    if (this._isReadOnly_0) throw UnsupportedOperationException_init_$Create$()
  }
  function LinkedHashMap() {
    this._head = null
    this._isReadOnly_0 = false
  }
  LinkedHashMap.$metadata$ = {
    simpleName: "LinkedHashMap",
    kind: "class",
    interfaces: [MutableMap],
  }
  function EntryIterator($outer) {
    this._$this_7 = $outer
    this._last_2 = null
    this._next_1 = null
    this._next_1 = this._$this_7._$this_9._head
  }
  EntryIterator.prototype.hasNext_14 = function() {
    return !(this._next_1 === null)
  }
  EntryIterator.prototype.next_14 = function() {
    if (!this.hasNext_14()) throw NoSuchElementException_init_$Create$()
    var current = ensureNotNull(this._next_1)
    this._last_2 = current
    var tmp = this
    var tmp0_takeIf_0 = current._next_2
    var tmp_0
    if (!(tmp0_takeIf_0 === this._$this_7._$this_9._head)) {
      tmp_0 = tmp0_takeIf_0
    } else {
      {
        tmp_0 = null
      }
    }
    tmp._next_1 = tmp_0
    return current
  }
  EntryIterator.prototype.remove_11 = function() {
    var tmp0_check_0 = !(this._last_2 == null)
    if (!tmp0_check_0) {
      var message_2_1 = "Check failed."
      throw IllegalStateException_init_$Create$(toString_1(message_2_1))
    }
    this._$this_7.checkIsMutable_10()
    remove(ensureNotNull(this._last_2), this._$this_7._$this_9)
    this._$this_7._$this_9._map_0.remove_10(
      ensureNotNull(this._last_2)._get_key__3()
    )
    Unit_getInstance()
    this._last_2 = null
  }
  EntryIterator.$metadata$ = {
    simpleName: "EntryIterator",
    kind: "class",
    interfaces: [MutableIterator],
  }
  function ChainEntry($outer, key, value) {
    this._$this_8 = $outer
    SimpleEntry.call(this, key, value)
    this._next_2 = null
    this._prev = null
  }
  ChainEntry.prototype.setValue_1 = function(newValue) {
    this._$this_8.checkIsMutable_10()
    return SimpleEntry.prototype.setValue_1.call(this, newValue)
  }
  ChainEntry.$metadata$ = {
    simpleName: "ChainEntry",
    kind: "class",
    interfaces: [],
  }
  function EntrySet_0($outer) {
    this._$this_9 = $outer
    AbstractMutableSet.call(this)
  }
  EntrySet_0.prototype.add_11 = function(element) {
    throw UnsupportedOperationException_init_$Create$_0(
      "Add is not supported on entries"
    )
  }
  EntrySet_0.prototype.add_16 = function(element) {
    return this.add_11(
      (!(element == null)
      ? isInterface(element, MutableEntry)
      : false)
        ? element
        : THROW_CCE()
    )
  }
  EntrySet_0.prototype.contains_20 = function(element) {
    return this._$this_9.containsEntry_2(element)
  }
  EntrySet_0.prototype.contains_23 = function(element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false
    else {
    }
    return this.contains_20(
      (!(element == null)
      ? isInterface(element, MutableEntry)
      : false)
        ? element
        : THROW_CCE()
    )
  }
  EntrySet_0.prototype.iterator_37 = function() {
    return new EntryIterator(this)
  }
  EntrySet_0.prototype._get_size__27 = function() {
    return this._$this_9._get_size__27()
  }
  EntrySet_0.prototype.checkIsMutable_10 = function() {
    return this._$this_9.checkIsMutable_10()
  }
  EntrySet_0.$metadata$ = {
    simpleName: "EntrySet",
    kind: "class",
    interfaces: [],
  }
  function addToEnd(_this_, $this) {
    var tmp0_check_0 = _this_._next_2 == null ? _this_._prev == null : false
    if (!tmp0_check_0) {
      var message_2_1 = "Check failed."
      throw IllegalStateException_init_$Create$(toString_1(message_2_1))
    }
    var _head = $this._head
    if (_head == null) {
      $this._head = _this_
      _this_._next_2 = _this_
      _this_._prev = _this_
    } else {
      var tmp1_checkNotNull_0 = _head._prev
      var tmp$ret$0
      l$ret$1: do {
        if (tmp1_checkNotNull_0 == null) {
          var message_2_1_0 = "Required value was null."
          throw IllegalStateException_init_$Create$(toString_1(message_2_1_0))
        } else {
          tmp$ret$0 = tmp1_checkNotNull_0
          break l$ret$1
        }
      } while (false)
      var _tail = tmp$ret$0
      _this_._prev = _tail
      _this_._next_2 = _head
      _head._prev = _this_
      _tail._next_2 = _this_
    }
  }
  function remove(_this_, $this) {
    if (_this_._next_2 === _this_) {
      $this._head = null
    } else {
      if ($this._head === _this_) {
        $this._head = _this_._next_2
      }
      ensureNotNull(_this_._next_2)._prev = _this_._prev
      ensureNotNull(_this_._prev)._next_2 = _this_._next_2
    }
    _this_._next_2 = null
    _this_._prev = null
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this)
    LinkedHashMap.call($this)
    $this._map_0 = HashMap_init_$Create$()
    return $this
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype))
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this)
    LinkedHashMap.call($this)
    $this._map_0 = HashMap_init_$Create$()
    return $this
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this)
    return $this
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(
      initialCapacity,
      Object.create(LinkedHashMap.prototype)
    )
  }
  function LinkedHashMap_init_$Init$_2(original, $this) {
    HashMap_init_$Init$_0($this)
    LinkedHashMap.call($this)
    $this._map_0 = HashMap_init_$Create$()
    $this.putAll_1(original)
    return $this
  }
  function LinkedHashMap_init_$Create$_1(original) {
    return LinkedHashMap_init_$Init$_2(
      original,
      Object.create(LinkedHashMap.prototype)
    )
  }
  LinkedHashSet.prototype.checkIsMutable_10 = function() {
    return this._get_map__0().checkIsMutable_10()
  }
  function LinkedHashSet() {}
  LinkedHashSet.$metadata$ = {
    simpleName: "LinkedHashSet",
    kind: "class",
    interfaces: [MutableSet],
  }
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$(), $this)
    LinkedHashSet.call($this)
    return $this
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(Object.create(LinkedHashSet.prototype))
  }
  function LinkedHashSet_init_$Init$_0(elements, $this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$(), $this)
    LinkedHashSet.call($this)
    $this.addAll_2(elements)
    Unit_getInstance()
    return $this
  }
  function LinkedHashSet_init_$Create$_0(elements) {
    return LinkedHashSet_init_$Init$_0(
      elements,
      Object.create(LinkedHashSet.prototype)
    )
  }
  function RandomAccess() {}
  RandomAccess.$metadata$ = {
    simpleName: "RandomAccess",
    kind: "interface",
    interfaces: [],
  }
  function Serializable() {}
  Serializable.$metadata$ = {
    simpleName: "Serializable",
    kind: "interface",
    interfaces: [],
  }
  function isNaN_0(_this_) {
    return !(_this_ === _this_)
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl
      ? _this_
      : THROW_CCE()
    )._get_jClass__2()
  }
  function KCallable() {}
  KCallable.$metadata$ = {
    simpleName: "KCallable",
    kind: "interface",
    interfaces: [],
  }
  function KClass() {}
  KClass.$metadata$ = {
    simpleName: "KClass",
    kind: "interface",
    interfaces: [KClassifier],
  }
  function KClassImpl(jClass) {
    this._jClass = jClass
  }
  KClassImpl.prototype._get_jClass__2 = function() {
    return this._jClass
  }
  KClassImpl.prototype.equals = function(other) {
    var tmp
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__2(), other._get_jClass__2())
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  KClassImpl.prototype.hashCode = function() {
    var tmp0_safe_receiver = this._get_simpleName__4()
    var tmp1_elvis_lhs =
      tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver)
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs
  }
  KClassImpl.prototype.toString = function() {
    return "" + "class " + this._get_simpleName__4()
  }
  KClassImpl.$metadata$ = {
    simpleName: "KClassImpl",
    kind: "class",
    interfaces: [KClass],
  }
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass)
    this._givenSimpleName = givenSimpleName
    this._isInstanceFunction = isInstanceFunction
  }
  PrimitiveKClassImpl.prototype.equals = function(other) {
    if (!(other instanceof PrimitiveKClassImpl)) return false
    else {
    }
    return KClassImpl.prototype.equals.call(this, other)
      ? this._givenSimpleName === other._givenSimpleName
      : false
  }
  PrimitiveKClassImpl.prototype._get_simpleName__4 = function() {
    return this._givenSimpleName
  }
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: "PrimitiveKClassImpl",
    kind: "class",
    interfaces: [],
  }
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this
    KClassImpl.call(this, Object)
    this._simpleName = "Nothing"
  }
  NothingKClassImpl.prototype._get_simpleName__4 = function() {
    return this._simpleName
  }
  NothingKClassImpl.prototype._get_jClass__2 = function() {
    throw UnsupportedOperationException_init_$Create$_0(
      "There's no native JS class for Nothing type"
    )
  }
  NothingKClassImpl.prototype.equals = function(other) {
    return other === this
  }
  NothingKClassImpl.prototype.hashCode = function() {
    return 0
  }
  NothingKClassImpl.$metadata$ = {
    simpleName: "NothingKClassImpl",
    kind: "object",
    interfaces: [],
  }
  var NothingKClassImpl_instance
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null) new NothingKClassImpl()
    return NothingKClassImpl_instance
  }
  function ErrorKClass() {}
  ErrorKClass.prototype._get_simpleName__4 = function() {
    var tmp0_error_0 = "Unknown simpleName for ErrorKClass"
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0))
  }
  ErrorKClass.prototype.equals = function(other) {
    return other === this
  }
  ErrorKClass.prototype.hashCode = function() {
    return 0
  }
  ErrorKClass.$metadata$ = {
    simpleName: "ErrorKClass",
    kind: "class",
    interfaces: [KClass],
  }
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass)
    var tmp = this
    var tmp0_safe_receiver = jClass.$metadata$
    var tmp0_unsafeCast_0 =
      tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName
    tmp._simpleName_0 = tmp0_unsafeCast_0
  }
  SimpleKClassImpl.prototype._get_simpleName__4 = function() {
    return this._simpleName_0
  }
  SimpleKClassImpl.$metadata$ = {
    simpleName: "SimpleKClassImpl",
    kind: "class",
    interfaces: [],
  }
  function KProperty1() {}
  KProperty1.$metadata$ = {
    simpleName: "KProperty1",
    kind: "interface",
    interfaces: [KProperty],
  }
  function KProperty() {}
  KProperty.$metadata$ = {
    simpleName: "KProperty",
    kind: "interface",
    interfaces: [KCallable],
  }
  var functionClasses
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this
    var tmp = this
    var tmp0_unsafeCast_0 = Object
    var tmp_0 = tmp0_unsafeCast_0
    tmp._anyClass = new PrimitiveKClassImpl(
      tmp_0,
      "Any",
      _no_name_provided_$factory_2()
    )
    var tmp_1 = this
    var tmp0_unsafeCast_0_0 = Number
    var tmp_2 = tmp0_unsafeCast_0_0
    tmp_1._numberClass = new PrimitiveKClassImpl(
      tmp_2,
      "Number",
      _no_name_provided_$factory_3()
    )
    this._nothingClass = NothingKClassImpl_getInstance()
    var tmp_3 = this
    var tmp0_unsafeCast_0_1 = Boolean
    var tmp_4 = tmp0_unsafeCast_0_1
    tmp_3._booleanClass = new PrimitiveKClassImpl(
      tmp_4,
      "Boolean",
      _no_name_provided_$factory_4()
    )
    var tmp_5 = this
    var tmp0_unsafeCast_0_2 = Number
    var tmp_6 = tmp0_unsafeCast_0_2
    tmp_5._byteClass = new PrimitiveKClassImpl(
      tmp_6,
      "Byte",
      _no_name_provided_$factory_5()
    )
    var tmp_7 = this
    var tmp0_unsafeCast_0_3 = Number
    var tmp_8 = tmp0_unsafeCast_0_3
    tmp_7._shortClass = new PrimitiveKClassImpl(
      tmp_8,
      "Short",
      _no_name_provided_$factory_6()
    )
    var tmp_9 = this
    var tmp0_unsafeCast_0_4 = Number
    var tmp_10 = tmp0_unsafeCast_0_4
    tmp_9._intClass = new PrimitiveKClassImpl(
      tmp_10,
      "Int",
      _no_name_provided_$factory_7()
    )
    var tmp_11 = this
    var tmp0_unsafeCast_0_5 = Number
    var tmp_12 = tmp0_unsafeCast_0_5
    tmp_11._floatClass = new PrimitiveKClassImpl(
      tmp_12,
      "Float",
      _no_name_provided_$factory_8()
    )
    var tmp_13 = this
    var tmp0_unsafeCast_0_6 = Number
    var tmp_14 = tmp0_unsafeCast_0_6
    tmp_13._doubleClass = new PrimitiveKClassImpl(
      tmp_14,
      "Double",
      _no_name_provided_$factory_9()
    )
    var tmp_15 = this
    var tmp0_unsafeCast_0_7 = Array
    var tmp_16 = tmp0_unsafeCast_0_7
    tmp_15._arrayClass = new PrimitiveKClassImpl(
      tmp_16,
      "Array",
      _no_name_provided_$factory_10()
    )
    var tmp_17 = this
    var tmp0_unsafeCast_0_8 = String
    var tmp_18 = tmp0_unsafeCast_0_8
    tmp_17._stringClass = new PrimitiveKClassImpl(
      tmp_18,
      "String",
      _no_name_provided_$factory_11()
    )
    var tmp_19 = this
    var tmp0_unsafeCast_0_9 = Error
    var tmp_20 = tmp0_unsafeCast_0_9
    tmp_19._throwableClass = new PrimitiveKClassImpl(
      tmp_20,
      "Throwable",
      _no_name_provided_$factory_12()
    )
    var tmp_21 = this
    var tmp0_unsafeCast_0_10 = Array
    var tmp_22 = tmp0_unsafeCast_0_10
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(
      tmp_22,
      "BooleanArray",
      _no_name_provided_$factory_13()
    )
    var tmp_23 = this
    var tmp0_unsafeCast_0_11 = Uint16Array
    var tmp_24 = tmp0_unsafeCast_0_11
    tmp_23._charArrayClass = new PrimitiveKClassImpl(
      tmp_24,
      "CharArray",
      _no_name_provided_$factory_14()
    )
    var tmp_25 = this
    var tmp0_unsafeCast_0_12 = Int8Array
    var tmp_26 = tmp0_unsafeCast_0_12
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(
      tmp_26,
      "ByteArray",
      _no_name_provided_$factory_15()
    )
    var tmp_27 = this
    var tmp0_unsafeCast_0_13 = Int16Array
    var tmp_28 = tmp0_unsafeCast_0_13
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(
      tmp_28,
      "ShortArray",
      _no_name_provided_$factory_16()
    )
    var tmp_29 = this
    var tmp0_unsafeCast_0_14 = Int32Array
    var tmp_30 = tmp0_unsafeCast_0_14
    tmp_29._intArrayClass = new PrimitiveKClassImpl(
      tmp_30,
      "IntArray",
      _no_name_provided_$factory_17()
    )
    var tmp_31 = this
    var tmp0_unsafeCast_0_15 = Array
    var tmp_32 = tmp0_unsafeCast_0_15
    tmp_31._longArrayClass = new PrimitiveKClassImpl(
      tmp_32,
      "LongArray",
      _no_name_provided_$factory_18()
    )
    var tmp_33 = this
    var tmp0_unsafeCast_0_16 = Float32Array
    var tmp_34 = tmp0_unsafeCast_0_16
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(
      tmp_34,
      "FloatArray",
      _no_name_provided_$factory_19()
    )
    var tmp_35 = this
    var tmp0_unsafeCast_0_17 = Float64Array
    var tmp_36 = tmp0_unsafeCast_0_17
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(
      tmp_36,
      "DoubleArray",
      _no_name_provided_$factory_20()
    )
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function() {
    return this._anyClass
  }
  PrimitiveClasses_0.prototype._get_numberClass_ = function() {
    return this._numberClass
  }
  PrimitiveClasses_0.prototype._get_nothingClass_ = function() {
    return this._nothingClass
  }
  PrimitiveClasses_0.prototype._get_booleanClass_ = function() {
    return this._booleanClass
  }
  PrimitiveClasses_0.prototype._get_byteClass_ = function() {
    return this._byteClass
  }
  PrimitiveClasses_0.prototype._get_shortClass_ = function() {
    return this._shortClass
  }
  PrimitiveClasses_0.prototype._get_intClass_ = function() {
    return this._intClass
  }
  PrimitiveClasses_0.prototype._get_floatClass_ = function() {
    return this._floatClass
  }
  PrimitiveClasses_0.prototype._get_doubleClass_ = function() {
    return this._doubleClass
  }
  PrimitiveClasses_0.prototype._get_arrayClass_ = function() {
    return this._arrayClass
  }
  PrimitiveClasses_0.prototype._get_stringClass_ = function() {
    return this._stringClass
  }
  PrimitiveClasses_0.prototype._get_throwableClass_ = function() {
    return this._throwableClass
  }
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function() {
    return this._booleanArrayClass
  }
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function() {
    return this._charArrayClass
  }
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function() {
    return this._byteArrayClass
  }
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function() {
    return this._shortArrayClass
  }
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function() {
    return this._intArrayClass
  }
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function() {
    return this._longArrayClass
  }
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function() {
    return this._floatArrayClass
  }
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function() {
    return this._doubleArrayClass
  }
  PrimitiveClasses_0.prototype.functionClass = function(arity) {
    var tmp0_elvis_lhs = functionClasses[arity]
    var tmp
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function
      var tmp_0 = tmp0_unsafeCast_0_3
      var tmp_1 = "" + "Function" + arity
      var result_2 = new PrimitiveKClassImpl(
        tmp_0,
        tmp_1,
        _no_name_provided_$factory_21(arity)
      )
      var tmp1_asDynamic_0_5 = functionClasses
      tmp1_asDynamic_0_5[arity] = result_2
      tmp = result_2
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  PrimitiveClasses_0.$metadata$ = {
    simpleName: "PrimitiveClasses",
    kind: "object",
    interfaces: [],
  }
  Object.defineProperty(PrimitiveClasses_0.prototype, "anyClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "numberClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "nothingClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "booleanClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "byteClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "shortClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "intClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "floatClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "doubleClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "arrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "stringClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "throwableClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "booleanArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "charArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "byteArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "shortArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "intArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "longArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "floatArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_,
  })
  Object.defineProperty(PrimitiveClasses_0.prototype, "doubleArrayClass", {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_,
  })
  var PrimitiveClasses_instance
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null) new PrimitiveClasses_0()
    return PrimitiveClasses_instance
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__7()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__8()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__9()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__10()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__11()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__12()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__13()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__14()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__15()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__16()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__17()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__18()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__19()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__20()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__21()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__22()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__23()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__24()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__25()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function _no_name_provided_$factory_21($arity) {
    var i = new _no_name_provided__26($arity)
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null)
  }
  function _no_name_provided__7() {}
  _no_name_provided__7.prototype.invoke_44 = function(it) {
    return isObject(it)
  }
  _no_name_provided__7.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__7.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__8() {}
  _no_name_provided__8.prototype.invoke_44 = function(it) {
    return isNumber(it)
  }
  _no_name_provided__8.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__8.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__9() {}
  _no_name_provided__9.prototype.invoke_44 = function(it) {
    return !(it == null) ? typeof it === "boolean" : false
  }
  _no_name_provided__9.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__9.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__10() {}
  _no_name_provided__10.prototype.invoke_44 = function(it) {
    return !(it == null) ? typeof it === "number" : false
  }
  _no_name_provided__10.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__10.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__11() {}
  _no_name_provided__11.prototype.invoke_44 = function(it) {
    return !(it == null) ? typeof it === "number" : false
  }
  _no_name_provided__11.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__11.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__12() {}
  _no_name_provided__12.prototype.invoke_44 = function(it) {
    return !(it == null) ? typeof it === "number" : false
  }
  _no_name_provided__12.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__12.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__13() {}
  _no_name_provided__13.prototype.invoke_44 = function(it) {
    return !(it == null) ? typeof it === "number" : false
  }
  _no_name_provided__13.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__13.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__14() {}
  _no_name_provided__14.prototype.invoke_44 = function(it) {
    return !(it == null) ? typeof it === "number" : false
  }
  _no_name_provided__14.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__14.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__15() {}
  _no_name_provided__15.prototype.invoke_44 = function(it) {
    return !(it == null) ? isArray(it) : false
  }
  _no_name_provided__15.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__15.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__16() {}
  _no_name_provided__16.prototype.invoke_44 = function(it) {
    return !(it == null) ? typeof it === "string" : false
  }
  _no_name_provided__16.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__16.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__17() {}
  _no_name_provided__17.prototype.invoke_44 = function(it) {
    return it instanceof Error
  }
  _no_name_provided__17.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__17.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__18() {}
  _no_name_provided__18.prototype.invoke_44 = function(it) {
    return !(it == null) ? isBooleanArray(it) : false
  }
  _no_name_provided__18.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__18.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__19() {}
  _no_name_provided__19.prototype.invoke_44 = function(it) {
    return !(it == null) ? isCharArray(it) : false
  }
  _no_name_provided__19.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__19.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__20() {}
  _no_name_provided__20.prototype.invoke_44 = function(it) {
    return !(it == null) ? isByteArray(it) : false
  }
  _no_name_provided__20.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__20.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__21() {}
  _no_name_provided__21.prototype.invoke_44 = function(it) {
    return !(it == null) ? isShortArray(it) : false
  }
  _no_name_provided__21.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__21.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__22() {}
  _no_name_provided__22.prototype.invoke_44 = function(it) {
    return !(it == null) ? isIntArray(it) : false
  }
  _no_name_provided__22.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__22.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__23() {}
  _no_name_provided__23.prototype.invoke_44 = function(it) {
    return !(it == null) ? isLongArray(it) : false
  }
  _no_name_provided__23.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__23.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__24() {}
  _no_name_provided__24.prototype.invoke_44 = function(it) {
    return !(it == null) ? isFloatArray(it) : false
  }
  _no_name_provided__24.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__24.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__25() {}
  _no_name_provided__25.prototype.invoke_44 = function(it) {
    return !(it == null) ? isDoubleArray(it) : false
  }
  _no_name_provided__25.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__25.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__26($arity) {
    this._$arity = $arity
  }
  _no_name_provided__26.prototype.invoke_44 = function(it) {
    var tmp
    if (typeof it === "function") {
      tmp = it.length === this._$arity
    } else {
      tmp = false
    }
    return tmp
  }
  _no_name_provided__26.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__26.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function getKClass_0(jClass) {
    var tmp
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass)
    } else {
      tmp = getKClass1_0(jClass)
    }
    return tmp
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length
    var tmp
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0])
        break
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance()
        tmp = tmp0_unsafeCast_0
        break
      default:
        var tmp1_unsafeCast_0 = new ErrorKClass()
        tmp = tmp1_unsafeCast_0
        break
    }
    return tmp
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass
      return tmp0_unsafeCast_0
    }
    var metadata = jClass.$metadata$
    var tmp
    if (metadata != null) {
      var tmp_0
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass)
        metadata.$kClass$ = kClass
        tmp_0 = kClass
      } else {
        tmp_0 = metadata.$kClass$
      }
      tmp = tmp_0
    } else {
      tmp = new SimpleKClassImpl(jClass)
    }
    return tmp
  }
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e
    var tmp
    switch (tmp0_subject) {
      case "string":
        tmp = PrimitiveClasses_getInstance()._stringClass
        break
      case "number":
        var tmp_0
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0)
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass
          }
        }

        tmp = tmp_0
        break
      case "boolean":
        tmp = PrimitiveClasses_getInstance()._booleanClass
        break
      case "function":
        var tmp_1 = PrimitiveClasses_getInstance()
        tmp = tmp_1.functionClass(e.length)
        break
      default:
        var tmp_2
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass)
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e)
                                .constructor
                              var tmp_3
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()
                                  ._throwableClass
                              } else {
                                var jsClass_0 = constructor
                                tmp_3 = getKClass1_0(jsClass_0)
                              }
                              tmp_2 = tmp_3
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2
        break
    }
    var tmp1_unsafeCast_0 = tmp
    return tmp1_unsafeCast_0
  }
  function Appendable() {}
  Appendable.$metadata$ = {
    simpleName: "Appendable",
    kind: "interface",
    interfaces: [],
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : ""
  }
  StringBuilder.prototype._get_length__0 = function() {
    var tmp0_asDynamic_0 = this._string
    return tmp0_asDynamic_0.length
  }
  StringBuilder.prototype.get_27 = function(index) {
    var tmp0_getOrElse_0 = this._string
    var tmp
    if (index >= 0 ? index <= _get_lastIndex__1(tmp0_getOrElse_0) : false) {
      tmp = charSequenceGet(tmp0_getOrElse_0, index)
    } else {
      throw IndexOutOfBoundsException_init_$Create$(
        "" + "index: " + index + ", length: " + this._get_length__0() + "}"
      )
    }
    return tmp
  }
  StringBuilder.prototype.append_2 = function(value) {
    var tmp0_this = this
    tmp0_this._string = tmp0_this._string + value
    return this
  }
  StringBuilder.prototype.append_3 = function(value) {
    var tmp0_this = this
    tmp0_this._string = tmp0_this._string + toString_0(value)
    return this
  }
  StringBuilder.prototype.append_4 = function(value, startIndex, endIndex) {
    var tmp0_elvis_lhs = value
    return this.appendRange(
      tmp0_elvis_lhs == null ? "null" : tmp0_elvis_lhs,
      startIndex,
      endIndex
    )
  }
  StringBuilder.prototype.append_5 = function(value) {
    var tmp0_this = this
    var tmp = tmp0_this
    var tmp_0 = tmp0_this._string
    var tmp1_elvis_lhs = value
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? "null" : tmp1_elvis_lhs)
    return this
  }
  StringBuilder.prototype.toString = function() {
    return this._string
  }
  StringBuilder.prototype.appendRange = function(value, startIndex, endIndex) {
    var stringCsq = toString_1(value)
    Companion_getInstance().checkBoundsIndexes(
      startIndex,
      endIndex,
      stringCsq.length
    )
    var tmp0_this = this
    var tmp = tmp0_this
    var tmp_0 = tmp0_this._string
    tmp._string = tmp_0 + stringCsq.substring(startIndex, endIndex)
    return this
  }
  StringBuilder.$metadata$ = {
    simpleName: "StringBuilder",
    kind: "class",
    interfaces: [Appendable, CharSequence],
  }
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, "")
    return $this
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype))
  }
  function checkRadix(radix) {
    if (!numberRangeToNumber(2, 36).contains_7(radix)) {
      throw IllegalArgumentException_init_$Create$(
        "" + "radix " + radix + " was not in valid range 2..36"
      )
    }
    return radix
  }
  function digitOf(char, radix) {
    var tmp0_let_0 = (char.compareTo(new Char(48)) >= 0
    ? char.compareTo(new Char(57)) <= 0
    : false)
      ? char.minus(new Char(48))
      : (char.compareTo(new Char(65)) >= 0
        ? char.compareTo(new Char(90)) <= 0
        : false)
      ? (char.minus(new Char(65)) + 10) | 0
      : (char.compareTo(new Char(97)) >= 0
        ? char.compareTo(new Char(122)) <= 0
        : false)
      ? (char.minus(new Char(97)) + 10) | 0
      : -1
    return tmp0_let_0 >= radix ? -1 : tmp0_let_0
  }
  function toByte(_this_) {
    var tmp0_elvis_lhs = toByteOrNull(_this_)
    var tmp
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_)
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  function toShort(_this_) {
    var tmp0_elvis_lhs = toShortOrNull(_this_)
    var tmp
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_)
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  function toInt(_this_) {
    var tmp0_elvis_lhs = toIntOrNull(_this_)
    var tmp
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_)
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  function toLong(_this_) {
    var tmp0_elvis_lhs = toLongOrNull(_this_)
    var tmp
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_)
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  function toDouble(_this_) {
    var tmp0_unsafeCast_0 = +_this_
    var tmp1_also_0 = tmp0_unsafeCast_0
    if (
      (isNaN_0(tmp1_also_0)
      ? !isNaN_1(_this_)
      : false)
        ? true
        : tmp1_also_0 === 0.0
        ? isBlank(_this_)
        : false
    ) {
      numberFormatError(_this_)
    }
    return tmp1_also_0
  }
  function isNaN_1(_this_) {
    var tmp0_subject = _this_.toLowerCase()
    switch (tmp0_subject) {
      case "nan":
      case "+nan":
      case "-nan":
        return true
      default:
        return false
    }
  }
  function concatToString(_this_, startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes(
      startIndex,
      endIndex,
      _this_.length
    )
    var result = ""
    var inductionVariable = startIndex
    var last_0 = (endIndex - 1) | 0
    if (!(endIndex === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var index = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        result = result + _this_[index]
      } while (inductionVariable <= last_0)
    return result
  }
  function isBlank(_this_) {
    var tmp
    if (charSequenceLength(_this_) === 0) {
      tmp = true
    } else {
      var tmp_0
      if (typeof _this_ === "string") {
        tmp_0 = _this_
      } else {
        {
          tmp_0 = toString_1(_this_)
        }
      }
      tmp = matches(tmp_0, "^[\\s\\xA0]+$")
    }
    return tmp
  }
  function matches(_this_, regex) {
    var result = _this_.match(regex)
    return !(result == null) ? !(result.length === 0) : false
  }
  function equals(_this_, other, ignoreCase) {
    var tmp
    if (_this_ == null) {
      tmp = other == null
    } else if (!ignoreCase) {
      tmp = _this_ == other
    } else {
      var tmp_0
      if (!(other == null)) {
        var tmp_1 = _this_.toLowerCase()
        tmp_0 = tmp_1 === other.toLowerCase()
      } else {
        tmp_0 = false
      }
      tmp = tmp_0
    }
    return tmp
  }
  function Char(value) {
    this._value_0 = value
  }
  Char.prototype.compareTo = function(other) {
    return (this._value_0 - other._value_0) | 0
  }
  Char.prototype.minus = function(other) {
    return (this._value_0 - other._value_0) | 0
  }
  Char.prototype.rangeTo = function(other) {
    return new CharRange(this, other)
  }
  Char.prototype.toInt_5 = function() {
    return this._value_0
  }
  Char.prototype.equals = function(other) {
    if (other === this) return true
    if (!(other instanceof Char)) return false
    else {
    }
    return this._value_0 === other._value_0
  }
  Char.prototype.hashCode = function() {
    return this._value_0
  }
  Char.prototype.toString = function() {
    var tmp0_unsafeCast_0 = String.fromCharCode(this._value_0)
    return tmp0_unsafeCast_0
  }
  Char.$metadata$ = {
    simpleName: "Char",
    kind: "class",
    interfaces: [Comparable],
  }
  function Companion_4() {
    Companion_instance_3 = this
    this._MIN_VALUE_4 = new Char(0)
    this._MAX_VALUE_4 = new Char(65535)
    this._MIN_HIGH_SURROGATE = new Char(55296)
    this._MAX_HIGH_SURROGATE = new Char(56319)
    this._MIN_LOW_SURROGATE = new Char(56320)
    this._MAX_LOW_SURROGATE = new Char(57343)
    this._MIN_SURROGATE = new Char(55296)
    this._MAX_SURROGATE = new Char(57343)
    this._SIZE_BYTES_4 = 2
    this._SIZE_BITS_4 = 16
  }
  Companion_4.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_3
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null) new Companion_4()
    return Companion_instance_3
  }
  function Iterable() {}
  Iterable.$metadata$ = {
    simpleName: "Iterable",
    kind: "interface",
    interfaces: [],
  }
  function Map_0() {}
  Map_0.$metadata$ = {
    simpleName: "Map",
    kind: "interface",
    interfaces: [],
  }
  function List() {}
  List.$metadata$ = {
    simpleName: "List",
    kind: "interface",
    interfaces: [Collection],
  }
  function Set() {}
  Set.$metadata$ = {
    simpleName: "Set",
    kind: "interface",
    interfaces: [Collection],
  }
  function MutableMap() {}
  MutableMap.$metadata$ = {
    simpleName: "MutableMap",
    kind: "interface",
    interfaces: [Map_0],
  }
  function MutableList() {}
  MutableList.$metadata$ = {
    simpleName: "MutableList",
    kind: "interface",
    interfaces: [List, MutableCollection],
  }
  function MutableSet() {}
  MutableSet.$metadata$ = {
    simpleName: "MutableSet",
    kind: "interface",
    interfaces: [Set, MutableCollection],
  }
  function Collection() {}
  Collection.$metadata$ = {
    simpleName: "Collection",
    kind: "interface",
    interfaces: [Iterable],
  }
  function MutableCollection() {}
  MutableCollection.$metadata$ = {
    simpleName: "MutableCollection",
    kind: "interface",
    interfaces: [Collection, MutableIterable],
  }
  function MutableIterable() {}
  MutableIterable.$metadata$ = {
    simpleName: "MutableIterable",
    kind: "interface",
    interfaces: [Iterable],
  }
  function Entry() {}
  Entry.$metadata$ = {
    simpleName: "Entry",
    kind: "interface",
    interfaces: [],
  }
  function MutableEntry() {}
  MutableEntry.$metadata$ = {
    simpleName: "MutableEntry",
    kind: "interface",
    interfaces: [Entry],
  }
  function Enum(name, ordinal) {
    this._name = name
    this._ordinal = ordinal
  }
  Enum.prototype.equals = function(other) {
    return this === other
  }
  Enum.prototype.hashCode = function() {
    return identityHashCode(this)
  }
  Enum.prototype.toString = function() {
    return this._name
  }
  Enum.$metadata$ = {
    simpleName: "Enum",
    kind: "class",
    interfaces: [Comparable],
  }
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_
    var tmp1_elvis_lhs =
      tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver)
    return tmp1_elvis_lhs == null ? "null" : tmp1_elvis_lhs
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0
    var last_0 = (array.length - 1) | 0
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        array[i] = initValue
      } while (!(i === last_0))
    return array
  }
  function arrayIterator(array) {
    return new _no_name_provided__27(array)
  }
  function booleanArray(size) {
    var tmp0_withType_0 = "BooleanArray"
    var tmp1_withType_0 = fillArrayVal(Array(size), false)
    tmp1_withType_0.$type$ = tmp0_withType_0
    var tmp2_unsafeCast_0 = tmp1_withType_0
    return tmp2_unsafeCast_0
  }
  function charArray(size) {
    var tmp0_withType_0 = "CharArray"
    var tmp1_withType_0 = fillArrayVal(Array(size), new Char(0))
    tmp1_withType_0.$type$ = tmp0_withType_0
    var tmp2_unsafeCast_0 = tmp1_withType_0
    return tmp2_unsafeCast_0
  }
  function _no_name_provided__27($array) {
    this._$array = $array
    this._index_2 = 0
  }
  _no_name_provided__27.prototype.hasNext_14 = function() {
    return !(this._index_2 === this._$array.length)
  }
  _no_name_provided__27.prototype.next_14 = function() {
    var tmp
    if (!(this._index_2 === this._$array.length)) {
      var tmp0_this = this
      var tmp1 = tmp0_this._index_2
      tmp0_this._index_2 = (tmp1 + 1) | 0
      tmp = this._$array[tmp1]
    } else {
      throw NoSuchElementException_init_$Create$_0("" + this._index_2)
    }
    return tmp
  }
  _no_name_provided__27.$metadata$ = {
    kind: "class",
    interfaces: [Iterator],
  }
  var buf
  var bufFloat64
  var bufInt32
  var lowIndex
  var highIndex
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0)
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj)
    } else {
    }
    bufFloat64[0] = obj
    return (imul(bufInt32[highIndex], 31) + bufInt32[lowIndex]) | 0
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf)
    return tmp0_unsafeCast_0
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf)
    return tmp0_unsafeCast_0
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0
    return !(bufInt32[0] === 0) ? 1 : 0
  }
  function charSequenceGet(a, index) {
    var tmp
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.charCodeAt(index)
      tmp = new Char(tmp0_unsafeCast_0)
    } else {
      tmp = a.get_27(index)
    }
    return tmp
  }
  function isString(a) {
    return typeof a === "string"
  }
  function charSequenceLength(a) {
    var tmp
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.length
      tmp = tmp0_unsafeCast_0
    } else {
      tmp = a._get_length__0()
    }
    return tmp
  }
  function arrayToString(array) {
    return joinToString$default(
      array,
      ", ",
      "[",
      "]",
      0,
      null,
      _no_name_provided_$factory_22(),
      24,
      null
    )
  }
  function contentEqualsInternal(_this_, other) {
    var a = _this_
    var b = other
    if (a === b) return true
    if (
      ((a == null
      ? true
      : b == null)
      ? true
      : !isArrayish(b))
        ? true
        : a.length != b.length
    )
      return false
    var untilArg = a.length
    var inductionVariable = 0
    var last_0 = (untilArg - 1) | 0
    if (!(untilArg === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        if (!equals_0(a[i], b[i])) {
          return false
        }
      } while (inductionVariable <= last_0)
    return true
  }
  function contentHashCodeInternal(_this_) {
    var a = _this_
    if (a == null) return 0
    var result = 1
    var untilArg = a.length
    var inductionVariable = 0
    var last_0 = (untilArg - 1) | 0
    if (!(untilArg === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        result = (imul(result, 31) + hashCode(a[i])) | 0
      } while (inductionVariable <= last_0)
    return result
  }
  function _no_name_provided__28() {}
  _no_name_provided__28.prototype.invoke_44 = function(it) {
    return toString_1(it)
  }
  _no_name_provided__28.prototype.invoke_66 = function(p1) {
    return this.invoke_44((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE())
  }
  _no_name_provided__28.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__28()
    return function(p1) {
      return i.invoke_44(p1)
    }
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj)
  }
  function getObjectHashCode(obj) {
    if (!jsIn("kotlinHashCodeValue$", obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296e9, 0)
      var descriptor = new Object()
      descriptor.value = hash
      descriptor.enumerable = false
      Object.defineProperty(obj, "kotlinHashCodeValue$", descriptor)
    }
    var tmp0_unsafeCast_0 = obj["kotlinHashCodeValue$"]
    return tmp0_unsafeCast_0
  }
  function toString_1(o) {
    var tmp
    if (o == null) {
      tmp = "null"
    } else if (isArrayish(o)) {
      tmp = "[...]"
    } else {
      var tmp0_unsafeCast_0 = o.toString()
      tmp = tmp0_unsafeCast_0
    }
    return tmp
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null
    }
    if (obj2 == null) {
      return false
    }
    if (typeof obj1 === "object" ? typeof obj1.equals === "function" : false) {
      return obj1.equals(obj2)
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2
    }
    if (typeof obj1 === "number" ? typeof obj2 === "number" : false) {
      var tmp
      if (obj1 === obj2) {
        var tmp_0
        if (obj1 !== 0) {
          tmp_0 = true
        } else {
          var tmp0_asDynamic_0 = 1
          var tmp_1 = tmp0_asDynamic_0 / obj1
          var tmp1_asDynamic_0 = 1
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2
        }
        tmp = tmp_0
      } else {
        tmp = false
      }
      return tmp
    }
    return obj1 === obj2
  }
  function hashCode(obj) {
    if (obj == null) return 0
    var tmp0_subject = typeof obj
    var tmp
    switch (tmp0_subject) {
      case "object":
        tmp =
          "function" === typeof obj.hashCode
            ? obj.hashCode()
            : getObjectHashCode(obj)
        break
      case "function":
        tmp = getObjectHashCode(obj)
        break
      case "number":
        tmp = getNumberHashCode(obj)
        break
      case "boolean":
        var tmp_0
        if (obj) {
          tmp_0 = 1
        } else {
          {
            tmp_0 = 0
          }
        }

        tmp = tmp_0
        break
      default:
        tmp = getStringHashCode(String(obj))
        break
    }
    return tmp
  }
  function getStringHashCode(str) {
    var hash = 0
    var length = str.length
    var inductionVariable = 0
    var last_0 = (length - 1) | 0
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var code = str.charCodeAt(i)
        hash = (imul(hash, 31) + code) | 0
      } while (!(i === last_0))
    return hash
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction)
    } else {
      instance.stack = new Error().stack
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_)
    setPropertiesToThrowableInstance(this_, message, cause)
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, "message")) {
      var tmp1_elvis_lhs = message
      var tmp
      if (tmp1_elvis_lhs == null) {
        var tmp0_safe_receiver = cause
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()
      } else {
        tmp = tmp1_elvis_lhs
      }
      var tmp2_elvis_lhs = tmp
      this_.message = tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs
    }
    if (!hasOwnPrototypeProperty(this_, "cause")) {
      this_.cause = cause
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name)
    return tmp0_unsafeCast_0
  }
  function ensureNotNull(v) {
    var tmp
    if (v == null) {
      THROW_NPE()
    } else {
      tmp = v
    }
    return tmp
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$()
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$()
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$(
      "" + "lateinit property " + name + " has not been initialized"
    )
  }
  function lazy(initializer) {
    return new UnsafeLazyImpl(initializer)
  }
  function fillFrom(src, dst) {
    var srcLen = src.length
    var dstLen = dst.length
    var index = 0
    var arr = dst
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index
      var tmp0 = index
      index = (tmp0 + 1) | 0
      arr[tmp] = src[tmp0]
    }
    return dst
  }
  function Long(low, high) {
    Number_0.call(this)
    this._low = low
    this._high = high
  }
  Long.prototype.compareTo_29 = function(other) {
    return compare(this, other)
  }
  Long.prototype.plus_27 = function(other) {
    return add(this, other)
  }
  Long.prototype.minus_28 = function(other) {
    return subtract(this, other)
  }
  Long.prototype.times_27 = function(other) {
    return multiply(this, other)
  }
  Long.prototype.div_27 = function(other) {
    return divide(this, other)
  }
  Long.prototype.unaryMinus_4 = function() {
    return this.inv_0().plus_27(new Long(1, 0))
  }
  Long.prototype.inv_0 = function() {
    return new Long(~this._low, ~this._high)
  }
  Long.prototype.toInt_5 = function() {
    return this._low
  }
  Long.prototype.toDouble_4 = function() {
    return toNumber(this)
  }
  Long.prototype.valueOf = function() {
    return this.toDouble_4()
  }
  Long.prototype.equals = function(other) {
    var tmp
    if (other instanceof Long) {
      tmp = equalsLong(this, other)
    } else {
      {
        tmp = false
      }
    }
    return tmp
  }
  Long.prototype.hashCode = function() {
    return hashCode_0(this)
  }
  Long.prototype.toString = function() {
    return toStringImpl(this, 10)
  }
  Long.$metadata$ = {
    simpleName: "Long",
    kind: "class",
    interfaces: [Comparable],
  }
  function Companion_5() {
    Companion_instance_4 = this
    this._MIN_VALUE_5 = new Long(0, -2147483648)
    this._MAX_VALUE_5 = new Long(-1, 2147483647)
    this._SIZE_BYTES_5 = 8
    this._SIZE_BITS_5 = 64
  }
  Companion_5.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_4
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null) new Companion_5()
    return Companion_instance_4
  }
  var ZERO
  var ONE
  var NEG_ONE
  var MAX_VALUE
  var MIN_VALUE
  var TWO_PWR_24_
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0
    }
    var thisNeg = isNegative(_this_)
    var otherNeg = isNegative(other)
    return (thisNeg
    ? !otherNeg
    : false)
      ? -1
      : (!thisNeg
        ? otherNeg
        : false)
      ? 1
      : isNegative(subtract(_this_, other))
      ? -1
      : 1
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16
    var a32 = _this_._high & 65535
    var a16 = _this_._low >>> 16
    var a00 = _this_._low & 65535
    var b48 = other._high >>> 16
    var b32 = other._high & 65535
    var b16 = other._low >>> 16
    var b00 = other._low & 65535
    var c48 = 0
    var c32 = 0
    var c16 = 0
    var c00 = 0
    c00 = (c00 + ((a00 + b00) | 0)) | 0
    c16 = (c16 + (c00 >>> 16)) | 0
    c00 = c00 & 65535
    c16 = (c16 + ((a16 + b16) | 0)) | 0
    c32 = (c32 + (c16 >>> 16)) | 0
    c16 = c16 & 65535
    c32 = (c32 + ((a32 + b32) | 0)) | 0
    c48 = (c48 + (c32 >>> 16)) | 0
    c32 = c32 & 65535
    c48 = (c48 + ((a48 + b48) | 0)) | 0
    c48 = c48 & 65535
    return new Long((c16 << 16) | c00, (c48 << 16) | c32)
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_4())
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO
    } else if (isZero(other)) {
      return ZERO
    }
    if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO
    }
    if (isNegative(_this_)) {
      var tmp
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other))
      } else {
        tmp = negate(multiply(negate(_this_), other))
      }
      return tmp
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)))
    }
    if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other))
    }
    var a48 = _this_._high >>> 16
    var a32 = _this_._high & 65535
    var a16 = _this_._low >>> 16
    var a00 = _this_._low & 65535
    var b48 = other._high >>> 16
    var b32 = other._high & 65535
    var b16 = other._low >>> 16
    var b00 = other._low & 65535
    var c48 = 0
    var c32 = 0
    var c16 = 0
    var c00 = 0
    c00 = (c00 + imul(a00, b00)) | 0
    c16 = (c16 + (c00 >>> 16)) | 0
    c00 = c00 & 65535
    c16 = (c16 + imul(a16, b00)) | 0
    c32 = (c32 + (c16 >>> 16)) | 0
    c16 = c16 & 65535
    c16 = (c16 + imul(a00, b16)) | 0
    c32 = (c32 + (c16 >>> 16)) | 0
    c16 = c16 & 65535
    c32 = (c32 + imul(a32, b00)) | 0
    c48 = (c48 + (c32 >>> 16)) | 0
    c32 = c32 & 65535
    c32 = (c32 + imul(a16, b16)) | 0
    c48 = (c48 + (c32 >>> 16)) | 0
    c32 = c32 & 65535
    c32 = (c32 + imul(a00, b32)) | 0
    c48 = (c48 + (c32 >>> 16)) | 0
    c32 = c32 & 65535
    c48 =
      (c48 +
        ((((((imul(a48, b00) + imul(a32, b16)) | 0) + imul(a16, b32)) | 0) +
          imul(a00, b48)) |
          0)) |
      0
    c48 = c48 & 65535
    return new Long((c16 << 16) | c00, (c48 << 16) | c32)
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$("division by zero")
    } else if (isZero(_this_)) {
      return ZERO
    }
    if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE
      } else {
        var halfThis = shiftRight(_this_, 1)
        var approx = shiftLeft(halfThis.div_27(other), 1)
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE
        } else {
          var rem = subtract(_this_, multiply(other, approx))
          return add(approx, rem.div_27(other))
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO
    }
    if (isNegative(_this_)) {
      var tmp
      if (isNegative(other)) {
        tmp = negate(_this_).div_27(negate(other))
      } else {
        tmp = negate(negate(_this_).div_27(other))
      }
      return tmp
    } else if (isNegative(other)) {
      return negate(_this_.div_27(negate(other)))
    }
    var res = ZERO
    var rem_0 = _this_
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other)
      var approx2 = Math.max(1.0, Math.floor(approxDouble))
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2)
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2, log2 - 48)
      var approxRes = fromNumber(approx2)
      var approxRem = multiply(approxRes, other)
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta
        approxRes = fromNumber(approx2)
        approxRem = multiply(approxRes, other)
      }
      if (isZero(approxRes)) {
        approxRes = ONE
      }
      res = add(res, approxRes)
      rem_0 = subtract(rem_0, approxRem)
    }
    return res
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63
    if (numBits_0 === 0) {
      return _this_
    } else {
      if (numBits_0 < 32) {
        return new Long(
          _this_._low << numBits_0,
          (_this_._high << numBits_0) | (_this_._low >>> ((32 - numBits_0) | 0))
        )
      } else {
        return new Long(0, _this_._low << ((numBits_0 - 32) | 0))
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63
    if (numBits_0 === 0) {
      return _this_
    } else {
      if (numBits_0 < 32) {
        return new Long(
          (_this_._low >>> numBits_0) |
            (_this_._high << ((32 - numBits_0) | 0)),
          _this_._high >> numBits_0
        )
      } else {
        return new Long(
          _this_._high >> ((numBits_0 - 32) | 0),
          _this_._high >= 0 ? 0 : -1
        )
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296e9 + getLowBitsUnsigned(_this_)
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false
  }
  function hashCode_0(l) {
    return l._low ^ l._high
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$("" + "radix out of range: " + radix)
    }
    if (isZero(_this_)) {
      return "0"
    }
    if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix)
        var div = _this_.div_27(radixLong)
        var rem = subtract(multiply(div, radixLong), _this_).toInt_5()
        var tmp = toStringImpl(div, radix)
        var tmp0_unsafeCast_0 = rem.toString(radix)
        return tmp + tmp0_unsafeCast_0
      } else {
        return "" + "-" + toStringImpl(negate(_this_), radix)
      }
    }
    var radixToPower = fromNumber(Math.pow(radix, 6.0))
    var rem_0 = _this_
    var result = ""
    while (true) {
      var remDiv = rem_0.div_27(radixToPower)
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_5()
      var tmp1_unsafeCast_0 = intval.toString(radix)
      var digits = tmp1_unsafeCast_0
      rem_0 = remDiv
      if (isZero(rem_0)) {
        return digits + result
      } else {
        while (digits.length < 6) {
          digits = "0" + digits
        }
        result = digits + result
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0)
  }
  function isNegative(_this_) {
    return _this_._high < 0
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1
  }
  function negate(_this_) {
    return _this_.unaryMinus_4()
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO
    } else if (value <= -9.223372036854776e18) {
      return MIN_VALUE
    } else if (value + 1 >= 9.223372036854776e18) {
      return MAX_VALUE
    } else if (value < 0.0) {
      return negate(fromNumber(-value))
    } else {
      var twoPwr32 = 4.294967296e9
      return new Long(
        jsBitwiseOr(value % twoPwr32, 0),
        jsBitwiseOr(value / twoPwr32, 0)
      )
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296e9 + _this_._low
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176e9) * jsBitwiseAnd(b_local, 65535)
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local
    return jsBitwiseOr(lhs + rhs, 0)
  }
  function toByte_0(a) {
    var tmp0_unsafeCast_0 = (a << 24) >> 24
    return tmp0_unsafeCast_0
  }
  function numberToInt(a) {
    var tmp
    if (a instanceof Long) {
      tmp = a.toInt_5()
    } else {
      {
        tmp = doubleToInt(a)
      }
    }
    return tmp
  }
  function doubleToInt(a) {
    return a > 2.147483647e9
      ? 2147483647
      : a < -2.147483648e9
      ? -2147483648
      : jsBitwiseOr(a, 0)
  }
  function toShort_0(a) {
    var tmp0_unsafeCast_0 = (a << 16) >> 16
    return tmp0_unsafeCast_0
  }
  function numberToChar(a) {
    return new Char(numberToInt(a) & 65535)
  }
  function toLong_0(a) {
    return fromInt(a)
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive)
  }
  var propertyRefClassMetadataCache
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    getter.get = getter
    getter.set = setter
    getter.callableName = name
    var tmp0_unsafeCast_0 = getPropertyRefClass(
      getter,
      getKPropMetadata(paramCount, setter, type)
    )
    return tmp0_unsafeCast_0
  }
  function getPropertyRefClass(obj, metadata) {
    obj.$metadata$ = metadata
    obj.constructor = obj
    return obj
  }
  function getKPropMetadata(paramCount, setter, type) {
    var mdata =
      propertyRefClassMetadataCache[paramCount][setter == null ? 0 : 1]
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type)
    }
    return mdata
  }
  function propertyRefClassMetadataCache$init$() {
    var tmp = { kind: "class", interfaces: [] }
    var tmp0_arrayOf_0 = [tmp, { kind: "class", interfaces: [] }]
    var tmp_0 = tmp0_arrayOf_0
    var tmp_1 = { kind: "class", interfaces: [] }
    var tmp1_arrayOf_0 = [tmp_1, { kind: "class", interfaces: [] }]
    var tmp_2 = tmp1_arrayOf_0
    var tmp_3 = { kind: "class", interfaces: [] }
    var tmp2_arrayOf_0 = [tmp_3, { kind: "class", interfaces: [] }]
    var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp2_arrayOf_0]
    return tmp3_arrayOf_0
  }
  function isArrayish(o) {
    var tmp
    if (isJsArray(o)) {
      tmp = true
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o)
      tmp = tmp0_unsafeCast_0
    }
    return tmp
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj)
    return tmp0_unsafeCast_0
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor
    var tmp
    if (tmp0_elvis_lhs == null) {
      return false
    } else {
      tmp = tmp0_elvis_lhs
    }
    var ctor = tmp
    return isInterfaceImpl(ctor, iface)
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface) return true
    var metadata = ctor.$metadata$
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces
      var indexedObject = interfaces
      var inductionVariable = 0
      var last_0 = indexedObject.length
      while (inductionVariable < last_0) {
        var i = indexedObject[inductionVariable]
        inductionVariable = (inductionVariable + 1) | 0
        if (isInterfaceImpl(i, iface)) {
          return true
        }
      }
    }
    var superPrototype = !(ctor.prototype == null)
      ? Object.getPrototypeOf(ctor.prototype)
      : null
    var superConstructor =
      superPrototype != null ? superPrototype.constructor : null
    return !(superConstructor == null)
      ? isInterfaceImpl(superConstructor, iface)
      : false
  }
  function isArray(obj) {
    var tmp
    if (isJsArray(obj)) {
      tmp = !obj.$type$
    } else {
      tmp = false
    }
    return tmp
  }
  function isObject(obj) {
    var objTypeOf = typeof obj
    var tmp0_subject = objTypeOf
    switch (tmp0_subject) {
      case "string":
        return true
      case "number":
        return true
      case "boolean":
        return true
      case "function":
        return true
      default:
        return jsInstanceOf(obj, Object)
    }
  }
  function isNumber(a) {
    var tmp
    if (typeof a === "number") {
      tmp = true
    } else {
      tmp = a instanceof Long
    }
    return tmp
  }
  function isCharSequence(value) {
    return typeof value === "string"
      ? true
      : isInterface(value, _get_js_(getKClass_0(CharSequence)))
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === "BooleanArray" : false
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array)
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array)
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === "CharArray" : false
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array)
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array)
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === "LongArray" : false
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array)
  }
  function copyOf(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0
    if (!tmp0_require_0) {
      var message_1 = "" + "Invalid new array size: " + newSize + "."
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    var tmp1_withType_0 = "CharArray"
    var tmp2_withType_0 = fillFrom(_this_, charArray(newSize))
    tmp2_withType_0.$type$ = tmp1_withType_0
    return tmp2_withType_0
  }
  function contentEquals(_this_, other) {
    return contentEqualsInternal(_this_, other)
  }
  function contentHashCode(_this_) {
    return contentHashCodeInternal(_this_)
  }
  function Exception() {
    captureStack(this, Exception)
  }
  Exception.$metadata$ = {
    simpleName: "Exception",
    kind: "class",
    interfaces: [],
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException)
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: "IllegalArgumentException",
    kind: "class",
    interfaces: [],
  }
  function RuntimeException() {
    captureStack(this, RuntimeException)
  }
  RuntimeException.$metadata$ = {
    simpleName: "RuntimeException",
    kind: "class",
    interfaces: [],
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException)
  }
  NoSuchElementException.$metadata$ = {
    simpleName: "NoSuchElementException",
    kind: "class",
    interfaces: [],
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException)
  }
  IllegalStateException.$metadata$ = {
    simpleName: "IllegalStateException",
    kind: "class",
    interfaces: [],
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException)
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: "UnsupportedOperationException",
    kind: "class",
    interfaces: [],
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException)
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: "IndexOutOfBoundsException",
    kind: "class",
    interfaces: [],
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException)
  }
  ArithmeticException.$metadata$ = {
    simpleName: "ArithmeticException",
    kind: "class",
    interfaces: [],
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException)
  }
  NumberFormatException.$metadata$ = {
    simpleName: "NumberFormatException",
    kind: "class",
    interfaces: [],
  }
  function NullPointerException() {
    captureStack(this, NullPointerException)
  }
  NullPointerException.$metadata$ = {
    simpleName: "NullPointerException",
    kind: "class",
    interfaces: [],
  }
  function ClassCastException() {
    captureStack(this, ClassCastException)
  }
  ClassCastException.$metadata$ = {
    simpleName: "ClassCastException",
    kind: "class",
    interfaces: [],
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException)
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: "UninitializedPropertyAccessException",
    kind: "class",
    interfaces: [],
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, null, null)
    Exception.call($this)
    return $this
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, null)
    Exception.call($this)
    return $this
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(
      message,
      Object.create(Exception.prototype)
    )
    captureStack(tmp, Exception_init_$Create$)
    return tmp
  }
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this)
    IllegalArgumentException.call($this)
    return $this
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(
      message,
      Object.create(IllegalArgumentException.prototype)
    )
    captureStack(tmp, IllegalArgumentException_init_$Create$)
    return tmp
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this)
    RuntimeException.call($this)
    return $this
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this)
    RuntimeException.call($this)
    return $this
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this)
    NoSuchElementException.call($this)
    return $this
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(
      Object.create(NoSuchElementException.prototype)
    )
    captureStack(tmp, NoSuchElementException_init_$Create$)
    return tmp
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this)
    NoSuchElementException.call($this)
    return $this
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(
      message,
      Object.create(NoSuchElementException.prototype)
    )
    captureStack(tmp, NoSuchElementException_init_$Create$_0)
    return tmp
  }
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this)
    IllegalStateException.call($this)
    return $this
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(
      message,
      Object.create(IllegalStateException.prototype)
    )
    captureStack(tmp, IllegalStateException_init_$Create$)
    return tmp
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this)
    UnsupportedOperationException.call($this)
    return $this
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(
      Object.create(UnsupportedOperationException.prototype)
    )
    captureStack(tmp, UnsupportedOperationException_init_$Create$)
    return tmp
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this)
    UnsupportedOperationException.call($this)
    return $this
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(
      message,
      Object.create(UnsupportedOperationException.prototype)
    )
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0)
    return tmp
  }
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this)
    IndexOutOfBoundsException.call($this)
    return $this
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(
      message,
      Object.create(IndexOutOfBoundsException.prototype)
    )
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$)
    return tmp
  }
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this)
    ArithmeticException.call($this)
    return $this
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(
      message,
      Object.create(ArithmeticException.prototype)
    )
    captureStack(tmp, ArithmeticException_init_$Create$)
    return tmp
  }
  function NumberFormatException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this)
    NumberFormatException.call($this)
    return $this
  }
  function NumberFormatException_init_$Create$(message) {
    var tmp = NumberFormatException_init_$Init$(
      message,
      Object.create(NumberFormatException.prototype)
    )
    captureStack(tmp, NumberFormatException_init_$Create$)
    return tmp
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this)
    NullPointerException.call($this)
    return $this
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(
      Object.create(NullPointerException.prototype)
    )
    captureStack(tmp, NullPointerException_init_$Create$)
    return tmp
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this)
    ClassCastException.call($this)
    return $this
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(
      Object.create(ClassCastException.prototype)
    )
    captureStack(tmp, ClassCastException_init_$Create$)
    return tmp
  }
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this)
    UninitializedPropertyAccessException.call($this)
    return $this
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(
      message,
      Object.create(UninitializedPropertyAccessException.prototype)
    )
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$)
    return tmp
  }
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack in rhs_hack
    return tmp0_unsafeCast_0
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack
    return tmp0_unsafeCast_0
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack]
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = typeof value_hack
    return tmp0_unsafeCast_0
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = obj_hack instanceof jsClass_hack
    return tmp0_unsafeCast_0
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack
    return tmp0_unsafeCast_0
  }
  function KSerializer() {}
  KSerializer.$metadata$ = {
    simpleName: "KSerializer",
    kind: "interface",
    interfaces: [SerializationStrategy, DeserializationStrategy],
  }
  function DeserializationStrategy() {}
  DeserializationStrategy.$metadata$ = {
    simpleName: "DeserializationStrategy",
    kind: "interface",
    interfaces: [],
  }
  function SerializationStrategy() {}
  SerializationStrategy.$metadata$ = {
    simpleName: "SerializationStrategy",
    kind: "interface",
    interfaces: [],
  }
  function UpdateMode(name, ordinal) {
    Enum.call(this, name, ordinal)
  }
  UpdateMode.$metadata$ = {
    simpleName: "UpdateMode",
    kind: "class",
    interfaces: [],
  }
  function UpdateMode_OVERWRITE_getInstance() {
    UpdateMode_initEntries()
    return UpdateMode_OVERWRITE_instance
  }
  var UpdateMode_BANNED_instance
  var UpdateMode_OVERWRITE_instance
  var UpdateMode_UPDATE_instance
  var UpdateMode_entriesInitialized
  function UpdateMode_initEntries() {
    if (UpdateMode_entriesInitialized) return Unit_getInstance()
    UpdateMode_entriesInitialized = true
    UpdateMode_BANNED_instance = new UpdateMode("BANNED", 0)
    UpdateMode_OVERWRITE_instance = new UpdateMode("OVERWRITE", 1)
    UpdateMode_UPDATE_instance = new UpdateMode("UPDATE", 2)
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this)
    this._baseClass = baseClass
    var tmp = this
    var tmp_0 = OPEN_getInstance()
    var tmp_1 = []
    tmp._descriptor = withContext(
      buildSerialDescriptor$default(
        "kotlinx.serialization.Polymorphic",
        tmp_0,
        tmp_1,
        _no_name_provided_$factory_23(this),
        4,
        null
      ),
      this._baseClass
    )
  }
  PolymorphicSerializer.prototype._get_baseClass__0 = function() {
    return this._baseClass
  }
  PolymorphicSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor
  }
  PolymorphicSerializer.$metadata$ = {
    simpleName: "PolymorphicSerializer",
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided_$factory_23($this) {
    var i = new _no_name_provided__29($this)
    return function(p1) {
      i.invoke_61(p1)
      return Unit_getInstance()
    }
  }
  function _no_name_provided__29($this) {
    this._$this_10 = $this
  }
  _no_name_provided__29.prototype.invoke_61 = function(_this__0) {
    var tmp = serializer(
      StringCompanionObject_getInstance()
    )._get_descriptor__32()
    _this__0.element$default("type", tmp, null, false, 12, null)
    var tmp_0 =
      "" +
      "kotlinx.serialization.Polymorphic<" +
      this._$this_10._baseClass._get_simpleName__4() +
      ">"
    var tmp_1 = CONTEXTUAL_getInstance()
    var tmp_2 = []
    var tmp_3 = buildSerialDescriptor$default(
      tmp_0,
      tmp_1,
      tmp_2,
      null,
      12,
      null
    )
    _this__0.element$default("value", tmp_3, null, false, 12, null)
  }
  _no_name_provided__29.prototype.invoke_66 = function(p1) {
    this.invoke_61(
      p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE()
    )
    return Unit_getInstance()
  }
  _no_name_provided__29.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function StringFormat() {}
  StringFormat.$metadata$ = {
    simpleName: "StringFormat",
    kind: "interface",
    interfaces: [SerialFormat],
  }
  function SerialFormat() {}
  SerialFormat.$metadata$ = {
    simpleName: "SerialFormat",
    kind: "interface",
    interfaces: [],
  }
  function SerializationException() {
    captureStack(this, SerializationException)
  }
  SerializationException.$metadata$ = {
    simpleName: "SerializationException",
    kind: "class",
    interfaces: [],
  }
  function UnknownFieldException(index) {
    SerializationException_init_$Init$(
      "" + "An unknown field for index " + index,
      this
    )
    captureStack(this, UnknownFieldException)
  }
  UnknownFieldException.$metadata$ = {
    simpleName: "UnknownFieldException",
    kind: "class",
    interfaces: [],
  }
  function MissingFieldException(fieldName) {
    SerializationException_init_$Init$(
      "" + "Field '" + fieldName + "' is required, but it was missing",
      this
    )
    captureStack(this, MissingFieldException)
  }
  MissingFieldException.$metadata$ = {
    simpleName: "MissingFieldException",
    kind: "class",
    interfaces: [],
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this)
    SerializationException.call($this)
    return $this
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(
      message,
      Object.create(SerializationException.prototype)
    )
    captureStack(tmp, SerializationException_init_$Create$)
    return tmp
  }
  function serializer(_this_) {
    return StringSerializer_getInstance()
  }
  function serializer_0(_this_) {
    return CharSerializer_getInstance()
  }
  function serializer_1(_this_) {
    return DoubleSerializer_getInstance()
  }
  function serializer_2(_this_) {
    return FloatSerializer_getInstance()
  }
  function serializer_3(_this_) {
    return LongSerializer_getInstance()
  }
  function serializer_4(_this_) {
    return IntSerializer_getInstance()
  }
  function serializer_5(_this_) {
    return ShortSerializer_getInstance()
  }
  function serializer_6(_this_) {
    return ByteSerializer_getInstance()
  }
  function serializer_7(_this_) {
    return BooleanSerializer_getInstance()
  }
  function serializer_8(_this_) {
    return UnitSerializer_getInstance()
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer)
  }
  function _get_nullable_(_this_) {
    var tmp
    if (_this_._get_descriptor__32()._get_isNullable__12()) {
      tmp = isInterface(_this_, KSerializer) ? _this_ : THROW_CCE()
    } else {
      tmp = new NullableSerializer(_this_)
    }
    return tmp
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer)
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer)
  }
  function withContext(_this_, context) {
    return new ContextDescriptor(_this_, context)
  }
  function ContextDescriptor(original, kClass) {
    this._original = original
    this._kClass = kClass
    this._serialName =
      "" +
      this._original._get_serialName__12() +
      "<" +
      this._kClass._get_simpleName__4() +
      ">"
  }
  ContextDescriptor.prototype.getElementDescriptor_12 = function(index) {
    return this._original.getElementDescriptor_12(index)
  }
  ContextDescriptor.prototype.getElementIndex_12 = function(name) {
    return this._original.getElementIndex_12(name)
  }
  ContextDescriptor.prototype.getElementName_12 = function(index) {
    return this._original.getElementName_12(index)
  }
  ContextDescriptor.prototype._get_elementsCount__12 = function() {
    return this._original._get_elementsCount__12()
  }
  ContextDescriptor.prototype._get_isNullable__12 = function() {
    return this._original._get_isNullable__12()
  }
  ContextDescriptor.prototype._get_kind__12 = function() {
    return this._original._get_kind__12()
  }
  ContextDescriptor.prototype._get_serialName__12 = function() {
    return this._serialName
  }
  ContextDescriptor.prototype.equals = function(other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null
    var tmp
    if (tmp0_elvis_lhs == null) {
      return false
    } else {
      tmp = tmp0_elvis_lhs
    }
    var another = tmp
    return equals_0(this._original, another._original)
      ? another._kClass.equals(this._kClass)
      : false
  }
  ContextDescriptor.prototype.hashCode = function() {
    var result = this._kClass.hashCode()
    result = (imul(31, result) + getStringHashCode(this._serialName)) | 0
    return result
  }
  ContextDescriptor.$metadata$ = {
    simpleName: "ContextDescriptor",
    kind: "class",
    interfaces: [SerialDescriptor],
  }
  function SerialDescriptor() {}
  SerialDescriptor.prototype._get_isNullable__12 = function() {
    return false
  }
  SerialDescriptor.$metadata$ = {
    simpleName: "SerialDescriptor",
    kind: "interface",
    interfaces: [],
  }
  function _get_elementDescriptors_(_this_) {
    return new _no_name_provided__1_0(_this_)
  }
  function _get_elementNames_(_this_) {
    return new _no_name_provided__1_1(_this_)
  }
  function _no_name_provided__30($this) {
    this._$this_11 = $this
    this._elementsLeft = this._$this_11._get_elementsCount__12()
  }
  _no_name_provided__30.prototype.hasNext_14 = function() {
    return this._elementsLeft > 0
  }
  _no_name_provided__30.prototype.next_14 = function() {
    var tmp = this._$this_11._get_elementsCount__12()
    var tmp0_this = this
    var tmp1 = tmp0_this._elementsLeft
    tmp0_this._elementsLeft = (tmp1 - 1) | 0
    return this._$this_11.getElementDescriptor_12((tmp - tmp1) | 0)
  }
  _no_name_provided__30.$metadata$ = {
    kind: "class",
    interfaces: [Iterator],
  }
  function _no_name_provided__1_0($this) {
    this._$this_12 = $this
  }
  _no_name_provided__1_0.prototype.iterator_2_1 = function() {
    return new _no_name_provided__30(this._$this_12)
  }
  _no_name_provided__1_0.prototype.iterator_37 = function() {
    return this.iterator_2_1()
  }
  _no_name_provided__1_0.$metadata$ = {
    simpleName: "<no name provided>_1",
    kind: "class",
    interfaces: [Iterable],
  }
  function _no_name_provided__31($this) {
    this._$this_13 = $this
    this._elementsLeft_0 = this._$this_13._get_elementsCount__12()
  }
  _no_name_provided__31.prototype.hasNext_14 = function() {
    return this._elementsLeft_0 > 0
  }
  _no_name_provided__31.prototype.next_14 = function() {
    var tmp = this._$this_13._get_elementsCount__12()
    var tmp0_this = this
    var tmp1 = tmp0_this._elementsLeft_0
    tmp0_this._elementsLeft_0 = (tmp1 - 1) | 0
    return this._$this_13.getElementName_12((tmp - tmp1) | 0)
  }
  _no_name_provided__31.$metadata$ = {
    kind: "class",
    interfaces: [Iterator],
  }
  function _no_name_provided__1_1($this) {
    this._$this_14 = $this
  }
  _no_name_provided__1_1.prototype.iterator_2_1 = function() {
    return new _no_name_provided__31(this._$this_14)
  }
  _no_name_provided__1_1.prototype.iterator_37 = function() {
    return this.iterator_2_1()
  }
  _no_name_provided__1_1.$metadata$ = {
    simpleName: "<no name provided>_1",
    kind: "class",
    interfaces: [Iterable],
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp0_require_0 = !isBlank(serialName)
    if (!tmp0_require_0) {
      var message_1 = "Blank serial names are prohibited"
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    var tmp1_require_0 = !equals_0(kind, CLASS_getInstance())
    if (!tmp1_require_0) {
      var message_1_0 =
        "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead"
      throw IllegalArgumentException_init_$Create$(toString_1(message_1_0))
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName)
    builder(sdBuilder)
    return new SerialDescriptorImpl(
      serialName,
      kind,
      sdBuilder._elementNames._get_size__27(),
      toList(typeParameters),
      sdBuilder
    )
  }
  function buildSerialDescriptor$default(
    serialName,
    kind,
    typeParameters,
    builder,
    $mask0,
    $handler
  ) {
    var tmp
    if (!(($mask0 & 8) === 0)) {
      tmp = _no_name_provided_$factory_24()
    } else {
      tmp = builder
    }
    var builder_0 = tmp
    return buildSerialDescriptor(serialName, kind, typeParameters, builder_0)
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this._serialName_0 = serialName
    this._isNullable = false
    this._annotations = emptyList()
    this._elementNames = ArrayList_init_$Create$()
    this._uniqueNames = HashSet_init_$Create$()
    this._elementDescriptors = ArrayList_init_$Create$()
    this._elementAnnotations = ArrayList_init_$Create$()
    this._elementOptionality = ArrayList_init_$Create$()
  }
  ClassSerialDescriptorBuilder.prototype.element = function(
    elementName,
    descriptor,
    annotations,
    isOptional
  ) {
    var tmp0_require_0 = this._uniqueNames.add_16(elementName)
    if (!tmp0_require_0) {
      var message_1 =
        "" + "Element with name '" + elementName + "' is already registered"
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    var tmp0_this = this
    var tmp1_plusAssign_0 = tmp0_this._elementNames
    tmp1_plusAssign_0.add_16(elementName)
    Unit_getInstance()
    var tmp1_this = this
    var tmp2_plusAssign_0 = tmp1_this._elementDescriptors
    tmp2_plusAssign_0.add_16(descriptor)
    Unit_getInstance()
    var tmp2_this = this
    var tmp3_plusAssign_0 = tmp2_this._elementAnnotations
    tmp3_plusAssign_0.add_16(annotations)
    Unit_getInstance()
    var tmp3_this = this
    var tmp4_plusAssign_0 = tmp3_this._elementOptionality
    tmp4_plusAssign_0.add_16(isOptional)
    Unit_getInstance()
  }
  ClassSerialDescriptorBuilder.prototype.element$default = function(
    elementName,
    descriptor,
    annotations,
    isOptional,
    $mask0,
    $handler
  ) {
    var annotations_0 = !(($mask0 & 4) === 0) ? emptyList() : annotations
    var isOptional_0 = !(($mask0 & 8) === 0) ? false : isOptional
    return this.element(elementName, descriptor, annotations_0, isOptional_0)
  }
  ClassSerialDescriptorBuilder.$metadata$ = {
    simpleName: "ClassSerialDescriptorBuilder",
    kind: "class",
    interfaces: [],
  }
  function SerialDescriptorImpl(
    serialName,
    kind,
    elementsCount,
    typeParameters,
    builder
  ) {
    this._serialName_1 = serialName
    this._kind = kind
    this._elementsCount = elementsCount
    this._annotations_0 = builder._annotations
    var tmp = this
    var tmp0_toTypedArray_0 = builder._elementNames
    tmp._elementNames_0 = copyToArray_0(tmp0_toTypedArray_0)
    this._elementDescriptors_0 = compactArray(builder._elementDescriptors)
    var tmp_0 = this
    var tmp0_toTypedArray_0_0 = builder._elementAnnotations
    tmp_0._elementAnnotations_0 = copyToArray_0(tmp0_toTypedArray_0_0)
    this._elementOptionality_0 = toBooleanArray(builder._elementOptionality)
    var tmp_1 = this
    var tmp0_map_0 = withIndex(this._elementNames_0)
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
      collectionSizeOrDefault(tmp0_map_0, 10)
    )
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_37()
    while (tmp0_iterator_1_2.hasNext_14()) {
      var item_2_3 = tmp0_iterator_1_2.next_14()
      tmp0_mapTo_0_1.add_16(to(item_2_3._value, item_2_3._index))
      Unit_getInstance()
    }
    tmp_1._name2Index = toMap(tmp0_mapTo_0_1)
    this._typeParametersDescriptors = compactArray(typeParameters)
    var tmp_2 = this
    tmp_2.__hashCode$delegate = lazy(_no_name_provided_$factory_25(this))
  }
  SerialDescriptorImpl.prototype._get_serialName__12 = function() {
    return this._serialName_1
  }
  SerialDescriptorImpl.prototype._get_kind__12 = function() {
    return this._kind
  }
  SerialDescriptorImpl.prototype._get_elementsCount__12 = function() {
    return this._elementsCount
  }
  SerialDescriptorImpl.prototype.getElementName_12 = function(index) {
    return getChecked(this._elementNames_0, index)
  }
  SerialDescriptorImpl.prototype.getElementIndex_12 = function(name) {
    var tmp0_elvis_lhs = this._name2Index.get_16(name)
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs
  }
  SerialDescriptorImpl.prototype.getElementDescriptor_12 = function(index) {
    return getChecked(this._elementDescriptors_0, index)
  }
  SerialDescriptorImpl.prototype.equals = function(other) {
    var tmp$ret$0
    l$ret$1: do {
      if (this === other) {
        tmp$ret$0 = true
        break l$ret$1
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false
        break l$ret$1
      } else {
      }
      if (!(this._get_serialName__12() === other._get_serialName__12())) {
        tmp$ret$0 = false
        break l$ret$1
      }
      var tmp0__anonymous__3 = other
      if (
        !contentEquals(
          this._typeParametersDescriptors,
          tmp0__anonymous__3._typeParametersDescriptors
        )
      ) {
        tmp$ret$0 = false
        break l$ret$1
      } else {
      }
      if (!(this._get_elementsCount__12() === other._get_elementsCount__12())) {
        tmp$ret$0 = false
        break l$ret$1
      }
      var untilArg = this._get_elementsCount__12()
      var inductionVariable = 0
      var last_0 = (untilArg - 1) | 0
      if (!(untilArg === -2147483648) ? inductionVariable <= last_0 : false)
        do {
          var index_2 = inductionVariable
          inductionVariable = (inductionVariable + 1) | 0
          if (
            !(
              this.getElementDescriptor_12(index_2)._get_serialName__12() ===
              other.getElementDescriptor_12(index_2)._get_serialName__12()
            )
          ) {
            tmp$ret$0 = false
            break l$ret$1
          }
          if (
            !equals_0(
              this.getElementDescriptor_12(index_2)._get_kind__12(),
              other.getElementDescriptor_12(index_2)._get_kind__12()
            )
          ) {
            tmp$ret$0 = false
            break l$ret$1
          }
        } while (inductionVariable <= last_0)
      tmp$ret$0 = true
    } while (false)
    return tmp$ret$0
  }
  SerialDescriptorImpl.prototype.hashCode = function() {
    return _get__hashCode_(this)
  }
  SerialDescriptorImpl.prototype.toString = function() {
    var tmp = until(0, this._elementsCount)
    var tmp_0 = "" + this._serialName_1 + "("
    return joinToString$default_0(
      tmp,
      ", ",
      tmp_0,
      ")",
      0,
      null,
      _no_name_provided_$factory_26(this),
      24,
      null
    )
  }
  SerialDescriptorImpl.$metadata$ = {
    simpleName: "SerialDescriptorImpl",
    kind: "class",
    interfaces: [SerialDescriptor],
  }
  function _no_name_provided__32() {}
  _no_name_provided__32.prototype.invoke_61 = function(_this__0) {
    return Unit_getInstance()
  }
  _no_name_provided__32.prototype.invoke_66 = function(p1) {
    this.invoke_61(
      p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE()
    )
    return Unit_getInstance()
  }
  _no_name_provided__32.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__32()
    return function(p1) {
      i.invoke_61(p1)
      return Unit_getInstance()
    }
  }
  function _no_name_provided_$factory_25($this) {
    var i = new _no_name_provided__33($this)
    return function() {
      return i.invoke_60()
    }
  }
  function _no_name_provided_$factory_26($this) {
    var i = new _no_name_provided__34($this)
    return function(p1) {
      return i.invoke_51(p1)
    }
  }
  function _get__hashCode_($this) {
    var tmp0_getValue_0 = $this.__hashCode$delegate
    var tmp1_getValue_0 = _hashCode$factory()
    return tmp0_getValue_0._get_value__11()
  }
  function _no_name_provided__33($this) {
    this._$this_15 = $this
  }
  _no_name_provided__33.prototype.invoke_60 = function() {
    var tmp4_hashCodeImpl_0 = this._$this_15._typeParametersDescriptors
    var result_1 = getStringHashCode(this._$this_15._get_serialName__12())
    result_1 = (imul(31, result_1) + contentHashCode(tmp4_hashCodeImpl_0)) | 0
    var elementDescriptors_2 = _get_elementDescriptors_(this._$this_15)
    var tmp0_fold_0 = 1
    var accumulator_1 = tmp0_fold_0
    var tmp0_iterator_2 = elementDescriptors_2.iterator_37()
    while (tmp0_iterator_2.hasNext_14()) {
      var element_3 = tmp0_iterator_2.next_14()
      var tmp1__anonymous__1_4 = accumulator_1
      var tmp = imul(31, tmp1__anonymous__1_4)
      var tmp0_hashCode_0_5 = element_3._get_serialName__12()
      var tmp0_safe_receiver_2_7 = tmp0_hashCode_0_5
      var tmp1_elvis_lhs_1_6 =
        tmp0_safe_receiver_2_7 == null ? null : hashCode(tmp0_safe_receiver_2_7)
      accumulator_1 =
        (tmp + (tmp1_elvis_lhs_1_6 == null ? 0 : tmp1_elvis_lhs_1_6)) | 0
    }
    var namesHash_3 = accumulator_1
    var tmp2_fold_0 = 1
    var accumulator_1_0 = tmp2_fold_0
    var tmp0_iterator_2_0 = elementDescriptors_2.iterator_37()
    while (tmp0_iterator_2_0.hasNext_14()) {
      var element_3_0 = tmp0_iterator_2_0.next_14()
      var tmp3__anonymous__1_4 = accumulator_1_0
      var tmp_0 = imul(31, tmp3__anonymous__1_4)
      var tmp0_hashCode_0_5_0 = element_3_0._get_kind__12()
      var tmp0_safe_receiver_2_7_0 = tmp0_hashCode_0_5_0
      var tmp1_elvis_lhs_1_6_0 =
        tmp0_safe_receiver_2_7_0 == null
          ? null
          : hashCode(tmp0_safe_receiver_2_7_0)
      accumulator_1_0 =
        (tmp_0 + (tmp1_elvis_lhs_1_6_0 == null ? 0 : tmp1_elvis_lhs_1_6_0)) | 0
    }
    var kindHash_5 = accumulator_1_0
    result_1 = (imul(31, result_1) + namesHash_3) | 0
    result_1 = (imul(31, result_1) + kindHash_5) | 0
    return result_1
  }
  _no_name_provided__33.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__34($this) {
    this._$this_16 = $this
  }
  _no_name_provided__34.prototype.invoke_51 = function(it) {
    return (
      this._$this_16.getElementName_12(it) +
      ": " +
      this._$this_16.getElementDescriptor_12(it)._get_serialName__12()
    )
  }
  _no_name_provided__34.prototype.invoke_66 = function(p1) {
    return this.invoke_51(
      (!(p1 == null) ? typeof p1 === "number" : false) ? p1 : THROW_CCE()
    )
  }
  _no_name_provided__34.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function SerialKind() {}
  SerialKind.prototype.toString = function() {
    return ensureNotNull(getKClassFromExpression_0(this)._get_simpleName__4())
  }
  SerialKind.prototype.hashCode = function() {
    return getStringHashCode(this.toString())
  }
  SerialKind.$metadata$ = {
    simpleName: "SerialKind",
    kind: "class",
    interfaces: [],
  }
  function PolymorphicKind() {
    SerialKind.call(this)
  }
  PolymorphicKind.$metadata$ = {
    simpleName: "PolymorphicKind",
    kind: "class",
    interfaces: [],
  }
  function PrimitiveKind() {
    SerialKind.call(this)
  }
  PrimitiveKind.$metadata$ = {
    simpleName: "PrimitiveKind",
    kind: "class",
    interfaces: [],
  }
  function StructureKind() {
    SerialKind.call(this)
  }
  StructureKind.$metadata$ = {
    simpleName: "StructureKind",
    kind: "class",
    interfaces: [],
  }
  function ENUM() {
    ENUM_instance = this
    SerialKind.call(this)
  }
  ENUM.$metadata$ = {
    simpleName: "ENUM",
    kind: "object",
    interfaces: [],
  }
  var ENUM_instance
  function ENUM_getInstance() {
    if (ENUM_instance == null) new ENUM()
    return ENUM_instance
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this
    SerialKind.call(this)
  }
  CONTEXTUAL.$metadata$ = {
    simpleName: "CONTEXTUAL",
    kind: "object",
    interfaces: [],
  }
  var CONTEXTUAL_instance
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null) new CONTEXTUAL()
    return CONTEXTUAL_instance
  }
  function OPEN() {
    OPEN_instance = this
    PolymorphicKind.call(this)
  }
  OPEN.$metadata$ = {
    simpleName: "OPEN",
    kind: "object",
    interfaces: [],
  }
  var OPEN_instance
  function OPEN_getInstance() {
    if (OPEN_instance == null) new OPEN()
    return OPEN_instance
  }
  function BOOLEAN() {
    BOOLEAN_instance = this
    PrimitiveKind.call(this)
  }
  BOOLEAN.$metadata$ = {
    simpleName: "BOOLEAN",
    kind: "object",
    interfaces: [],
  }
  var BOOLEAN_instance
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null) new BOOLEAN()
    return BOOLEAN_instance
  }
  function BYTE() {
    BYTE_instance = this
    PrimitiveKind.call(this)
  }
  BYTE.$metadata$ = {
    simpleName: "BYTE",
    kind: "object",
    interfaces: [],
  }
  var BYTE_instance
  function BYTE_getInstance() {
    if (BYTE_instance == null) new BYTE()
    return BYTE_instance
  }
  function CHAR() {
    CHAR_instance = this
    PrimitiveKind.call(this)
  }
  CHAR.$metadata$ = {
    simpleName: "CHAR",
    kind: "object",
    interfaces: [],
  }
  var CHAR_instance
  function CHAR_getInstance() {
    if (CHAR_instance == null) new CHAR()
    return CHAR_instance
  }
  function SHORT() {
    SHORT_instance = this
    PrimitiveKind.call(this)
  }
  SHORT.$metadata$ = {
    simpleName: "SHORT",
    kind: "object",
    interfaces: [],
  }
  var SHORT_instance
  function SHORT_getInstance() {
    if (SHORT_instance == null) new SHORT()
    return SHORT_instance
  }
  function INT() {
    INT_instance = this
    PrimitiveKind.call(this)
  }
  INT.$metadata$ = {
    simpleName: "INT",
    kind: "object",
    interfaces: [],
  }
  var INT_instance
  function INT_getInstance() {
    if (INT_instance == null) new INT()
    return INT_instance
  }
  function LONG() {
    LONG_instance = this
    PrimitiveKind.call(this)
  }
  LONG.$metadata$ = {
    simpleName: "LONG",
    kind: "object",
    interfaces: [],
  }
  var LONG_instance
  function LONG_getInstance() {
    if (LONG_instance == null) new LONG()
    return LONG_instance
  }
  function FLOAT() {
    FLOAT_instance = this
    PrimitiveKind.call(this)
  }
  FLOAT.$metadata$ = {
    simpleName: "FLOAT",
    kind: "object",
    interfaces: [],
  }
  var FLOAT_instance
  function FLOAT_getInstance() {
    if (FLOAT_instance == null) new FLOAT()
    return FLOAT_instance
  }
  function DOUBLE() {
    DOUBLE_instance = this
    PrimitiveKind.call(this)
  }
  DOUBLE.$metadata$ = {
    simpleName: "DOUBLE",
    kind: "object",
    interfaces: [],
  }
  var DOUBLE_instance
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null) new DOUBLE()
    return DOUBLE_instance
  }
  function STRING() {
    STRING_instance = this
    PrimitiveKind.call(this)
  }
  STRING.$metadata$ = {
    simpleName: "STRING",
    kind: "object",
    interfaces: [],
  }
  var STRING_instance
  function STRING_getInstance() {
    if (STRING_instance == null) new STRING()
    return STRING_instance
  }
  function CLASS() {
    CLASS_instance = this
    StructureKind.call(this)
  }
  CLASS.$metadata$ = {
    simpleName: "CLASS",
    kind: "object",
    interfaces: [],
  }
  var CLASS_instance
  function CLASS_getInstance() {
    if (CLASS_instance == null) new CLASS()
    return CLASS_instance
  }
  function LIST() {
    LIST_instance = this
    StructureKind.call(this)
  }
  LIST.$metadata$ = {
    simpleName: "LIST",
    kind: "object",
    interfaces: [],
  }
  var LIST_instance
  function LIST_getInstance() {
    if (LIST_instance == null) new LIST()
    return LIST_instance
  }
  function MAP() {
    MAP_instance = this
    StructureKind.call(this)
  }
  MAP.$metadata$ = {
    simpleName: "MAP",
    kind: "object",
    interfaces: [],
  }
  var MAP_instance
  function MAP_getInstance() {
    if (MAP_instance == null) new MAP()
    return MAP_instance
  }
  function OBJECT() {
    OBJECT_instance = this
    StructureKind.call(this)
  }
  OBJECT.$metadata$ = {
    simpleName: "OBJECT",
    kind: "object",
    interfaces: [],
  }
  var OBJECT_instance
  function OBJECT_getInstance() {
    if (OBJECT_instance == null) new OBJECT()
    return OBJECT_instance
  }
  function AbstractDecoder() {
    this._updateMode = UpdateMode_OVERWRITE_getInstance()
  }
  AbstractDecoder.prototype._get_serializersModule__10 = function() {
    return EmptySerializersModule
  }
  AbstractDecoder.prototype.decodeValue_0 = function() {
    throw SerializationException_init_$Create$(
      "" + getKClassFromExpression_0(this) + " can't retrieve untyped values"
    )
  }
  AbstractDecoder.prototype.decodeNotNullMark_7 = function() {
    return true
  }
  AbstractDecoder.prototype.decodeNull_7 = function() {
    return null
  }
  AbstractDecoder.prototype.decodeBoolean_7 = function() {
    var tmp = this.decodeValue_0()
    return typeof tmp === "boolean" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeByte_7 = function() {
    var tmp = this.decodeValue_0()
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeShort_7 = function() {
    var tmp = this.decodeValue_0()
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeInt_7 = function() {
    var tmp = this.decodeValue_0()
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeLong_7 = function() {
    var tmp = this.decodeValue_0()
    return tmp instanceof Long ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeFloat_7 = function() {
    var tmp = this.decodeValue_0()
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeDouble_7 = function() {
    var tmp = this.decodeValue_0()
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeChar_7 = function() {
    var tmp = this.decodeValue_0()
    return tmp instanceof Char ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeString_7 = function() {
    var tmp = this.decodeValue_0()
    return typeof tmp === "string" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeEnum_7 = function(enumDescriptor) {
    var tmp = this.decodeValue_0()
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  AbstractDecoder.prototype.decodeSerializableValue_14 = function(
    deserializer,
    previousValue
  ) {
    return this.decodeSerializableValue_15(deserializer)
  }
  AbstractDecoder.prototype.beginStructure_15 = function(
    descriptor,
    typeParams
  ) {
    return this
  }
  AbstractDecoder.prototype.endStructure_7 = function(descriptor) {}
  AbstractDecoder.prototype.decodeStringElement_7 = function(
    descriptor,
    index
  ) {
    return this.decodeString_7()
  }
  AbstractDecoder.prototype.decodeSerializableElement_16 = function(
    descriptor,
    index,
    deserializer,
    previousValue
  ) {
    return this.decodeSerializableValue_14(deserializer, previousValue)
  }
  AbstractDecoder.prototype.decodeNullableSerializableElement_16 = function(
    descriptor,
    index,
    deserializer,
    previousValue
  ) {
    return this.decodeNotNullMark_7()
      ? this.decodeSerializableValue_14(deserializer, previousValue)
      : this.decodeNull_7()
  }
  AbstractDecoder.$metadata$ = {
    simpleName: "AbstractDecoder",
    kind: "class",
    interfaces: [Decoder, CompositeDecoder],
  }
  function Decoder() {}
  Decoder.prototype.beginStructure_16 = function(descriptor) {
    var tmp0_arrayOf_0 = []
    return this.beginStructure_15(descriptor, tmp0_arrayOf_0.slice())
  }
  Decoder.prototype.beginStructure_15 = function(descriptor, typeParams) {
    return this.beginStructure_16(descriptor)
  }
  Decoder.prototype.decodeSerializableValue_15 = function(deserializer) {
    return deserializer.deserialize_32(this)
  }
  Decoder.$metadata$ = {
    simpleName: "Decoder",
    kind: "interface",
    interfaces: [],
  }
  function CompositeDecoder() {}
  CompositeDecoder.prototype.decodeSequentially_7 = function() {
    return false
  }
  CompositeDecoder.prototype.decodeCollectionSize_7 = function(descriptor) {
    return -1
  }
  CompositeDecoder.prototype.decodeSerializableElement_15 = function(
    descriptor,
    i,
    deserializer
  ) {
    return this.decodeSerializableElement_16(descriptor, i, deserializer, null)
  }
  CompositeDecoder.prototype.decodeSerializableElement_16 = function(
    descriptor,
    index,
    deserializer,
    previousValue
  ) {
    return this.decodeSerializableElement_15(descriptor, index, deserializer)
  }
  CompositeDecoder.prototype.decodeSerializableElement$default_7 = function(
    descriptor,
    index,
    deserializer,
    previousValue,
    $mask0,
    $handler
  ) {
    var previousValue_0 = !(($mask0 & 8) === 0) ? null : previousValue
    return $handler == null
      ? this.decodeSerializableElement_16(
          descriptor,
          index,
          deserializer,
          previousValue_0
        )
      : $handler(descriptor, index, deserializer, previousValue_0)
  }
  CompositeDecoder.prototype.decodeNullableSerializableElement_16 = function(
    descriptor,
    index,
    deserializer,
    previousValue
  ) {
    return this.decodeNullableSerializableElement_15(
      descriptor,
      index,
      deserializer
    )
  }
  CompositeDecoder.prototype.decodeNullableSerializableElement_15 = function(
    descriptor,
    i,
    deserializer
  ) {
    return this.decodeNullableSerializableElement_16(
      descriptor,
      i,
      deserializer,
      null
    )
  }
  CompositeDecoder.$metadata$ = {
    simpleName: "CompositeDecoder",
    kind: "interface",
    interfaces: [],
  }
  function AbstractPolymorphicSerializer() {}
  AbstractPolymorphicSerializer.prototype.deserialize_32 = function(decoder) {
    var tmp0_decodeStructure_0 = this._get_descriptor__32()
    var composite_1 = decoder.beginStructure_16(tmp0_decodeStructure_0)
    var tmp$ret$0
    l$ret$1: do {
      var klassName_4 = null
      var value_5 = null
      if (composite_1.decodeSequentially_7()) {
        tmp$ret$0 = decodeSequentially(this, composite_1)
        break l$ret$1
      }
      mainLoop: while (true) {
        var index_6 = composite_1.decodeElementIndex_7(
          this._get_descriptor__32()
        )
        switch (index_6) {
          case -1:
            break mainLoop
          case 0:
            klassName_4 = composite_1.decodeStringElement_7(
              this._get_descriptor__32(),
              index_6
            )
            break
          case 1:
            var tmp$ret$2
            l$ret$3: do {
              var tmp0_requireNotNull_0_7 = klassName_4
              if (tmp0_requireNotNull_0_7 == null) {
                var message_1_8 =
                  "Cannot read polymorphic value before its type token"
                throw IllegalArgumentException_init_$Create$(
                  toString_1(message_1_8)
                )
              } else {
                tmp$ret$2 = tmp0_requireNotNull_0_7
                break l$ret$3
              }
            } while (false)
            klassName_4 = tmp$ret$2
            var serializer_9 = this.findPolymorphicSerializer_0(
              composite_1,
              klassName_4
            )
            var tmp = this._get_descriptor__32()
            value_5 = composite_1.decodeSerializableElement$default_7(
              tmp,
              index_6,
              serializer_9,
              null,
              8,
              null
            )
            break
          default:
            var tmp0_elvis_lhs_10 = klassName_4
            throw SerializationException_init_$Create$(
              "Invalid index in polymorphic deserialization of " +
                (tmp0_elvis_lhs_10 == null
                  ? "unknown class"
                  : tmp0_elvis_lhs_10) +
                ("" +
                  "\n Expected 0, 1 or DECODE_DONE(-1), but found " +
                  index_6)
            )
        }
      }
      var tmp$ret$4
      l$ret$5: do {
        var tmp1_requireNotNull_0_11 = value_5
        if (tmp1_requireNotNull_0_11 == null) {
          var message_1_12 =
            "" + "Polymorphic value has not been read for class " + klassName_4
          throw IllegalArgumentException_init_$Create$(toString_1(message_1_12))
        } else {
          tmp$ret$4 = tmp1_requireNotNull_0_11
          break l$ret$5
        }
      } while (false)
      var tmp_0 = tmp$ret$4
      tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE()
    } while (false)
    var result_2 = tmp$ret$0
    composite_1.endStructure_7(tmp0_decodeStructure_0)
    return result_2
  }
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializer_0 = function(
    decoder,
    klassName
  ) {
    var tmp0_elvis_lhs = decoder
      ._get_serializersModule__10()
      .getPolymorphic_0(this._get_baseClass__0(), klassName)
    var tmp
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, this._get_baseClass__0())
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  AbstractPolymorphicSerializer.$metadata$ = {
    simpleName: "AbstractPolymorphicSerializer",
    kind: "class",
    interfaces: [KSerializer],
  }
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    throw SerializationException_init_$Create$(
      "" +
        subClassName +
        " is not registered for polymorphic serialization in the scope of " +
        baseClass
    )
  }
  function decodeSequentially($this, compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_7(
      $this._get_descriptor__32(),
      0
    )
    var serializer_9 = $this.findPolymorphicSerializer_0(
      compositeDecoder,
      klassName
    )
    var tmp = $this._get_descriptor__32()
    var value = compositeDecoder.decodeSerializableElement$default_7(
      tmp,
      1,
      serializer_9,
      null,
      8,
      null
    )
    compositeDecoder.endStructure_7($this._get_descriptor__32())
    return value
  }
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc)
  }
  HashSetClassDesc.prototype._get_serialName__12 = function() {
    return "kotlin.collections.HashSet"
  }
  HashSetClassDesc.$metadata$ = {
    simpleName: "HashSetClassDesc",
    kind: "class",
    interfaces: [],
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(
      this,
      "kotlin.collections.LinkedHashMap",
      keyDesc,
      valueDesc
    )
  }
  LinkedHashMapClassDesc.$metadata$ = {
    simpleName: "LinkedHashMapClassDesc",
    kind: "class",
    interfaces: [],
  }
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(
      this,
      "kotlin.collections.HashMap",
      keyDesc,
      valueDesc
    )
  }
  HashMapClassDesc.$metadata$ = {
    simpleName: "HashMapClassDesc",
    kind: "class",
    interfaces: [],
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc)
  }
  ArrayListClassDesc.prototype._get_serialName__12 = function() {
    return "kotlin.collections.ArrayList"
  }
  ArrayListClassDesc.$metadata$ = {
    simpleName: "ArrayListClassDesc",
    kind: "class",
    interfaces: [],
  }
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc)
  }
  LinkedHashSetClassDesc.prototype._get_serialName__12 = function() {
    return "kotlin.collections.LinkedHashSet"
  }
  LinkedHashSetClassDesc.$metadata$ = {
    simpleName: "LinkedHashSetClassDesc",
    kind: "class",
    interfaces: [],
  }
  function ListLikeDescriptor(elementDescriptor) {
    this._elementDescriptor = elementDescriptor
    this._elementsCount_0 = 1
  }
  ListLikeDescriptor.prototype._get_kind__12 = function() {
    return LIST_getInstance()
  }
  ListLikeDescriptor.prototype._get_elementsCount__12 = function() {
    return this._elementsCount_0
  }
  ListLikeDescriptor.prototype.getElementName_12 = function(index) {
    return index.toString()
  }
  ListLikeDescriptor.prototype.getElementIndex_12 = function(name) {
    var tmp0_elvis_lhs = toIntOrNull(name)
    var tmp
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(
        "" + name + " is not a valid list index"
      )
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  ListLikeDescriptor.prototype.getElementDescriptor_12 = function(index) {
    var tmp0_require_0 = index >= 0
    if (!tmp0_require_0) {
      var message_1 =
        "" +
        "Illegal index " +
        index +
        ", " +
        this._get_serialName__12() +
        " expects only non-negative indices"
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    return this._elementDescriptor
  }
  ListLikeDescriptor.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof ListLikeDescriptor)) return false
    else {
    }
    if (
      equals_0(this._elementDescriptor, other._elementDescriptor)
        ? this._get_serialName__12() === other._get_serialName__12()
        : false
    )
      return true
    return false
  }
  ListLikeDescriptor.prototype.hashCode = function() {
    return (
      (imul(hashCode(this._elementDescriptor), 31) +
        getStringHashCode(this._get_serialName__12())) |
      0
    )
  }
  ListLikeDescriptor.$metadata$ = {
    simpleName: "ListLikeDescriptor",
    kind: "class",
    interfaces: [SerialDescriptor],
  }
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this._serialName_2 = serialName
    this._keyDescriptor = keyDescriptor
    this._valueDescriptor = valueDescriptor
    this._elementsCount_1 = 2
  }
  MapLikeDescriptor.prototype._get_serialName__12 = function() {
    return this._serialName_2
  }
  MapLikeDescriptor.prototype._get_kind__12 = function() {
    return MAP_getInstance()
  }
  MapLikeDescriptor.prototype._get_elementsCount__12 = function() {
    return this._elementsCount_1
  }
  MapLikeDescriptor.prototype.getElementName_12 = function(index) {
    return index.toString()
  }
  MapLikeDescriptor.prototype.getElementIndex_12 = function(name) {
    var tmp0_elvis_lhs = toIntOrNull(name)
    var tmp
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(
        "" + name + " is not a valid map index"
      )
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  MapLikeDescriptor.prototype.getElementDescriptor_12 = function(index) {
    var tmp0_require_0 = index >= 0
    if (!tmp0_require_0) {
      var message_1 =
        "" +
        "Illegal index " +
        index +
        ", " +
        this._get_serialName__12() +
        " expects only non-negative indices"
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    var tmp0_subject = index % 2
    var tmp
    switch (tmp0_subject) {
      case 0:
        tmp = this._keyDescriptor
        break
      case 1:
        tmp = this._valueDescriptor
        break
      default:
        var tmp1_error_0 = "Unreached"
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0))
    }
    return tmp
  }
  MapLikeDescriptor.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof MapLikeDescriptor)) return false
    else {
    }
    if (!(this._get_serialName__12() === other._get_serialName__12()))
      return false
    if (!equals_0(this._keyDescriptor, other._keyDescriptor)) return false
    if (!equals_0(this._valueDescriptor, other._valueDescriptor)) return false
    return true
  }
  MapLikeDescriptor.prototype.hashCode = function() {
    var result = getStringHashCode(this._get_serialName__12())
    result = (imul(31, result) + hashCode(this._keyDescriptor)) | 0
    result = (imul(31, result) + hashCode(this._valueDescriptor)) | 0
    return result
  }
  MapLikeDescriptor.$metadata$ = {
    simpleName: "MapLikeDescriptor",
    kind: "class",
    interfaces: [SerialDescriptor],
  }
  function HashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer)
    this._descriptor_0 = new HashSetClassDesc(eSerializer._get_descriptor__32())
  }
  HashSetSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_0
  }
  HashSetSerializer.prototype.builder_6 = function() {
    return HashSet_init_$Create$()
  }
  HashSetSerializer.prototype.builderSize = function(_this__0) {
    return _this__0._get_size__27()
  }
  HashSetSerializer.prototype.builderSize_11 = function(_this__0) {
    return this.builderSize(
      _this__0 instanceof HashSet ? _this__0 : THROW_CCE()
    )
  }
  HashSetSerializer.prototype.toResult = function(_this__0) {
    return _this__0
  }
  HashSetSerializer.prototype.toResult_11 = function(_this__0) {
    return this.toResult(_this__0 instanceof HashSet ? _this__0 : THROW_CCE())
  }
  HashSetSerializer.prototype.toBuilder_7 = function(_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof HashSet ? _this__0 : null
    return tmp0_elvis_lhs == null
      ? HashSet_init_$Create$_0(_this__0)
      : tmp0_elvis_lhs
  }
  HashSetSerializer.prototype.toBuilder_11 = function(_this__0) {
    return this.toBuilder_7(
      (!(_this__0 == null)
      ? isInterface(_this__0, Set)
      : false)
        ? _this__0
        : THROW_CCE()
    )
  }
  HashSetSerializer.prototype.checkCapacity = function(_this__0, size) {}
  HashSetSerializer.prototype.checkCapacity_11 = function(_this__0, size) {
    return this.checkCapacity(
      _this__0 instanceof HashSet ? _this__0 : THROW_CCE(),
      size
    )
  }
  HashSetSerializer.prototype.insert = function(_this__0, index, element) {
    _this__0.add_16(element)
    Unit_getInstance()
  }
  HashSetSerializer.prototype.insert_5 = function(_this__0, index, element) {
    var tmp = _this__0 instanceof HashSet ? _this__0 : THROW_CCE()
    return this.insert(
      tmp,
      index,
      (element == null ? true : isObject(element)) ? element : THROW_CCE()
    )
  }
  HashSetSerializer.$metadata$ = {
    simpleName: "HashSetSerializer",
    kind: "class",
    interfaces: [],
  }
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer)
    this._descriptor_1 = new LinkedHashMapClassDesc(
      kSerializer._get_descriptor__32(),
      vSerializer._get_descriptor__32()
    )
  }
  LinkedHashMapSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_1
  }
  LinkedHashMapSerializer.prototype.builder_6 = function() {
    return LinkedHashMap_init_$Create$()
  }
  LinkedHashMapSerializer.prototype.builderSize_1 = function(_this__0) {
    return _this__0._get_size__27()
  }
  LinkedHashMapSerializer.prototype.builderSize_11 = function(_this__0) {
    return this.builderSize_1(
      _this__0 instanceof LinkedHashMap ? _this__0 : THROW_CCE()
    )
  }
  LinkedHashMapSerializer.prototype.toResult_1 = function(_this__0) {
    return _this__0
  }
  LinkedHashMapSerializer.prototype.toResult_11 = function(_this__0) {
    return this.toResult_1(
      _this__0 instanceof LinkedHashMap ? _this__0 : THROW_CCE()
    )
  }
  LinkedHashMapSerializer.prototype.toBuilder_3 = function(_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof LinkedHashMap ? _this__0 : null
    return tmp0_elvis_lhs == null
      ? LinkedHashMap_init_$Create$_1(_this__0)
      : tmp0_elvis_lhs
  }
  LinkedHashMapSerializer.prototype.toBuilder_11 = function(_this__0) {
    return this.toBuilder_3(
      (!(_this__0 == null)
      ? isInterface(_this__0, Map_0)
      : false)
        ? _this__0
        : THROW_CCE()
    )
  }
  LinkedHashMapSerializer.prototype.checkCapacity_1 = function(
    _this__0,
    size
  ) {}
  LinkedHashMapSerializer.prototype.checkCapacity_11 = function(
    _this__0,
    size
  ) {
    return this.checkCapacity_1(
      _this__0 instanceof LinkedHashMap ? _this__0 : THROW_CCE(),
      size
    )
  }
  LinkedHashMapSerializer.$metadata$ = {
    simpleName: "LinkedHashMapSerializer",
    kind: "class",
    interfaces: [],
  }
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer)
    this._descriptor_2 = new HashMapClassDesc(
      kSerializer._get_descriptor__32(),
      vSerializer._get_descriptor__32()
    )
  }
  HashMapSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_2
  }
  HashMapSerializer.prototype.builder_6 = function() {
    return HashMap_init_$Create$()
  }
  HashMapSerializer.prototype.builderSize_3 = function(_this__0) {
    return _this__0._get_size__27()
  }
  HashMapSerializer.prototype.builderSize_11 = function(_this__0) {
    return this.builderSize_3(
      _this__0 instanceof HashMap ? _this__0 : THROW_CCE()
    )
  }
  HashMapSerializer.prototype.toResult_3 = function(_this__0) {
    return _this__0
  }
  HashMapSerializer.prototype.toResult_11 = function(_this__0) {
    return this.toResult_3(_this__0 instanceof HashMap ? _this__0 : THROW_CCE())
  }
  HashMapSerializer.prototype.toBuilder_3 = function(_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof HashMap ? _this__0 : null
    return tmp0_elvis_lhs == null
      ? HashMap_init_$Create$_2(_this__0)
      : tmp0_elvis_lhs
  }
  HashMapSerializer.prototype.toBuilder_11 = function(_this__0) {
    return this.toBuilder_3(
      (!(_this__0 == null)
      ? isInterface(_this__0, Map_0)
      : false)
        ? _this__0
        : THROW_CCE()
    )
  }
  HashMapSerializer.prototype.checkCapacity_3 = function(_this__0, size) {}
  HashMapSerializer.prototype.checkCapacity_11 = function(_this__0, size) {
    return this.checkCapacity_3(
      _this__0 instanceof HashMap ? _this__0 : THROW_CCE(),
      size
    )
  }
  HashMapSerializer.$metadata$ = {
    simpleName: "HashMapSerializer",
    kind: "class",
    interfaces: [],
  }
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element)
    this._descriptor_3 = new ArrayListClassDesc(element._get_descriptor__32())
  }
  ArrayListSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_3
  }
  ArrayListSerializer.prototype.builder_6 = function() {
    return ArrayList_init_$Create$()
  }
  ArrayListSerializer.prototype.builderSize_5 = function(_this__0) {
    return _this__0._get_size__27()
  }
  ArrayListSerializer.prototype.builderSize_11 = function(_this__0) {
    return this.builderSize_5(
      _this__0 instanceof ArrayList ? _this__0 : THROW_CCE()
    )
  }
  ArrayListSerializer.prototype.toResult_5 = function(_this__0) {
    return _this__0
  }
  ArrayListSerializer.prototype.toResult_11 = function(_this__0) {
    return this.toResult_5(
      _this__0 instanceof ArrayList ? _this__0 : THROW_CCE()
    )
  }
  ArrayListSerializer.prototype.toBuilder_5 = function(_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof ArrayList ? _this__0 : null
    return tmp0_elvis_lhs == null
      ? ArrayList_init_$Create$_1(_this__0)
      : tmp0_elvis_lhs
  }
  ArrayListSerializer.prototype.toBuilder_11 = function(_this__0) {
    return this.toBuilder_5(
      (!(_this__0 == null)
      ? isInterface(_this__0, List)
      : false)
        ? _this__0
        : THROW_CCE()
    )
  }
  ArrayListSerializer.prototype.checkCapacity_5 = function(_this__0, size) {
    return _this__0.ensureCapacity(size)
  }
  ArrayListSerializer.prototype.checkCapacity_11 = function(_this__0, size) {
    return this.checkCapacity_5(
      _this__0 instanceof ArrayList ? _this__0 : THROW_CCE(),
      size
    )
  }
  ArrayListSerializer.prototype.insert_1 = function(_this__0, index, element) {
    _this__0.add_7(index, element)
  }
  ArrayListSerializer.prototype.insert_5 = function(_this__0, index, element) {
    var tmp = _this__0 instanceof ArrayList ? _this__0 : THROW_CCE()
    return this.insert_1(
      tmp,
      index,
      (element == null ? true : isObject(element)) ? element : THROW_CCE()
    )
  }
  ArrayListSerializer.$metadata$ = {
    simpleName: "ArrayListSerializer",
    kind: "class",
    interfaces: [],
  }
  function LinkedHashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer)
    this._descriptor_4 = new LinkedHashSetClassDesc(
      eSerializer._get_descriptor__32()
    )
  }
  LinkedHashSetSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_4
  }
  LinkedHashSetSerializer.prototype.builder_6 = function() {
    return LinkedHashSet_init_$Create$()
  }
  LinkedHashSetSerializer.prototype.builderSize_7 = function(_this__0) {
    return _this__0._get_size__27()
  }
  LinkedHashSetSerializer.prototype.builderSize_11 = function(_this__0) {
    return this.builderSize_7(
      _this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE()
    )
  }
  LinkedHashSetSerializer.prototype.toResult_7 = function(_this__0) {
    return _this__0
  }
  LinkedHashSetSerializer.prototype.toResult_11 = function(_this__0) {
    return this.toResult_7(
      _this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE()
    )
  }
  LinkedHashSetSerializer.prototype.toBuilder_7 = function(_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof LinkedHashSet ? _this__0 : null
    return tmp0_elvis_lhs == null
      ? LinkedHashSet_init_$Create$_0(_this__0)
      : tmp0_elvis_lhs
  }
  LinkedHashSetSerializer.prototype.toBuilder_11 = function(_this__0) {
    return this.toBuilder_7(
      (!(_this__0 == null)
      ? isInterface(_this__0, Set)
      : false)
        ? _this__0
        : THROW_CCE()
    )
  }
  LinkedHashSetSerializer.prototype.checkCapacity_7 = function(
    _this__0,
    size
  ) {}
  LinkedHashSetSerializer.prototype.checkCapacity_11 = function(
    _this__0,
    size
  ) {
    return this.checkCapacity_7(
      _this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE(),
      size
    )
  }
  LinkedHashSetSerializer.prototype.insert_3 = function(
    _this__0,
    index,
    element
  ) {
    _this__0.add_16(element)
    Unit_getInstance()
  }
  LinkedHashSetSerializer.prototype.insert_5 = function(
    _this__0,
    index,
    element
  ) {
    var tmp = _this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE()
    return this.insert_3(
      tmp,
      index,
      (element == null ? true : isObject(element)) ? element : THROW_CCE()
    )
  }
  LinkedHashSetSerializer.$metadata$ = {
    simpleName: "LinkedHashSetSerializer",
    kind: "class",
    interfaces: [],
  }
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this)
    this._elementSerializer = elementSerializer
  }
  ListLikeSerializer.prototype.readAll_6 = function(
    decoder,
    builder,
    startIndex,
    size
  ) {
    var tmp0_require_0 = size >= 0
    if (!tmp0_require_0) {
      var message_1 = "Size must be known in advance when using READ_ALL"
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    var inductionVariable = 0
    var last_0 = (size - 1) | 0
    if (!(size === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var index = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        this.readElement_6(decoder, (startIndex + index) | 0, builder, false)
      } while (inductionVariable <= last_0)
  }
  ListLikeSerializer.prototype.readElement_6 = function(
    decoder,
    index,
    builder,
    checkIndex
  ) {
    var tmp = this._get_descriptor__32()
    this.insert_5(
      builder,
      index,
      decoder.decodeSerializableElement$default_7(
        tmp,
        index,
        this._elementSerializer,
        null,
        8,
        null
      )
    )
  }
  ListLikeSerializer.$metadata$ = {
    simpleName: "ListLikeSerializer",
    kind: "class",
    interfaces: [],
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this)
    this._keySerializer = keySerializer
    this._valueSerializer = valueSerializer
  }
  MapLikeSerializer.prototype.readAll_6 = function(
    decoder,
    builder,
    startIndex,
    size
  ) {
    var tmp0_require_0 = size >= 0
    if (!tmp0_require_0) {
      var message_1 = "Size must be known in advance when using READ_ALL"
      throw IllegalArgumentException_init_$Create$(toString_1(message_1))
    }
    var untilArg = imul(size, 2)
    var nestedLast = (untilArg - 1) | 0
    var inductionVariable = 0
    var last_0 = getProgressionLastElement(0, nestedLast, 2)
    if (!(untilArg === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var index = inductionVariable
        inductionVariable = (inductionVariable + 2) | 0
        this.readElement_6(decoder, (startIndex + index) | 0, builder, false)
      } while (!(index === last_0))
  }
  MapLikeSerializer.prototype.readElement_6 = function(
    decoder,
    index,
    builder,
    checkIndex
  ) {
    var tmp = this._get_descriptor__32()
    var key = decoder.decodeSerializableElement$default_7(
      tmp,
      index,
      this._keySerializer,
      null,
      8,
      null
    )
    var tmp_0
    if (checkIndex) {
      var tmp0_also_0 = decoder.decodeElementIndex_7(this._get_descriptor__32())
      var tmp0_require_0_2 = tmp0_also_0 === ((index + 1) | 0)
      if (!tmp0_require_0_2) {
        var message_1_3 =
          "" +
          "Value must follow key in a map, index for key: " +
          index +
          ", returned index for value: " +
          tmp0_also_0
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_3))
      }
      tmp_0 = tmp0_also_0
    } else {
      tmp_0 = (index + 1) | 0
    }
    var vIndex = tmp_0
    var tmp_1
    var tmp_2
    if (builder.containsKey_8(key)) {
      var tmp_3 = this._valueSerializer._get_descriptor__32()._get_kind__12()
      tmp_2 = !(tmp_3 instanceof PrimitiveKind)
    } else {
      tmp_2 = false
    }
    if (tmp_2) {
      tmp_1 = decoder.decodeSerializableElement_16(
        this._get_descriptor__32(),
        vIndex,
        this._valueSerializer,
        getValue(builder, key)
      )
    } else {
      {
        var tmp_4 = this._get_descriptor__32()
        tmp_1 = decoder.decodeSerializableElement$default_7(
          tmp_4,
          vIndex,
          this._valueSerializer,
          null,
          8,
          null
        )
      }
    }
    var value = tmp_1
    builder.put_5(key, value)
    Unit_getInstance()
  }
  MapLikeSerializer.$metadata$ = {
    simpleName: "MapLikeSerializer",
    kind: "class",
    interfaces: [],
  }
  function AbstractCollectionSerializer() {}
  AbstractCollectionSerializer.prototype.merge_6 = function(decoder, previous) {
    var tmp0_safe_receiver = previous
    var tmp1_elvis_lhs =
      tmp0_safe_receiver == null ? null : this.toBuilder_11(tmp0_safe_receiver)
    var builder = tmp1_elvis_lhs == null ? this.builder_6() : tmp1_elvis_lhs
    var startIndex = this.builderSize_11(builder)
    var compositeDecoder = decoder.beginStructure_16(this._get_descriptor__32())
    if (compositeDecoder.decodeSequentially_7()) {
      this.readAll_6(
        compositeDecoder,
        builder,
        startIndex,
        readSize(this, compositeDecoder, builder)
      )
    } else {
      while (true) {
        var index = compositeDecoder.decodeElementIndex_7(
          this._get_descriptor__32()
        )
        if (index === -1) break
        var tmp = (startIndex + index) | 0
        this.readElement$default_6(
          compositeDecoder,
          tmp,
          builder,
          false,
          8,
          null
        )
      }
    }
    compositeDecoder.endStructure_7(this._get_descriptor__32())
    return this.toResult_11(builder)
  }
  AbstractCollectionSerializer.prototype.deserialize_32 = function(decoder) {
    return this.merge_6(decoder, null)
  }
  AbstractCollectionSerializer.prototype.readElement$default_6 = function(
    decoder,
    index,
    builder,
    checkIndex,
    $mask0,
    $handler
  ) {
    var checkIndex_0 = !(($mask0 & 8) === 0) ? true : checkIndex
    return $handler == null
      ? this.readElement_6(decoder, index, builder, checkIndex_0)
      : $handler(decoder, index, builder, checkIndex_0)
  }
  AbstractCollectionSerializer.$metadata$ = {
    simpleName: "AbstractCollectionSerializer",
    kind: "class",
    interfaces: [KSerializer],
  }
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_7($this._get_descriptor__32())
    $this.checkCapacity_11(builder, size)
    return size
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor_init_$Init$(
      name,
      null,
      elementsCount,
      2,
      null,
      this
    )
    this._kind_0 = ENUM_getInstance()
    var tmp = this
    tmp._elementDescriptors$delegate = lazy(
      _no_name_provided_$factory_27(elementsCount, name, this)
    )
  }
  EnumDescriptor.prototype._get_kind__12 = function() {
    return this._kind_0
  }
  EnumDescriptor.prototype.getElementDescriptor_12 = function(index) {
    return getChecked(_get_elementDescriptors__0(this), index)
  }
  EnumDescriptor.prototype.equals = function(other) {
    if (this === other) return true
    if (other == null) return false
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false
    else {
    }
    if (!(other._get_kind__12() === ENUM_getInstance())) return false
    if (!(this._get_serialName__12() === other._get_serialName__12()))
      return false
    if (!equals_0(cachedSerialNames(this), cachedSerialNames(other)))
      return false
    return true
  }
  EnumDescriptor.prototype.toString = function() {
    var tmp = _get_elementNames_(this)
    var tmp_0 = "" + this._get_serialName__12() + "("
    return joinToString$default_0(
      tmp,
      ", ",
      tmp_0,
      ")",
      0,
      null,
      null,
      56,
      null
    )
  }
  EnumDescriptor.prototype.hashCode = function() {
    var result = getStringHashCode(this._get_serialName__12())
    var tmp2_elementsHashCodeBy_0 = _get_elementNames_(this)
    var tmp0_fold_0 = 1
    var accumulator_1 = tmp0_fold_0
    var tmp0_iterator_2 = tmp2_elementsHashCodeBy_0.iterator_37()
    while (tmp0_iterator_2.hasNext_14()) {
      var element_3 = tmp0_iterator_2.next_14()
      var tmp1__anonymous__1_4 = accumulator_1
      var tmp = imul(31, tmp1__anonymous__1_4)
      var tmp0_hashCode_0_5 = element_3
      var tmp0_safe_receiver_2_7 = tmp0_hashCode_0_5
      var tmp1_elvis_lhs_1_6 =
        tmp0_safe_receiver_2_7 == null ? null : hashCode(tmp0_safe_receiver_2_7)
      accumulator_1 =
        (tmp + (tmp1_elvis_lhs_1_6 == null ? 0 : tmp1_elvis_lhs_1_6)) | 0
    }
    var elementsHashCode = accumulator_1
    result = (imul(31, result) + elementsHashCode) | 0
    return result
  }
  EnumDescriptor.$metadata$ = {
    simpleName: "EnumDescriptor",
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided_$factory_27($elementsCount, $name, $this) {
    var i = new _no_name_provided__35($elementsCount, $name, $this)
    return function() {
      return i.invoke_60()
    }
  }
  function _get_elementDescriptors__0($this) {
    var tmp0_getValue_0 = $this._elementDescriptors$delegate
    var tmp1_getValue_0 = elementDescriptors$factory()
    return tmp0_getValue_0._get_value__11()
  }
  function _no_name_provided__35($elementsCount, $name, $this) {
    this._$elementsCount = $elementsCount
    this._$name = $name
    this._$this_17 = $this
  }
  _no_name_provided__35.prototype.invoke_60 = function() {
    var tmp0 = 0
    var tmp1 = this._$elementsCount
    var tmp2 = fillArrayVal(Array(tmp1), null)
    while (tmp0 < tmp1) {
      var tmp3 = tmp0
      var tmp = this._$name + "." + this._$this_17.getElementName_12(tmp3)
      var tmp_0 = OBJECT_getInstance()
      var tmp_1 = []
      tmp2[tmp3] = buildSerialDescriptor$default(
        tmp,
        tmp_0,
        tmp_1,
        null,
        12,
        null
      )
      tmp0 = (tmp0 + 1) | 0
    }
    return tmp2
  }
  _no_name_provided__35.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function NullableSerializer(serializer_9) {
    this._serializer = serializer_9
    this._descriptor_5 = new SerialDescriptorForNullable(
      this._serializer._get_descriptor__32()
    )
  }
  NullableSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_5
  }
  NullableSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeNotNullMark_7()
      ? decoder.decodeSerializableValue_15(this._serializer)
      : decoder.decodeNull_7()
  }
  NullableSerializer.prototype.equals = function(other) {
    if (this === other) return true
    if (
      other == null
        ? true
        : !getKClassFromExpression_0(this).equals(
            getKClassFromExpression_0(other)
          )
    )
      return false
    if (other instanceof NullableSerializer) other
    else THROW_CCE()
    Unit_getInstance()
    if (!equals_0(this._serializer, other._serializer)) return false
    return true
  }
  NullableSerializer.prototype.hashCode = function() {
    return hashCode(this._serializer)
  }
  NullableSerializer.$metadata$ = {
    simpleName: "NullableSerializer",
    kind: "class",
    interfaces: [KSerializer],
  }
  function SerialDescriptorForNullable(original) {
    this._original_0 = original
    this._serialName_3 = this._original_0._get_serialName__12() + "?"
  }
  SerialDescriptorForNullable.prototype.getElementDescriptor_12 = function(
    index
  ) {
    return this._original_0.getElementDescriptor_12(index)
  }
  SerialDescriptorForNullable.prototype.getElementIndex_12 = function(name) {
    return this._original_0.getElementIndex_12(name)
  }
  SerialDescriptorForNullable.prototype.getElementName_12 = function(index) {
    return this._original_0.getElementName_12(index)
  }
  SerialDescriptorForNullable.prototype._get_elementsCount__12 = function() {
    return this._original_0._get_elementsCount__12()
  }
  SerialDescriptorForNullable.prototype._get_kind__12 = function() {
    return this._original_0._get_kind__12()
  }
  SerialDescriptorForNullable.prototype._get_serialName__12 = function() {
    return this._serialName_3
  }
  SerialDescriptorForNullable.prototype._get_isNullable__12 = function() {
    return true
  }
  SerialDescriptorForNullable.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof SerialDescriptorForNullable)) return false
    else {
    }
    if (!equals_0(this._original_0, other._original_0)) return false
    return true
  }
  SerialDescriptorForNullable.prototype.toString = function() {
    return "" + this._original_0 + "?"
  }
  SerialDescriptorForNullable.prototype.hashCode = function() {
    return imul(hashCode(this._original_0), 31)
  }
  SerialDescriptorForNullable.$metadata$ = {
    simpleName: "SerialDescriptorForNullable",
    kind: "class",
    interfaces: [SerialDescriptor],
  }
  function ObjectSerializer(serialName, objectInstance) {
    this._objectInstance = objectInstance
    var tmp = this
    var tmp_0 = OBJECT_getInstance()
    var tmp_1 = []
    tmp._descriptor_6 = buildSerialDescriptor$default(
      serialName,
      tmp_0,
      tmp_1,
      null,
      12,
      null
    )
  }
  ObjectSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_6
  }
  ObjectSerializer.prototype.deserialize_32 = function(decoder) {
    decoder
      .beginStructure_16(this._descriptor_6)
      .endStructure_7(this._descriptor_6)
    return this._objectInstance
  }
  ObjectSerializer.$metadata$ = {
    simpleName: "ObjectSerializer",
    kind: "class",
    interfaces: [KSerializer],
  }
  var EMPTY_DESCRIPTOR_ARRAY
  function compactArray(_this_) {
    var tmp
    if (!(_this_ == null ? true : _this_.isEmpty_28())) {
      tmp = _this_
    } else {
      {
        tmp = null
      }
    }
    var tmp0_safe_receiver = tmp
    var tmp_0
    if (tmp0_safe_receiver == null) {
      tmp_0 = null
    } else {
      tmp_0 = copyToArray_0(tmp0_safe_receiver)
    }
    var tmp1_elvis_lhs = tmp_0
    return tmp1_elvis_lhs == null ? EMPTY_DESCRIPTOR_ARRAY : tmp1_elvis_lhs
  }
  function cachedSerialNames(_this_) {
    if (_this_ instanceof PluginGeneratedSerialDescriptor)
      return _this_._get_namesSet__0()
    else {
    }
    var result = HashSet_init_$Create$_1(_this_._get_elementsCount__12())
    var untilArg = _this_._get_elementsCount__12()
    var inductionVariable = 0
    var last_0 = (untilArg - 1) | 0
    if (!(untilArg === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var tmp0_plusAssign_0 = _this_.getElementName_12(i)
        result.add_16(tmp0_plusAssign_0)
        Unit_getInstance()
      } while (inductionVariable <= last_0)
    return result
  }
  function getElementIndexOrThrow(_this_, name) {
    var index = _this_.getElementIndex_12(name)
    if (index === -3)
      throw SerializationException_init_$Create$(
        "" +
          _this_._get_serialName__12() +
          " does not contain element with name '" +
          name +
          "'"
      )
    return index
  }
  function EMPTY_DESCRIPTOR_ARRAY$init$() {
    var tmp0_arrayOf_0 = []
    return tmp0_arrayOf_0
  }
  function PluginGeneratedSerialDescriptor(
    serialName,
    generatedSerializer,
    elementsCount
  ) {
    this._serialName_4 = serialName
    this._generatedSerializer = generatedSerializer
    this._elementsCount_2 = elementsCount
    this._added = -1
    var tmp = this
    var tmp0 = 0
    var tmp1 = this._elementsCount_2
    var tmp2 = fillArrayVal(Array(tmp1), null)
    while (tmp0 < tmp1) {
      var tmp3 = tmp0
      tmp2[tmp3] = "[UNINITIALIZED]"
      tmp0 = (tmp0 + 1) | 0
    }
    tmp._names = tmp2
    var tmp_0 = this
    var tmp0_arrayOfNulls_0 = this._elementsCount_2
    tmp_0._propertiesAnnotations = fillArrayVal(
      Array(tmp0_arrayOfNulls_0),
      null
    )
    this._classAnnotations = null
    this._elementsOptionality = booleanArray(this._elementsCount_2)
    var tmp_1 = this
    tmp_1._indices$delegate = lazy(_no_name_provided_$factory_28(this))
    var tmp_2 = this
    tmp_2._typeParameterDescriptors$delegate = lazy(
      _no_name_provided_$factory_29(this)
    )
    var tmp_3 = this
    tmp_3.__hashCode$delegate_0 = lazy(_no_name_provided_$factory_30(this))
  }
  PluginGeneratedSerialDescriptor.prototype._get_serialName__12 = function() {
    return this._serialName_4
  }
  PluginGeneratedSerialDescriptor.prototype._get_elementsCount__12 = function() {
    return this._elementsCount_2
  }
  PluginGeneratedSerialDescriptor.prototype._get_kind__12 = function() {
    return CLASS_getInstance()
  }
  PluginGeneratedSerialDescriptor.prototype._get_namesSet__0 = function() {
    return _get_indices__0(this)._get_keys__5()
  }
  PluginGeneratedSerialDescriptor.prototype.addElement_0 = function(
    name,
    isOptional
  ) {
    var tmp0_this = this
    tmp0_this._added = (tmp0_this._added + 1) | 0
    this._names[tmp0_this._added] = name
    this._elementsOptionality[this._added] = isOptional
    this._propertiesAnnotations[this._added] = null
  }
  PluginGeneratedSerialDescriptor.prototype.getElementDescriptor_12 = function(
    index
  ) {
    var tmp0_safe_receiver = this._generatedSerializer
    var tmp1_safe_receiver =
      tmp0_safe_receiver == null
        ? null
        : tmp0_safe_receiver.childSerializers_6()
    var tmp2_safe_receiver =
      tmp1_safe_receiver == null ? null : tmp1_safe_receiver[index]
    var tmp3_elvis_lhs =
      tmp2_safe_receiver == null
        ? null
        : tmp2_safe_receiver._get_descriptor__32()
    var tmp
    if (tmp3_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$(
        "" +
          this._get_serialName__12() +
          " descriptor has only " +
          this._elementsCount_2 +
          " elements, index: " +
          index
      )
    } else {
      tmp = tmp3_elvis_lhs
    }
    return tmp
  }
  PluginGeneratedSerialDescriptor.prototype.getElementName_12 = function(
    index
  ) {
    return getChecked(this._names, index)
  }
  PluginGeneratedSerialDescriptor.prototype.getElementIndex_12 = function(
    name
  ) {
    var tmp0_elvis_lhs = _get_indices__0(this).get_16(name)
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs
  }
  PluginGeneratedSerialDescriptor.prototype.equals = function(other) {
    var tmp$ret$0
    l$ret$1: do {
      if (this === other) {
        tmp$ret$0 = true
        break l$ret$1
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false
        break l$ret$1
      } else {
      }
      if (!(this._get_serialName__12() === other._get_serialName__12())) {
        tmp$ret$0 = false
        break l$ret$1
      }
      var tmp0__anonymous__3 = other
      if (
        !contentEquals(
          _get_typeParameterDescriptors_(this),
          _get_typeParameterDescriptors_(tmp0__anonymous__3)
        )
      ) {
        tmp$ret$0 = false
        break l$ret$1
      } else {
      }
      if (!(this._get_elementsCount__12() === other._get_elementsCount__12())) {
        tmp$ret$0 = false
        break l$ret$1
      }
      var untilArg = this._get_elementsCount__12()
      var inductionVariable = 0
      var last_0 = (untilArg - 1) | 0
      if (!(untilArg === -2147483648) ? inductionVariable <= last_0 : false)
        do {
          var index_2 = inductionVariable
          inductionVariable = (inductionVariable + 1) | 0
          if (
            !(
              this.getElementDescriptor_12(index_2)._get_serialName__12() ===
              other.getElementDescriptor_12(index_2)._get_serialName__12()
            )
          ) {
            tmp$ret$0 = false
            break l$ret$1
          }
          if (
            !equals_0(
              this.getElementDescriptor_12(index_2)._get_kind__12(),
              other.getElementDescriptor_12(index_2)._get_kind__12()
            )
          ) {
            tmp$ret$0 = false
            break l$ret$1
          }
        } while (inductionVariable <= last_0)
      tmp$ret$0 = true
    } while (false)
    return tmp$ret$0
  }
  PluginGeneratedSerialDescriptor.prototype.hashCode = function() {
    return _get__hashCode__0(this)
  }
  PluginGeneratedSerialDescriptor.prototype.toString = function() {
    var tmp = _get_indices__0(this)._get_entries__5()
    var tmp_0 = "" + this._get_serialName__12() + "("
    return joinToString$default_0(
      tmp,
      ", ",
      tmp_0,
      ")",
      0,
      null,
      _no_name_provided_$factory_31(this),
      24,
      null
    )
  }
  PluginGeneratedSerialDescriptor.$metadata$ = {
    simpleName: "PluginGeneratedSerialDescriptor",
    kind: "class",
    interfaces: [SerialDescriptor],
  }
  function _no_name_provided_$factory_28($this) {
    var i = new _no_name_provided__36($this)
    return function() {
      return i.invoke_60()
    }
  }
  function _no_name_provided_$factory_29($this) {
    var i = new _no_name_provided__37($this)
    return function() {
      return i.invoke_60()
    }
  }
  function _no_name_provided_$factory_30($this) {
    var i = new _no_name_provided__38($this)
    return function() {
      return i.invoke_60()
    }
  }
  function _no_name_provided_$factory_31($this) {
    var i = new _no_name_provided__39($this)
    return function(p1) {
      return i.invoke_57(p1)
    }
  }
  function PluginGeneratedSerialDescriptor_init_$Init$(
    serialName,
    generatedSerializer,
    elementsCount,
    $mask0,
    $marker,
    $this
  ) {
    var generatedSerializer_0 = !(($mask0 & 2) === 0)
      ? null
      : generatedSerializer
    PluginGeneratedSerialDescriptor.call(
      $this,
      serialName,
      generatedSerializer_0,
      elementsCount
    )
    return $this
  }
  function _get_indices__0($this) {
    var tmp0_getValue_0 = $this._indices$delegate
    var tmp1_getValue_0 = indices$factory()
    return tmp0_getValue_0._get_value__11()
  }
  function _get_typeParameterDescriptors_($this) {
    var tmp0_getValue_0 = $this._typeParameterDescriptors$delegate
    var tmp1_getValue_0 = typeParameterDescriptors$factory()
    return tmp0_getValue_0._get_value__11()
  }
  function _get__hashCode__0($this) {
    var tmp0_getValue_0 = $this.__hashCode$delegate_0
    var tmp1_getValue_0 = _hashCode$factory_0()
    return tmp0_getValue_0._get_value__11()
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$()
    var inductionVariable = 0
    var last_0 = ($this._names.length - 1) | 0
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var tmp0_set_0 = $this._names[i]
        indices.put_5(tmp0_set_0, i)
        Unit_getInstance()
      } while (inductionVariable <= last_0)
    return indices
  }
  function _no_name_provided__36($this) {
    this._$this_18 = $this
  }
  _no_name_provided__36.prototype.invoke_60 = function() {
    return buildIndices(this._$this_18)
  }
  _no_name_provided__36.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__37($this) {
    this._$this_19 = $this
  }
  _no_name_provided__37.prototype.invoke_60 = function() {
    var tmp0_safe_receiver = this._$this_19._generatedSerializer
    var tmp1_safe_receiver =
      tmp0_safe_receiver == null
        ? null
        : tmp0_safe_receiver.typeParametersSerializers_6()
    var tmp
    if (tmp1_safe_receiver == null) {
      tmp = null
    } else {
      var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(tmp1_safe_receiver.length)
      var tmp0_iterator_1_2 = arrayIterator(tmp1_safe_receiver)
      while (tmp0_iterator_1_2.hasNext_14()) {
        var item_2_3 = tmp0_iterator_1_2.next_14()
        tmp0_mapTo_0_1.add_16(item_2_3._get_descriptor__32())
        Unit_getInstance()
      }
      tmp = tmp0_mapTo_0_1
    }
    return compactArray(tmp)
  }
  _no_name_provided__37.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__38($this) {
    this._$this_20 = $this
  }
  _no_name_provided__38.prototype.invoke_60 = function() {
    var tmp0_hashCodeImpl_0 = _get_typeParameterDescriptors_(this._$this_20)
    var result_1 = getStringHashCode(this._$this_20._get_serialName__12())
    result_1 = (imul(31, result_1) + contentHashCode(tmp0_hashCodeImpl_0)) | 0
    var elementDescriptors_2 = _get_elementDescriptors_(this._$this_20)
    var tmp0_fold_0_1_4 = 1
    var accumulator_1_2_5 = tmp0_fold_0_1_4
    var tmp0_iterator_2_3_6 = elementDescriptors_2.iterator_37()
    while (tmp0_iterator_2_3_6.hasNext_14()) {
      var element_3_4_7 = tmp0_iterator_2_3_6.next_14()
      var tmp1__anonymous__4_5_8 = accumulator_1_2_5
      var tmp = imul(31, tmp1__anonymous__4_5_8)
      var tmp0_hashCode_0_5_6_9 = element_3_4_7._get_serialName__12()
      var tmp0_safe_receiver_2_7_8_11 = tmp0_hashCode_0_5_6_9
      var tmp1_elvis_lhs_1_6_7_10 =
        tmp0_safe_receiver_2_7_8_11 == null
          ? null
          : hashCode(tmp0_safe_receiver_2_7_8_11)
      accumulator_1_2_5 =
        (tmp +
          (tmp1_elvis_lhs_1_6_7_10 == null ? 0 : tmp1_elvis_lhs_1_6_7_10)) |
        0
    }
    var namesHash_3 = accumulator_1_2_5
    var tmp0_fold_0_1_13 = 1
    var accumulator_1_2_14 = tmp0_fold_0_1_13
    var tmp0_iterator_2_3_15 = elementDescriptors_2.iterator_37()
    while (tmp0_iterator_2_3_15.hasNext_14()) {
      var element_3_4_16 = tmp0_iterator_2_3_15.next_14()
      var tmp1__anonymous__4_5_17 = accumulator_1_2_14
      var tmp_0 = imul(31, tmp1__anonymous__4_5_17)
      var tmp0_hashCode_0_5_6_18 = element_3_4_16._get_kind__12()
      var tmp0_safe_receiver_2_7_8_20 = tmp0_hashCode_0_5_6_18
      var tmp1_elvis_lhs_1_6_7_19 =
        tmp0_safe_receiver_2_7_8_20 == null
          ? null
          : hashCode(tmp0_safe_receiver_2_7_8_20)
      accumulator_1_2_14 =
        (tmp_0 +
          (tmp1_elvis_lhs_1_6_7_19 == null ? 0 : tmp1_elvis_lhs_1_6_7_19)) |
        0
    }
    var kindHash_12 = accumulator_1_2_14
    result_1 = (imul(31, result_1) + namesHash_3) | 0
    result_1 = (imul(31, result_1) + kindHash_12) | 0
    return result_1
  }
  _no_name_provided__38.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__39($this) {
    this._$this_21 = $this
  }
  _no_name_provided__39.prototype.invoke_57 = function(it) {
    return (
      it._get_key__3() +
      ": " +
      this._$this_21
        .getElementDescriptor_12(it._get_value__11())
        ._get_serialName__12()
    )
  }
  _no_name_provided__39.prototype.invoke_66 = function(p1) {
    return this.invoke_57(
      (!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE()
    )
  }
  _no_name_provided__39.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  var EMPTY_SERIALIZER_ARRAY
  function GeneratedSerializer() {}
  GeneratedSerializer.prototype.typeParametersSerializers_6 = function() {
    return EMPTY_SERIALIZER_ARRAY
  }
  GeneratedSerializer.$metadata$ = {
    simpleName: "GeneratedSerializer",
    kind: "interface",
    interfaces: [KSerializer],
  }
  function EMPTY_SERIALIZER_ARRAY$init$() {
    var tmp0_arrayOf_0 = []
    return tmp0_arrayOf_0
  }
  function StringSerializer() {
    StringSerializer_instance = this
    this._descriptor_7 = new PrimitiveSerialDescriptor(
      "kotlin.String",
      STRING_getInstance()
    )
  }
  StringSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_7
  }
  StringSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeString_7()
  }
  StringSerializer.$metadata$ = {
    simpleName: "StringSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var StringSerializer_instance
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null) new StringSerializer()
    return StringSerializer_instance
  }
  function CharSerializer() {
    CharSerializer_instance = this
    this._descriptor_8 = new PrimitiveSerialDescriptor(
      "kotlin.Char",
      CHAR_getInstance()
    )
  }
  CharSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_8
  }
  CharSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeChar_7()
  }
  CharSerializer.$metadata$ = {
    simpleName: "CharSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var CharSerializer_instance
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null) new CharSerializer()
    return CharSerializer_instance
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this
    this._descriptor_9 = new PrimitiveSerialDescriptor(
      "kotlin.Double",
      DOUBLE_getInstance()
    )
  }
  DoubleSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_9
  }
  DoubleSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeDouble_7()
  }
  DoubleSerializer.$metadata$ = {
    simpleName: "DoubleSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var DoubleSerializer_instance
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null) new DoubleSerializer()
    return DoubleSerializer_instance
  }
  function FloatSerializer() {
    FloatSerializer_instance = this
    this._descriptor_10 = new PrimitiveSerialDescriptor(
      "kotlin.Float",
      FLOAT_getInstance()
    )
  }
  FloatSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_10
  }
  FloatSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeFloat_7()
  }
  FloatSerializer.$metadata$ = {
    simpleName: "FloatSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var FloatSerializer_instance
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null) new FloatSerializer()
    return FloatSerializer_instance
  }
  function LongSerializer() {
    LongSerializer_instance = this
    this._descriptor_11 = new PrimitiveSerialDescriptor(
      "kotlin.Long",
      LONG_getInstance()
    )
  }
  LongSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_11
  }
  LongSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeLong_7()
  }
  LongSerializer.$metadata$ = {
    simpleName: "LongSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var LongSerializer_instance
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null) new LongSerializer()
    return LongSerializer_instance
  }
  function IntSerializer() {
    IntSerializer_instance = this
    this._descriptor_12 = new PrimitiveSerialDescriptor(
      "kotlin.Int",
      INT_getInstance()
    )
  }
  IntSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_12
  }
  IntSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeInt_7()
  }
  IntSerializer.$metadata$ = {
    simpleName: "IntSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var IntSerializer_instance
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null) new IntSerializer()
    return IntSerializer_instance
  }
  function ShortSerializer() {
    ShortSerializer_instance = this
    this._descriptor_13 = new PrimitiveSerialDescriptor(
      "kotlin.Short",
      SHORT_getInstance()
    )
  }
  ShortSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_13
  }
  ShortSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeShort_7()
  }
  ShortSerializer.$metadata$ = {
    simpleName: "ShortSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var ShortSerializer_instance
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null) new ShortSerializer()
    return ShortSerializer_instance
  }
  function ByteSerializer() {
    ByteSerializer_instance = this
    this._descriptor_14 = new PrimitiveSerialDescriptor(
      "kotlin.Byte",
      BYTE_getInstance()
    )
  }
  ByteSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_14
  }
  ByteSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeByte_7()
  }
  ByteSerializer.$metadata$ = {
    simpleName: "ByteSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var ByteSerializer_instance
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null) new ByteSerializer()
    return ByteSerializer_instance
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this
    this._descriptor_15 = new PrimitiveSerialDescriptor(
      "kotlin.Boolean",
      BOOLEAN_getInstance()
    )
  }
  BooleanSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_15
  }
  BooleanSerializer.prototype.deserialize_32 = function(decoder) {
    return decoder.decodeBoolean_7()
  }
  BooleanSerializer.$metadata$ = {
    simpleName: "BooleanSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var BooleanSerializer_instance
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null) new BooleanSerializer()
    return BooleanSerializer_instance
  }
  function UnitSerializer() {
    UnitSerializer_instance = this
    this._$$delegate_0 = new ObjectSerializer("kotlin.Unit", Unit_getInstance())
  }
  UnitSerializer.prototype.deserialize_21 = function(decoder) {
    this._$$delegate_0.deserialize_32(decoder)
  }
  UnitSerializer.prototype.deserialize_32 = function(decoder) {
    this.deserialize_21(decoder)
    return Unit_getInstance()
  }
  UnitSerializer.prototype._get_descriptor__32 = function() {
    return this._$$delegate_0._descriptor_6
  }
  UnitSerializer.$metadata$ = {
    simpleName: "UnitSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var UnitSerializer_instance
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null) new UnitSerializer()
    return UnitSerializer_instance
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this._serialName_5 = serialName
    this._kind_1 = kind
  }
  PrimitiveSerialDescriptor.prototype._get_serialName__12 = function() {
    return this._serialName_5
  }
  PrimitiveSerialDescriptor.prototype._get_kind__12 = function() {
    return this._kind_1
  }
  PrimitiveSerialDescriptor.prototype._get_elementsCount__12 = function() {
    return 0
  }
  PrimitiveSerialDescriptor.prototype.getElementName_12 = function(index) {
    error(this)
  }
  PrimitiveSerialDescriptor.prototype.getElementIndex_12 = function(name) {
    error(this)
  }
  PrimitiveSerialDescriptor.prototype.getElementDescriptor_12 = function(
    index
  ) {
    error(this)
  }
  PrimitiveSerialDescriptor.prototype.toString = function() {
    return "" + "PrimitiveDescriptor(" + this._serialName_5 + ")"
  }
  PrimitiveSerialDescriptor.$metadata$ = {
    simpleName: "PrimitiveSerialDescriptor",
    kind: "class",
    interfaces: [SerialDescriptor],
  }
  function error($this) {
    throw IllegalStateException_init_$Create$(
      "Primitive descriptor does not have elements"
    )
  }
  function NamedValueDecoder(rootName) {
    TaggedDecoder.call(this)
    this._rootName = rootName
  }
  NamedValueDecoder.prototype.getTag_4 = function(_this__0, index) {
    return this.nested_3(this.elementName_3(_this__0, index))
  }
  NamedValueDecoder.prototype.nested_3 = function(nestedName) {
    var tmp0_elvis_lhs = this._get_currentTagOrNull__4()
    return this.composeName_3(
      tmp0_elvis_lhs == null ? this._rootName : tmp0_elvis_lhs,
      nestedName
    )
  }
  NamedValueDecoder.prototype.elementName_3 = function(desc, index) {
    return desc.getElementName_12(index)
  }
  NamedValueDecoder.prototype.composeName_3 = function(parentName, childName) {
    var tmp
    if (charSequenceLength(parentName) === 0) {
      tmp = childName
    } else {
      {
        tmp = "" + parentName + "." + childName
      }
    }
    return tmp
  }
  NamedValueDecoder.$metadata$ = {
    simpleName: "NamedValueDecoder",
    kind: "class",
    interfaces: [],
  }
  function TaggedDecoder() {
    this._updateMode_0 = UpdateMode_OVERWRITE_getInstance()
    var tmp = this
    tmp._tagStack = ArrayList_init_$Create$()
    this._flag = false
  }
  TaggedDecoder.prototype._get_serializersModule__10 = function() {
    return EmptySerializersModule
  }
  TaggedDecoder.prototype.decodeTaggedValue_0 = function(tag) {
    throw SerializationException_init_$Create$(
      "" + getKClassFromExpression_0(this) + " can't retrieve untyped values"
    )
  }
  TaggedDecoder.prototype.decodeTaggedNotNullMark_2 = function(tag) {
    return true
  }
  TaggedDecoder.prototype.decodeTaggedBoolean_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "boolean" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedByte_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedShort_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedInt_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedLong_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return tmp instanceof Long ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedFloat_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedDouble_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedChar_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return tmp instanceof Char ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedString_2 = function(tag) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "string" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeTaggedEnum_2 = function(tag, enumDescription) {
    var tmp = this.decodeTaggedValue_0(tag)
    return typeof tmp === "number" ? tmp : THROW_CCE()
  }
  TaggedDecoder.prototype.decodeSerializableValue_14 = function(
    deserializer,
    previousValue
  ) {
    return this.decodeSerializableValue_15(deserializer)
  }
  TaggedDecoder.prototype.decodeNotNullMark_7 = function() {
    return this.decodeTaggedNotNullMark_2(this._get_currentTag__4())
  }
  TaggedDecoder.prototype.decodeNull_7 = function() {
    return null
  }
  TaggedDecoder.prototype.decodeBoolean_7 = function() {
    return this.decodeTaggedBoolean_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeByte_7 = function() {
    return this.decodeTaggedByte_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeShort_7 = function() {
    return this.decodeTaggedShort_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeInt_7 = function() {
    return this.decodeTaggedInt_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeLong_7 = function() {
    return this.decodeTaggedLong_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeFloat_7 = function() {
    return this.decodeTaggedFloat_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeDouble_7 = function() {
    return this.decodeTaggedDouble_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeChar_7 = function() {
    return this.decodeTaggedChar_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeString_7 = function() {
    return this.decodeTaggedString_2(this.popTag_4())
  }
  TaggedDecoder.prototype.decodeEnum_7 = function(enumDescriptor) {
    return this.decodeTaggedEnum_2(this.popTag_4(), enumDescriptor)
  }
  TaggedDecoder.prototype.beginStructure_15 = function(descriptor, typeParams) {
    return this
  }
  TaggedDecoder.prototype.endStructure_7 = function(descriptor) {}
  TaggedDecoder.prototype.decodeStringElement_7 = function(descriptor, index) {
    return this.decodeTaggedString_2(this.getTag_4(descriptor, index))
  }
  TaggedDecoder.prototype.decodeSerializableElement_16 = function(
    descriptor,
    index,
    deserializer,
    previousValue
  ) {
    var tmp = this.getTag_4(descriptor, index)
    return tagBlock(
      this,
      tmp,
      _no_name_provided_$factory_32(this, deserializer, previousValue)
    )
  }
  TaggedDecoder.prototype.decodeNullableSerializableElement_16 = function(
    descriptor,
    index,
    deserializer,
    previousValue
  ) {
    var tmp = this.getTag_4(descriptor, index)
    return tagBlock(
      this,
      tmp,
      _no_name_provided_$factory_33(this, deserializer, previousValue)
    )
  }
  TaggedDecoder.prototype._get_currentTag__4 = function() {
    return last(this._tagStack)
  }
  TaggedDecoder.prototype._get_currentTagOrNull__4 = function() {
    return lastOrNull(this._tagStack)
  }
  TaggedDecoder.prototype.pushTag_0 = function(name) {
    this._tagStack.add_16(name)
    Unit_getInstance()
  }
  TaggedDecoder.prototype.popTag_4 = function() {
    var r = this._tagStack.removeAt_1(_get_lastIndex__0(this._tagStack))
    this._flag = true
    return r
  }
  TaggedDecoder.$metadata$ = {
    simpleName: "TaggedDecoder",
    kind: "class",
    interfaces: [Decoder, CompositeDecoder],
  }
  function _no_name_provided_$factory_32($this, $deserializer, $previousValue) {
    var i = new _no_name_provided__40($this, $deserializer, $previousValue)
    return function() {
      return i.invoke_60()
    }
  }
  function _no_name_provided_$factory_33($this, $deserializer, $previousValue) {
    var i = new _no_name_provided__41($this, $deserializer, $previousValue)
    return function() {
      return i.invoke_60()
    }
  }
  function NamedValueDecoder_init_$Init$(rootName, $mask0, $marker, $this) {
    var rootName_0 = !(($mask0 & 1) === 0) ? "" : rootName
    NamedValueDecoder.call($this, rootName_0)
    return $this
  }
  function tagBlock($this, tag, block) {
    $this.pushTag_0(tag)
    var r = block()
    if (!$this._flag) {
      $this.popTag_4()
      Unit_getInstance()
    }
    $this._flag = false
    return r
  }
  function _no_name_provided__40($this, $deserializer, $previousValue) {
    this._$this_22 = $this
    this._$deserializer = $deserializer
    this._$previousValue = $previousValue
  }
  _no_name_provided__40.prototype.invoke_60 = function() {
    return this._$this_22.decodeSerializableValue_14(
      this._$deserializer,
      this._$previousValue
    )
  }
  _no_name_provided__40.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided__41($this, $deserializer, $previousValue) {
    this._$this_23 = $this
    this._$deserializer_0 = $deserializer
    this._$previousValue_0 = $previousValue
  }
  _no_name_provided__41.prototype.invoke_60 = function() {
    return this._$this_23.decodeNotNullMark_7()
      ? this._$this_23.decodeSerializableValue_14(
          this._$deserializer_0,
          this._$previousValue_0
        )
      : this._$this_23.decodeNull_7()
  }
  _no_name_provided__41.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  var NULL
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer)
    var tmp = this
    var tmp_0 = MAP_getInstance()
    var tmp_1 = []
    tmp._descriptor_16 = buildSerialDescriptor$default(
      "kotlin.collections.Map.Entry",
      tmp_0,
      tmp_1,
      _no_name_provided_$factory_34(keySerializer, valueSerializer),
      4,
      null
    )
  }
  MapEntrySerializer_0.prototype._get_descriptor__32 = function() {
    return this._descriptor_16
  }
  MapEntrySerializer_0.prototype.toResult_13 = function(key, value) {
    return new MapEntry(key, value)
  }
  MapEntrySerializer_0.$metadata$ = {
    simpleName: "MapEntrySerializer",
    kind: "class",
    interfaces: [],
  }
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this._keySerializer_0 = keySerializer
    this._valueSerializer_0 = valueSerializer
  }
  KeyValueSerializer.prototype.deserialize_32 = function(decoder) {
    var composite = decoder.beginStructure_16(this._get_descriptor__32())
    if (composite.decodeSequentially_7()) {
      var tmp = this._get_descriptor__32()
      var key = composite.decodeSerializableElement$default_7(
        tmp,
        0,
        this._keySerializer_0,
        null,
        8,
        null
      )
      var tmp_0 = this._get_descriptor__32()
      var value = composite.decodeSerializableElement$default_7(
        tmp_0,
        1,
        this._valueSerializer_0,
        null,
        8,
        null
      )
      return this.toResult_13(key, value)
    }
    var key_0 = NULL
    var value_0 = NULL
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_7(this._get_descriptor__32())
      switch (idx) {
        case -1:
          break mainLoop
        case 0:
          var tmp_1 = this._get_descriptor__32()
          key_0 = composite.decodeSerializableElement$default_7(
            tmp_1,
            0,
            this._keySerializer_0,
            null,
            8,
            null
          )
          break
        case 1:
          var tmp_2 = this._get_descriptor__32()
          value_0 = composite.decodeSerializableElement$default_7(
            tmp_2,
            1,
            this._valueSerializer_0,
            null,
            8,
            null
          )
          break
        default:
          throw SerializationException_init_$Create$(
            "" + "Invalid index: " + idx
          )
      }
    }
    composite.endStructure_7(this._get_descriptor__32())
    if (key_0 === NULL)
      throw SerializationException_init_$Create$("Element 'key' is missing")
    if (value_0 === NULL)
      throw SerializationException_init_$Create$("Element 'value' is missing")
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE()
    return this.toResult_13(
      tmp_3,
      (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE()
    )
  }
  KeyValueSerializer.$metadata$ = {
    simpleName: "KeyValueSerializer",
    kind: "class",
    interfaces: [KSerializer],
  }
  function _no_name_provided_$factory_34($keySerializer, $valueSerializer) {
    var i = new _no_name_provided__42($keySerializer, $valueSerializer)
    return function(p1) {
      i.invoke_61(p1)
      return Unit_getInstance()
    }
  }
  function MapEntry(key, value) {
    this._key_0 = key
    this._value_1 = value
  }
  MapEntry.prototype._get_key__3 = function() {
    return this._key_0
  }
  MapEntry.prototype._get_value__11 = function() {
    return this._value_1
  }
  MapEntry.prototype.toString = function() {
    return "" + "MapEntry(key=" + this._key_0 + ", value=" + this._value_1 + ")"
  }
  MapEntry.prototype.hashCode = function() {
    return (
      (imul(this._key_0 == null ? 0 : hashCode(this._key_0), 31) +
        (this._value_1 == null ? 0 : hashCode(this._value_1))) |
      0
    )
  }
  MapEntry.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof MapEntry)) return false
    else {
    }
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE()
    if (!equals_0(this._key_0, tmp0_other_with_cast._key_0)) return false
    if (!equals_0(this._value_1, tmp0_other_with_cast._value_1)) return false
    return true
  }
  MapEntry.$metadata$ = {
    simpleName: "MapEntry",
    kind: "class",
    interfaces: [Entry],
  }
  function _no_name_provided__42($keySerializer, $valueSerializer) {
    this._$keySerializer = $keySerializer
    this._$valueSerializer = $valueSerializer
  }
  _no_name_provided__42.prototype.invoke_61 = function(_this__0) {
    var tmp = this._$keySerializer._get_descriptor__32()
    _this__0.element$default("key", tmp, null, false, 12, null)
    var tmp_0 = this._$valueSerializer._get_descriptor__32()
    _this__0.element$default("value", tmp_0, null, false, 12, null)
  }
  _no_name_provided__42.prototype.invoke_66 = function(p1) {
    this.invoke_61(
      p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE()
    )
    return Unit_getInstance()
  }
  _no_name_provided__42.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function Json(configuration) {
    this._configuration = configuration
  }
  Json.prototype._get_configuration__3 = function() {
    return this._configuration
  }
  Json.prototype._get_serializersModule__10 = function() {
    return this._configuration._serializersModule_0
  }
  Json.prototype.decodeFromString_1 = function(deserializer, string) {
    var reader = new JsonReader(string)
    var input = new StreamingJsonDecoder(
      this,
      WriteMode_OBJ_getInstance(),
      reader
    )
    var result = input.decodeSerializableValue_15(deserializer)
    if (!reader._get_isDone_()) {
      var tmp0_error_0 =
        "" + "Reader has not consumed the whole input: " + reader
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0))
    }
    return result
  }
  Json.$metadata$ = {
    simpleName: "Json",
    kind: "class",
    interfaces: [StringFormat],
  }
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from._configuration)
    builderAction(builder)
    var conf = builder.build()
    return new JsonImpl(conf)
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    var from_0 = !(($mask0 & 1) === 0) ? Default_getInstance() : from
    return Json_0(from_0, builderAction)
  }
  function JsonBuilder(conf) {
    this._encodeDefaults = conf._encodeDefaults_0
    this._ignoreUnknownKeys = conf._ignoreUnknownKeys_0
    this._isLenient = conf._isLenient_0
    this._allowStructuredMapKeys = conf._allowStructuredMapKeys_0
    this._prettyPrint = conf._prettyPrint_0
    this._prettyPrintIndent = conf._prettyPrintIndent_0
    this._coerceInputValues = conf._coerceInputValues_0
    this._useArrayPolymorphism = conf._useArrayPolymorphism_0
    this._classDiscriminator = conf._classDiscriminator_0
    this._allowSpecialFloatingPointValues =
      conf._allowSpecialFloatingPointValues_0
    this._serializersModule = conf._serializersModule_0
    this._serializeSpecialFloatingPointValues = false
    this._indent = "    "
    this._strictMode = true
    this._unquoted = false
    this._unquotedPrint = false
    this._serialModule = EmptySerializersModule
  }
  JsonBuilder.prototype.build = function() {
    if (this._useArrayPolymorphism) {
      var tmp0_require_0 =
        this._classDiscriminator ===
        Companion_getInstance_5()._defaultDiscriminator
      if (!tmp0_require_0) {
        var message_1 =
          "Class discriminator should not be specified when array polymorphism is specified"
        throw IllegalArgumentException_init_$Create$(toString_1(message_1))
      }
    }
    if (!this._prettyPrint) {
      var tmp1_require_0 =
        this._prettyPrintIndent === Companion_getInstance_5()._defaultIndent
      if (!tmp1_require_0) {
        var message_1_0 =
          "Indent should not be specified when default printing mode is used"
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0))
      }
    }
    return new JsonConf(
      this._encodeDefaults,
      this._ignoreUnknownKeys,
      this._isLenient,
      this._allowStructuredMapKeys,
      this._prettyPrint,
      this._prettyPrintIndent,
      this._coerceInputValues,
      this._useArrayPolymorphism,
      this._classDiscriminator,
      this._allowSpecialFloatingPointValues,
      this._serializersModule
    )
  }
  JsonBuilder.$metadata$ = {
    simpleName: "JsonBuilder",
    kind: "class",
    interfaces: [],
  }
  function JsonImpl(configuration) {
    Json.call(this, configuration)
    validateConfiguration(this)
  }
  JsonImpl.$metadata$ = {
    simpleName: "JsonImpl",
    kind: "class",
    interfaces: [],
  }
  function Default() {
    Default_instance = this
    Json.call(
      this,
      JsonConf_init_$Create$(
        false,
        false,
        false,
        false,
        false,
        null,
        false,
        false,
        null,
        false,
        null,
        2047,
        null
      )
    )
  }
  Default.$metadata$ = {
    simpleName: "Default",
    kind: "object",
    interfaces: [],
  }
  var Default_instance
  function Default_getInstance() {
    if (Default_instance == null) new Default()
    return Default_instance
  }
  function Companion_6() {
    Companion_instance_5 = this
    this._defaultIndent = "    "
    this._defaultDiscriminator = "type"
  }
  Companion_6.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_5
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null) new Companion_6()
    return Companion_instance_5
  }
  function validateConfiguration($this) {
    if ($this._get_configuration__3()._useArrayPolymorphism_0)
      return Unit_getInstance()
    var collector = new ContextValidator(
      $this._get_configuration__3()._classDiscriminator_0
    )
    $this._get_serializersModule__10().dumpTo_0(collector)
  }
  function JsonDecoder() {}
  JsonDecoder.$metadata$ = {
    simpleName: "JsonDecoder",
    kind: "interface",
    interfaces: [Decoder, CompositeDecoder],
  }
  function JsonPrimitive() {
    JsonElement.call(this)
  }
  JsonPrimitive.prototype.toString = function() {
    return this._get_content__1()
  }
  JsonPrimitive.$metadata$ = {
    simpleName: "JsonPrimitive",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: JsonPrimitiveSerializer_getInstance },
  }
  function JsonElement() {}
  JsonElement.$metadata$ = {
    simpleName: "JsonElement",
    kind: "class",
    interfaces: [],
  }
  function JsonNull() {
    JsonNull_instance = this
    JsonPrimitive.call(this)
    this._content = "null"
  }
  JsonNull.prototype._get_isString__1 = function() {
    return false
  }
  JsonNull.prototype._get_content__1 = function() {
    return this._content
  }
  JsonNull.$metadata$ = {
    simpleName: "JsonNull",
    kind: "object",
    interfaces: [],
  }
  var JsonNull_instance
  function JsonNull_getInstance() {
    if (JsonNull_instance == null) new JsonNull()
    return JsonNull_instance
  }
  function JsonLiteral(body, isString_0) {
    JsonPrimitive.call(this)
    this._isString = isString_0
    this._content_0 = toString_1(body)
  }
  JsonLiteral.prototype._get_isString__1 = function() {
    return this._isString
  }
  JsonLiteral.prototype._get_content__1 = function() {
    return this._content_0
  }
  JsonLiteral.prototype.toString = function() {
    var tmp
    if (this._isString) {
      var tmp0_apply_0_1 = StringBuilder_init_$Create$()
      printQuoted(tmp0_apply_0_1, this._content_0)
      tmp = tmp0_apply_0_1.toString()
    } else {
      tmp = this._content_0
    }
    return tmp
  }
  JsonLiteral.prototype.equals = function(other) {
    if (this === other) return true
    if (
      other == null
        ? true
        : !getKClassFromExpression_0(this).equals(
            getKClassFromExpression_0(other)
          )
    )
      return false
    if (other instanceof JsonLiteral) other
    else THROW_CCE()
    Unit_getInstance()
    if (!(this._isString === other._isString)) return false
    if (!(this._content_0 === other._content_0)) return false
    return true
  }
  JsonLiteral.prototype.hashCode = function() {
    var result = this._isString | 0
    result = (imul(31, result) + getStringHashCode(this._content_0)) | 0
    return result
  }
  JsonLiteral.$metadata$ = {
    simpleName: "JsonLiteral",
    kind: "class",
    interfaces: [],
  }
  function JsonObject(content) {
    JsonElement.call(this)
    this._content_1 = content
  }
  JsonObject.prototype.containsKey_7 = function(key) {
    return this._content_1.containsKey_8(key)
  }
  JsonObject.prototype.containsKey_8 = function(key) {
    if (!(!(key == null) ? typeof key === "string" : false)) return false
    else {
    }
    return this.containsKey_7(
      (!(key == null) ? typeof key === "string" : false) ? key : THROW_CCE()
    )
  }
  JsonObject.prototype.get_15 = function(key) {
    return this._content_1.get_16(key)
  }
  JsonObject.prototype.get_16 = function(key) {
    if (!(!(key == null) ? typeof key === "string" : false)) return null
    else {
    }
    return this.get_15(
      (!(key == null) ? typeof key === "string" : false) ? key : THROW_CCE()
    )
  }
  JsonObject.prototype.isEmpty_28 = function() {
    return this._content_1.isEmpty_28()
  }
  JsonObject.prototype._get_entries__5 = function() {
    return this._content_1._get_entries__5()
  }
  JsonObject.prototype._get_keys__5 = function() {
    return this._content_1._get_keys__5()
  }
  JsonObject.prototype._get_size__27 = function() {
    return this._content_1._get_size__27()
  }
  JsonObject.prototype.equals = function(other) {
    return equals_0(this._content_1, other)
  }
  JsonObject.prototype.hashCode = function() {
    return hashCode(this._content_1)
  }
  JsonObject.prototype.toString = function() {
    var tmp = this._content_1._get_entries__5()
    return joinToString$default_0(
      tmp,
      ",",
      "{",
      "}",
      0,
      null,
      _no_name_provided_$factory_35(),
      24,
      null
    )
  }
  JsonObject.$metadata$ = {
    simpleName: "JsonObject",
    kind: "class",
    interfaces: [Map_0],
  }
  function JsonArray(content) {
    JsonElement.call(this)
    this._content_2 = content
  }
  JsonArray.prototype.containsAll_19 = function(elements) {
    return this._content_2.containsAll_20(elements)
  }
  JsonArray.prototype.containsAll_20 = function(elements) {
    return this.containsAll_19(elements)
  }
  JsonArray.prototype.get_27 = function(index) {
    return this._content_2.get_27(index)
  }
  JsonArray.prototype.isEmpty_28 = function() {
    return this._content_2.isEmpty_28()
  }
  JsonArray.prototype.iterator_37 = function() {
    return this._content_2.iterator_37()
  }
  JsonArray.prototype._get_size__27 = function() {
    return this._content_2._get_size__27()
  }
  JsonArray.prototype.equals = function(other) {
    return equals_0(this._content_2, other)
  }
  JsonArray.prototype.hashCode = function() {
    return hashCode(this._content_2)
  }
  JsonArray.prototype.toString = function() {
    return joinToString$default_0(
      this._content_2,
      ",",
      "[",
      "]",
      0,
      null,
      null,
      56,
      null
    )
  }
  JsonArray.$metadata$ = {
    simpleName: "JsonArray",
    kind: "class",
    interfaces: [List],
  }
  function JsonPrimitive_0(value) {
    if (value == null) return JsonNull_getInstance()
    return new JsonLiteral(value, true)
  }
  function _get_boolean_(_this_) {
    return toBooleanStrict(_this_._get_content__1())
  }
  function _get_int_(_this_) {
    return toInt(_this_._get_content__1())
  }
  function _get_long_(_this_) {
    return toLong(_this_._get_content__1())
  }
  function _get_float_(_this_) {
    var tmp0_toFloat_0 = _this_._get_content__1()
    var tmp0_unsafeCast_0_1 = toDouble(tmp0_toFloat_0)
    return tmp0_unsafeCast_0_1
  }
  function _get_double_(_this_) {
    return toDouble(_this_._get_content__1())
  }
  function _get_contentOrNull_(_this_) {
    var tmp
    if (_this_ instanceof JsonNull) {
      tmp = null
    } else {
      {
        tmp = _this_._get_content__1()
      }
    }
    return tmp
  }
  function _get_jsonPrimitive_(_this_) {
    var tmp0_elvis_lhs = _this_ instanceof JsonPrimitive ? _this_ : null
    var tmp
    if (tmp0_elvis_lhs == null) {
      error_0(_this_, "JsonPrimitive")
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  function error_0(_this_, element) {
    throw IllegalArgumentException_init_$Create$(
      "" +
        "Element " +
        getKClassFromExpression_0(_this_) +
        " is not a " +
        element
    )
  }
  function _no_name_provided_$factory_35() {
    var i = new _no_name_provided__43()
    return function(p1) {
      return i.invoke_63(p1)
    }
  }
  function _no_name_provided__43() {}
  _no_name_provided__43.prototype.invoke_63 = function(
    _name_for_destructuring_parameter_0_
  ) {
    var k = _name_for_destructuring_parameter_0_._get_key__3()
    var v = _name_for_destructuring_parameter_0_._get_value__11()
    return "" + '"' + k + '":' + v
  }
  _no_name_provided__43.prototype.invoke_66 = function(p1) {
    return this.invoke_63(
      (!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE()
    )
  }
  _no_name_provided__43.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this
    var tmp = this
    var tmp_0 = STRING_getInstance()
    var tmp_1 = []
    tmp._descriptor_17 = buildSerialDescriptor$default(
      "kotlinx.serialization.json.JsonPrimitive",
      tmp_0,
      tmp_1,
      null,
      12,
      null
    )
  }
  JsonPrimitiveSerializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_17
  }
  JsonPrimitiveSerializer.prototype.deserialize_32 = function(decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_4()
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(
        -1,
        "" +
          "Unexpected JSON element, expected JsonPrimitive, had " +
          getKClassFromExpression_0(result),
        toString_1(result)
      )
    else {
    }
    return result
  }
  JsonPrimitiveSerializer.$metadata$ = {
    simpleName: "JsonPrimitiveSerializer",
    kind: "object",
    interfaces: [KSerializer],
  }
  var JsonPrimitiveSerializer_instance
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null) new JsonPrimitiveSerializer()
    return JsonPrimitiveSerializer_instance
  }
  function asJsonDecoder(_this_) {
    var tmp0_elvis_lhs = isInterface(_this_, JsonDecoder) ? _this_ : null
    var tmp
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(
        "This serializer can be used only with Json format." +
          ("" +
            "Expected Decoder to be JsonDecoder, got " +
            getKClassFromExpression_0(_this_))
      )
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  function JsonDecodingException(offset, message) {
    JsonException.call(
      this,
      "" + "Unexpected JSON token at offset " + offset + ": " + message
    )
    captureStack(this, JsonDecodingException)
  }
  JsonDecodingException.$metadata$ = {
    simpleName: "JsonDecodingException",
    kind: "class",
    interfaces: [],
  }
  function JsonDecodingException_0(offset, message, input) {
    return new JsonDecodingException(
      offset,
      "" + message + ".\n JSON input: " + minify(input, offset)
    )
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message)
    captureStack(this, JsonEncodingException)
  }
  JsonEncodingException.$metadata$ = {
    simpleName: "JsonEncodingException",
    kind: "class",
    interfaces: [],
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException(
      "" +
        "Value of type '" +
        keyDescriptor._get_serialName__12() +
        "' can't be used in JSON as a key in the map. " +
        ("" +
          "It should have either primitive or enum kind, but its kind is '" +
          keyDescriptor._get_kind__12() +
          ".'\n") +
        "You can convert such maps to arrays [key1, value1, key2, value2,...] using 'JsonBuilder.allowStructuredMapKeys' property"
    )
  }
  function UnknownKeyException(key, input) {
    var tmp =
      "" +
      "JSON encountered unknown key: '" +
      key +
      "'. You can enable 'JsonBuilder.ignoreUnknownKeys' property to ignore unknown keys.\n"
    return new JsonDecodingException(
      -1,
      tmp + ("" + " JSON input: " + minify$default(input, 0, 1, null))
    )
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this)
    captureStack(this, JsonException)
  }
  JsonException.$metadata$ = {
    simpleName: "JsonException",
    kind: "class",
    interfaces: [],
  }
  function minify(_this_, offset) {
    if (_this_.length < 200) return _this_
    if (offset === -1) {
      var start = (_this_.length - 60) | 0
      if (start <= 0) return _this_
      return "....." + _this_.substring(start)
    }
    var start_0 = (offset - 30) | 0
    var end = (offset + 30) | 0
    var prefix = start_0 <= 0 ? "" : "....."
    var suffix = end >= _this_.length ? "" : "....."
    var tmp0_substring_0 = coerceAtLeast(start_0, 0)
    var tmp1_substring_0 = coerceAtMost(end, _this_.length)
    return (
      prefix + _this_.substring(tmp0_substring_0, tmp1_substring_0) + suffix
    )
  }
  function minify$default(_this_, offset, $mask0, $handler) {
    var offset_0 = !(($mask0 & 1) === 0) ? -1 : offset
    return minify(_this_, offset_0)
  }
  function ContextValidator(discriminator) {
    this._discriminator = discriminator
  }
  ContextValidator.prototype.contextual_0 = function(kClass, serializer_9) {}
  ContextValidator.prototype.polymorphic_0 = function(
    baseClass,
    actualClass,
    actualSerializer
  ) {
    var descriptor = actualSerializer._get_descriptor__32()
    var untilArg = descriptor._get_elementsCount__12()
    var inductionVariable = 0
    var last_0 = (untilArg - 1) | 0
    if (!(untilArg === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var name = descriptor.getElementName_12(i)
        if (name === this._discriminator) {
          throw IllegalArgumentException_init_$Create$(
            "" +
              "Polymorphic serializer for " +
              actualClass +
              " has property '" +
              name +
              "' that conflicts " +
              "with JSON class discriminator. You can either change class discriminator in JsonConfiguration, " +
              "rename property with @SerialName annotation " +
              "or fall back to array polymorphism"
          )
        }
      } while (inductionVariable <= last_0)
  }
  ContextValidator.prototype.polymorphicDefault_0 = function(
    baseClass,
    defaultSerializerProvider
  ) {}
  ContextValidator.$metadata$ = {
    simpleName: "ContextValidator",
    kind: "class",
    interfaces: [SerializersModuleCollector],
  }
  function JsonConf(
    encodeDefaults,
    ignoreUnknownKeys,
    isLenient,
    allowStructuredMapKeys,
    prettyPrint,
    prettyPrintIndent,
    coerceInputValues,
    useArrayPolymorphism,
    classDiscriminator,
    allowSpecialFloatingPointValues,
    serializersModule
  ) {
    this._encodeDefaults_0 = encodeDefaults
    this._ignoreUnknownKeys_0 = ignoreUnknownKeys
    this._isLenient_0 = isLenient
    this._allowStructuredMapKeys_0 = allowStructuredMapKeys
    this._prettyPrint_0 = prettyPrint
    this._prettyPrintIndent_0 = prettyPrintIndent
    this._coerceInputValues_0 = coerceInputValues
    this._useArrayPolymorphism_0 = useArrayPolymorphism
    this._classDiscriminator_0 = classDiscriminator
    this._allowSpecialFloatingPointValues_0 = allowSpecialFloatingPointValues
    this._serializersModule_0 = serializersModule
  }
  JsonConf.prototype.toString = function() {
    return (
      "" +
      "JsonConf(encodeDefaults=" +
      this._encodeDefaults_0 +
      ", ignoreUnknownKeys=" +
      this._ignoreUnknownKeys_0 +
      ", isLenient=" +
      this._isLenient_0 +
      ", allowStructuredMapKeys=" +
      this._allowStructuredMapKeys_0 +
      ", prettyPrint=" +
      this._prettyPrint_0 +
      ", prettyPrintIndent=" +
      this._prettyPrintIndent_0 +
      ", coerceInputValues=" +
      this._coerceInputValues_0 +
      ", useArrayPolymorphism=" +
      this._useArrayPolymorphism_0 +
      ", classDiscriminator=" +
      this._classDiscriminator_0 +
      ", allowSpecialFloatingPointValues=" +
      this._allowSpecialFloatingPointValues_0 +
      ", serializersModule=" +
      this._serializersModule_0 +
      ")"
    )
  }
  JsonConf.prototype.hashCode = function() {
    return (
      (imul(
        (imul(
          (imul(
            (imul(
              (imul(
                (imul(
                  (imul(
                    (imul(
                      (imul(
                        (imul(this._encodeDefaults_0 | 0, 31) +
                          (this._ignoreUnknownKeys_0 | 0)) |
                          0,
                        31
                      ) +
                        (this._isLenient_0 | 0)) |
                        0,
                      31
                    ) +
                      (this._allowStructuredMapKeys_0 | 0)) |
                      0,
                    31
                  ) +
                    (this._prettyPrint_0 | 0)) |
                    0,
                  31
                ) +
                  getStringHashCode(this._prettyPrintIndent_0)) |
                  0,
                31
              ) +
                (this._coerceInputValues_0 | 0)) |
                0,
              31
            ) +
              (this._useArrayPolymorphism_0 | 0)) |
              0,
            31
          ) +
            getStringHashCode(this._classDiscriminator_0)) |
            0,
          31
        ) +
          (this._allowSpecialFloatingPointValues_0 | 0)) |
          0,
        31
      ) +
        hashCode(this._serializersModule_0)) |
      0
    )
  }
  JsonConf.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof JsonConf)) return false
    else {
    }
    var tmp0_other_with_cast = other instanceof JsonConf ? other : THROW_CCE()
    if (!(this._encodeDefaults_0 === tmp0_other_with_cast._encodeDefaults_0))
      return false
    if (
      !(this._ignoreUnknownKeys_0 === tmp0_other_with_cast._ignoreUnknownKeys_0)
    )
      return false
    if (!(this._isLenient_0 === tmp0_other_with_cast._isLenient_0)) return false
    if (
      !(
        this._allowStructuredMapKeys_0 ===
        tmp0_other_with_cast._allowStructuredMapKeys_0
      )
    )
      return false
    if (!(this._prettyPrint_0 === tmp0_other_with_cast._prettyPrint_0))
      return false
    if (
      !(this._prettyPrintIndent_0 === tmp0_other_with_cast._prettyPrintIndent_0)
    )
      return false
    if (
      !(this._coerceInputValues_0 === tmp0_other_with_cast._coerceInputValues_0)
    )
      return false
    if (
      !(
        this._useArrayPolymorphism_0 ===
        tmp0_other_with_cast._useArrayPolymorphism_0
      )
    )
      return false
    if (
      !(
        this._classDiscriminator_0 ===
        tmp0_other_with_cast._classDiscriminator_0
      )
    )
      return false
    if (
      !(
        this._allowSpecialFloatingPointValues_0 ===
        tmp0_other_with_cast._allowSpecialFloatingPointValues_0
      )
    )
      return false
    if (
      !equals_0(
        this._serializersModule_0,
        tmp0_other_with_cast._serializersModule_0
      )
    )
      return false
    return true
  }
  JsonConf.$metadata$ = {
    simpleName: "JsonConf",
    kind: "class",
    interfaces: [],
  }
  function JsonConf_init_$Init$(
    encodeDefaults,
    ignoreUnknownKeys,
    isLenient,
    allowStructuredMapKeys,
    prettyPrint,
    prettyPrintIndent,
    coerceInputValues,
    useArrayPolymorphism,
    classDiscriminator,
    allowSpecialFloatingPointValues,
    serializersModule,
    $mask0,
    $marker,
    $this
  ) {
    var encodeDefaults_0 = !(($mask0 & 1) === 0) ? true : encodeDefaults
    var ignoreUnknownKeys_0 = !(($mask0 & 2) === 0) ? false : ignoreUnknownKeys
    var isLenient_0 = !(($mask0 & 4) === 0) ? false : isLenient
    var allowStructuredMapKeys_0 = !(($mask0 & 8) === 0)
      ? false
      : allowStructuredMapKeys
    var prettyPrint_0 = !(($mask0 & 16) === 0) ? false : prettyPrint
    var prettyPrintIndent_0 = !(($mask0 & 32) === 0)
      ? "    "
      : prettyPrintIndent
    var coerceInputValues_0 = !(($mask0 & 64) === 0) ? false : coerceInputValues
    var useArrayPolymorphism_0 = !(($mask0 & 128) === 0)
      ? false
      : useArrayPolymorphism
    var classDiscriminator_0 = !(($mask0 & 256) === 0)
      ? "type"
      : classDiscriminator
    var allowSpecialFloatingPointValues_0 = !(($mask0 & 512) === 0)
      ? false
      : allowSpecialFloatingPointValues
    var serializersModule_0 = !(($mask0 & 1024) === 0)
      ? EmptySerializersModule
      : serializersModule
    JsonConf.call(
      $this,
      encodeDefaults_0,
      ignoreUnknownKeys_0,
      isLenient_0,
      allowStructuredMapKeys_0,
      prettyPrint_0,
      prettyPrintIndent_0,
      coerceInputValues_0,
      useArrayPolymorphism_0,
      classDiscriminator_0,
      allowSpecialFloatingPointValues_0,
      serializersModule_0
    )
    return $this
  }
  function JsonConf_init_$Create$(
    encodeDefaults,
    ignoreUnknownKeys,
    isLenient,
    allowStructuredMapKeys,
    prettyPrint,
    prettyPrintIndent,
    coerceInputValues,
    useArrayPolymorphism,
    classDiscriminator,
    allowSpecialFloatingPointValues,
    serializersModule,
    $mask0,
    $marker
  ) {
    return JsonConf_init_$Init$(
      encodeDefaults,
      ignoreUnknownKeys,
      isLenient,
      allowStructuredMapKeys,
      prettyPrint,
      prettyPrintIndent,
      coerceInputValues,
      useArrayPolymorphism,
      classDiscriminator,
      allowSpecialFloatingPointValues,
      serializersModule,
      $mask0,
      $marker,
      Object.create(JsonConf.prototype)
    )
  }
  function JsonParser(configuration, reader) {
    this._reader = reader
    this._isLenient_1 = configuration._isLenient_0
  }
  JsonParser.prototype.read_0 = function() {
    if (!this._reader._get_canBeginValue_()) {
      this._reader.fail$default(
        "Can't begin reading value from here",
        0,
        2,
        null
      )
    }
    var tmp0_subject = this._reader._tokenClass
    var tmp
    if (tmp0_subject === 10) {
      var tmp0_also_0 = JsonNull_getInstance()
      this._reader.nextToken()
      tmp = tmp0_also_0
    } else if (tmp0_subject === 1) {
      tmp = readValue(this, true)
    } else if (tmp0_subject === 0) {
      tmp = readValue(this, false)
    } else if (tmp0_subject === 6) {
      tmp = readObject(this)
    } else if (tmp0_subject === 8) {
      tmp = readArray(this)
    } else {
      this._reader.fail$default(
        "Can't begin reading element, unexpected token",
        0,
        2,
        null
      )
    }
    return tmp
  }
  JsonParser.$metadata$ = {
    simpleName: "JsonParser",
    kind: "class",
    interfaces: [],
  }
  function readObject($this) {
    var tmp0_requireTokenClass_0 = $this._reader
    var tmp1_requireTokenClass_0 = 6
    if (!(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)) {
      var tmp2__anonymous__1 = numberToChar(
        tmp0_requireTokenClass_0._tokenClass
      )
      tmp0_requireTokenClass_0.fail(
        "Expected start of the object",
        tmp0_requireTokenClass_0._tokenPosition
      )
    }
    $this._reader.nextToken()
    var tmp3_require_0 = $this._reader
    var tmp4_require_0 = !($this._reader._tokenClass === 4)
    var tmp5_require_0 = $this._reader._currentPosition
    if (!tmp4_require_0) {
      tmp3_require_0.fail("Unexpected leading comma", tmp5_require_0)
    }
    var result = LinkedHashMap_init_$Create$()
    var valueExpected = false
    while ($this._reader._get_canBeginValue_()) {
      valueExpected = false
      var key = $this._isLenient_1
        ? $this._reader.takeString()
        : $this._reader.takeStringQuoted()
      var tmp6_requireTokenClass_0 = $this._reader
      var tmp7_requireTokenClass_0 = 5
      if (
        !(tmp6_requireTokenClass_0._tokenClass === tmp7_requireTokenClass_0)
      ) {
        var tmp8__anonymous__1 = numberToChar(
          tmp6_requireTokenClass_0._tokenClass
        )
        tmp6_requireTokenClass_0.fail(
          "Expected ':'",
          tmp6_requireTokenClass_0._tokenPosition
        )
      }
      $this._reader.nextToken()
      var element = $this.read_0()
      result.put_5(key, element)
      Unit_getInstance()
      if (!($this._reader._tokenClass === 4)) {
        var tmp9_requireTokenClass_0 = $this._reader
        var tmp10_requireTokenClass_0 = 7
        if (
          !(tmp9_requireTokenClass_0._tokenClass === tmp10_requireTokenClass_0)
        ) {
          var tmp11__anonymous__1 = numberToChar(
            tmp9_requireTokenClass_0._tokenClass
          )
          tmp9_requireTokenClass_0.fail(
            "Expected end of the object or comma",
            tmp9_requireTokenClass_0._tokenPosition
          )
        }
      } else {
        valueExpected = true
        $this._reader.nextToken()
      }
    }
    var tmp12_require_0 = $this._reader
    var tmp13_require_0 = !valueExpected
      ? $this._reader._tokenClass === 7
      : false
    var tmp14_require_0 = $this._reader._currentPosition
    if (!tmp13_require_0) {
      tmp12_require_0.fail("Expected end of the object", tmp14_require_0)
    }
    $this._reader.nextToken()
    return new JsonObject(result)
  }
  function readArray($this) {
    var tmp0_requireTokenClass_0 = $this._reader
    var tmp1_requireTokenClass_0 = 8
    if (!(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)) {
      var tmp2__anonymous__1 = numberToChar(
        tmp0_requireTokenClass_0._tokenClass
      )
      tmp0_requireTokenClass_0.fail(
        "Expected start of the array",
        tmp0_requireTokenClass_0._tokenPosition
      )
    }
    $this._reader.nextToken()
    var tmp3_require_0 = $this._reader
    var tmp4_require_0 = !($this._reader._tokenClass === 4)
    var tmp5_require_0 = $this._reader._currentPosition
    if (!tmp4_require_0) {
      tmp3_require_0.fail("Unexpected leading comma", tmp5_require_0)
    }
    var result = ArrayList_init_$Create$()
    var valueExpected = false
    while ($this._reader._get_canBeginValue_()) {
      valueExpected = false
      var element = $this.read_0()
      result.add_16(element)
      Unit_getInstance()
      if (!($this._reader._tokenClass === 4)) {
        var tmp6_requireTokenClass_0 = $this._reader
        var tmp7_requireTokenClass_0 = 9
        if (
          !(tmp6_requireTokenClass_0._tokenClass === tmp7_requireTokenClass_0)
        ) {
          var tmp8__anonymous__1 = numberToChar(
            tmp6_requireTokenClass_0._tokenClass
          )
          tmp6_requireTokenClass_0.fail(
            "Expected end of the array or comma",
            tmp6_requireTokenClass_0._tokenPosition
          )
        }
      } else {
        valueExpected = true
        $this._reader.nextToken()
      }
    }
    var tmp9_require_0 = $this._reader
    var tmp10_require_0 = !valueExpected
    var tmp11_require_0 = $this._reader._currentPosition
    if (!tmp10_require_0) {
      tmp9_require_0.fail("Unexpected trailing comma", tmp11_require_0)
    }
    $this._reader.nextToken()
    return new JsonArray(result)
  }
  function readValue($this, isString_0) {
    var tmp
    if ($this._isLenient_1) {
      tmp = $this._reader.takeString()
    } else {
      tmp = isString_0
        ? $this._reader.takeStringQuoted()
        : $this._reader.takeString()
    }
    var str = tmp
    return new JsonLiteral(str, isString_0)
  }
  var C2TC
  function initC2TC(_this_, c, cl) {
    _this_[c] = cl
  }
  function initC2TC_0(_this_, c, cl) {
    initC2TC(_this_, c.toInt_5(), cl)
  }
  function JsonReader(source) {
    this._source = source
    this._currentPosition = 0
    this._tokenClass = 12
    this._tokenPosition = 0
    this._offset = -1
    this._length = 0
    this._buf = charArray(16)
    this.nextToken()
  }
  JsonReader.prototype._get_isDone_ = function() {
    return this._tokenClass === 12
  }
  JsonReader.prototype._get_canBeginValue_ = function() {
    var tmp0_subject = this._tokenClass
    return ((((tmp0_subject === 8
    ? true
    : tmp0_subject === 6)
    ? true
    : tmp0_subject === 0)
    ? true
    : tmp0_subject === 1)
    ? true
    : tmp0_subject === 10)
      ? true
      : false
  }
  JsonReader.prototype.takeString = function() {
    if (!(this._tokenClass === 0) ? !(this._tokenClass === 1) : false) {
      this.fail("Expected string or non-null literal", this._tokenPosition)
    }
    return takeStringInternal$default(this, false, 2, null)
  }
  JsonReader.prototype.peekString = function(isLenient) {
    return (!(this._tokenClass === 1)
    ? !isLenient
      ? true
      : !(this._tokenClass === 0)
    : false)
      ? null
      : takeStringInternal(this, false)
  }
  JsonReader.prototype.takeStringQuoted = function() {
    if (!(this._tokenClass === 1)) {
      this.fail(
        "Expected string literal with quotes. Use 'JsonBuilder.isLenient = true' to accept non-compliant JSON",
        this._tokenPosition
      )
    }
    return takeStringInternal$default(this, false, 2, null)
  }
  JsonReader.prototype.takeBooleanStringUnquoted = function() {
    if (!(this._tokenClass === 0)) {
      this.fail(
        "Expected start of the unquoted boolean literal. Use 'JsonBuilder.isLenient = true' to accept non-compliant JSON",
        this._tokenPosition
      )
    }
    return takeStringInternal$default(this, false, 2, null)
  }
  JsonReader.prototype.nextToken = function() {
    var source = this._source
    var currentPosition = this._currentPosition
    while (currentPosition < source.length) {
      var ch = charSequenceGet(source, currentPosition)
      var tc = charToTokenClass(ch)
      if (tc === 3) {
        var tmp0 = currentPosition
        currentPosition = (tmp0 + 1) | 0
        Unit_getInstance()
      } else if (tc === 0) {
        nextLiteral(this, source, currentPosition)
        return Unit_getInstance()
      } else if (tc === 1) {
        nextString(this, source, currentPosition)
        return Unit_getInstance()
      } else {
        this._tokenPosition = currentPosition
        this._tokenClass = tc
        this._currentPosition = (currentPosition + 1) | 0
        return Unit_getInstance()
      }
    }
    this._tokenPosition = currentPosition
    this._tokenClass = 12
  }
  JsonReader.prototype.skipElement = function() {
    if (!(this._tokenClass === 6) ? !(this._tokenClass === 8) : false) {
      this.nextToken()
      return Unit_getInstance()
    }
    var tokenStack = ArrayList_init_$Create$()
    $l$1: do {
      $l$0: do {
        var tmp0_subject = this._tokenClass
        if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
          tokenStack.add_16(this._tokenClass)
          Unit_getInstance()
        } else if (tmp0_subject === 9) {
          if (!(last(tokenStack) === 8))
            throw JsonDecodingException_0(
              this._currentPosition,
              "found ] instead of }",
              this._source
            )
          tokenStack.removeAt_1((tokenStack._get_size__27() - 1) | 0)
          Unit_getInstance()
        } else if (tmp0_subject === 7) {
          if (!(last(tokenStack) === 6))
            throw JsonDecodingException_0(
              this._currentPosition,
              "found } instead of ]",
              this._source
            )
          tokenStack.removeAt_1((tokenStack._get_size__27() - 1) | 0)
          Unit_getInstance()
        }
        this.nextToken()
      } while (false)
    } while (!tokenStack.isEmpty_28())
  }
  JsonReader.prototype.toString = function() {
    return (
      "" +
      "JsonReader(source='" +
      this._source +
      "', currentPosition=" +
      this._currentPosition +
      ", tokenClass=" +
      this._tokenClass +
      ", tokenPosition=" +
      this._tokenPosition +
      ", offset=" +
      this._offset +
      ")"
    )
  }
  JsonReader.prototype.fail = function(message, position) {
    throw JsonDecodingException_0(position, message, this._source)
  }
  JsonReader.prototype.fail$default = function(
    message,
    position,
    $mask0,
    $handler
  ) {
    var position_0 = !(($mask0 & 2) === 0) ? this._currentPosition : position
    return this.fail(message, position_0)
  }
  JsonReader.$metadata$ = {
    simpleName: "JsonReader",
    kind: "class",
    interfaces: [],
  }
  function charToTokenClass(c) {
    return c.toInt_5() < 126 ? C2TC[c.toInt_5()] : 0
  }
  function rangeEquals(source, start, length, str) {
    var n = str.length
    if (!(length === n)) return false
    var inductionVariable = 0
    var last_0 = (n - 1) | 0
    if (!(n === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        if (
          !charSequenceGet(source, (start + i) | 0).equals(
            charSequenceGet(str, i)
          )
        )
          return false
      } while (inductionVariable <= last_0)
    return true
  }
  function escapeToChar(c) {
    return c < 117
      ? EscapeCharMappings_getInstance()._ESCAPE_2_CHAR[c]
      : new Char(0)
  }
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this
    this._ESCAPE_2_CHAR = charArray(117)
    var inductionVariable = 0
    var last_0 = 31
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        initC2ESC(this, i, new Char(117))
      } while (inductionVariable <= last_0)
    initC2ESC(this, 8, new Char(98))
    initC2ESC(this, 9, new Char(116))
    initC2ESC(this, 10, new Char(110))
    initC2ESC(this, 12, new Char(102))
    initC2ESC(this, 13, new Char(114))
    initC2ESC_0(this, new Char(47), new Char(47))
    initC2ESC_0(this, new Char(34), new Char(34))
    initC2ESC_0(this, new Char(92), new Char(92))
  }
  EscapeCharMappings.$metadata$ = {
    simpleName: "EscapeCharMappings",
    kind: "object",
    interfaces: [],
  }
  var EscapeCharMappings_instance
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance == null) new EscapeCharMappings()
    return EscapeCharMappings_instance
  }
  function C2TC$init$() {
    var tmp0_apply_0 = new Int8Array(126)
    var inductionVariable = 0
    var last_0 = 32
    if (inductionVariable <= last_0)
      do {
        var i_3 = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        initC2TC(tmp0_apply_0, i_3, 11)
      } while (inductionVariable <= last_0)
    initC2TC(tmp0_apply_0, 9, 3)
    initC2TC(tmp0_apply_0, 10, 3)
    initC2TC(tmp0_apply_0, 13, 3)
    initC2TC(tmp0_apply_0, 32, 3)
    initC2TC_0(tmp0_apply_0, new Char(44), 4)
    initC2TC_0(tmp0_apply_0, new Char(58), 5)
    initC2TC_0(tmp0_apply_0, new Char(123), 6)
    initC2TC_0(tmp0_apply_0, new Char(125), 7)
    initC2TC_0(tmp0_apply_0, new Char(91), 8)
    initC2TC_0(tmp0_apply_0, new Char(93), 9)
    initC2TC_0(tmp0_apply_0, new Char(34), 1)
    initC2TC_0(tmp0_apply_0, new Char(92), 2)
    return tmp0_apply_0
  }
  function takeStringInternal($this, advance) {
    var tmp
    if ($this._offset < 0) {
      tmp = concatToString($this._buf, 0, (0 + $this._length) | 0)
    } else {
      var tmp0_substring_0 = $this._source
      var tmp1_substring_0 = $this._offset
      var tmp2_substring_0 = ($this._offset + $this._length) | 0
      tmp = tmp0_substring_0.substring(tmp1_substring_0, tmp2_substring_0)
    }
    var prevStr = tmp
    if (advance) $this.nextToken()
    return prevStr
  }
  function takeStringInternal$default($this, advance, $mask0, $handler) {
    var advance_0 = !(($mask0 & 2) === 0) ? true : advance
    return takeStringInternal($this, advance_0)
  }
  function append($this, ch) {
    if ($this._length >= $this._buf.length)
      $this._buf = copyOf($this._buf, imul(2, $this._buf.length))
    var tmp = $this._buf
    var tmp0_this = $this
    var tmp1 = tmp0_this._length
    tmp0_this._length = (tmp1 + 1) | 0
    tmp[tmp1] = ch
  }
  function appendRange($this, source, fromIndex, toIndex) {
    var addLen = (toIndex - fromIndex) | 0
    var oldLen = $this._length
    var newLen = (oldLen + addLen) | 0
    if (newLen > $this._buf.length)
      $this._buf = copyOf(
        $this._buf,
        coerceAtLeast(newLen, imul(2, $this._buf.length))
      )
    var inductionVariable = 0
    var last_0 = (addLen - 1) | 0
    if (!(addLen === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        $this._buf[(oldLen + i) | 0] = charSequenceGet(
          source,
          (fromIndex + i) | 0
        )
      } while (inductionVariable <= last_0)
    var tmp1_this = $this
    tmp1_this._length = (tmp1_this._length + addLen) | 0
  }
  function nextLiteral($this, source, startPos) {
    $this._tokenPosition = startPos
    $this._offset = startPos
    var currentPosition = startPos
    while (
      currentPosition < source.length
        ? charToTokenClass(charSequenceGet(source, currentPosition)) === 0
        : false
    ) {
      var tmp0 = currentPosition
      currentPosition = (tmp0 + 1) | 0
      Unit_getInstance()
    }
    $this._currentPosition = currentPosition
    $this._length = (currentPosition - $this._offset) | 0
    $this._tokenClass = rangeEquals(
      source,
      $this._offset,
      $this._length,
      "null"
    )
      ? 10
      : 0
  }
  function nextString($this, source, startPosition) {
    $this._tokenPosition = startPosition
    $this._length = 0
    var currentPosition = (startPosition + 1) | 0
    var lastPosition = currentPosition
    while (!charSequenceGet(source, currentPosition).equals(new Char(34))) {
      if (charSequenceGet(source, currentPosition).equals(new Char(92))) {
        appendRange($this, source, lastPosition, currentPosition)
        var newPosition = appendEsc($this, source, (currentPosition + 1) | 0)
        currentPosition = newPosition
        lastPosition = newPosition
      } else {
        currentPosition = (currentPosition + 1) | 0
        if (currentPosition >= source.length) {
          $this.fail("EOF", currentPosition)
        } else {
        }
      }
    }
    if (lastPosition === ((startPosition + 1) | 0)) {
      $this._offset = lastPosition
      $this._length = (currentPosition - lastPosition) | 0
    } else {
      appendRange($this, source, lastPosition, currentPosition)
      $this._offset = -1
    }
    $this._currentPosition = (currentPosition + 1) | 0
    $this._tokenClass = 1
  }
  function appendEsc($this, source, startPosition) {
    var currentPosition = startPosition
    var tmp0_require_0 = currentPosition < source.length
    var tmp1_require_0 = currentPosition
    if (!tmp0_require_0) {
      $this.fail("Unexpected EOF after escape character", tmp1_require_0)
    }
    var tmp0 = currentPosition
    currentPosition = (tmp0 + 1) | 0
    var currentChar = charSequenceGet(source, tmp0)
    if (currentChar.equals(new Char(117))) {
      return appendHex($this, source, currentPosition)
    }
    var c = escapeToChar(currentChar.toInt_5())
    var tmp2_require_0 = !c.equals(new Char(0))
    var tmp3_require_0 = currentPosition
    if (!tmp2_require_0) {
      $this.fail(
        "" + "Invalid escaped char '" + currentChar + "'",
        tmp3_require_0
      )
    }
    append($this, c)
    return currentPosition
  }
  function appendHex($this, source, startPos) {
    var curPos = startPos
    var tmp3 = curPos
    curPos = (tmp3 + 1) | 0
    var tmp = fromHexChar($this, source, tmp3) << 12
    var tmp2 = curPos
    curPos = (tmp2 + 1) | 0
    var tmp_0 = (tmp + (fromHexChar($this, source, tmp2) << 8)) | 0
    var tmp1 = curPos
    curPos = (tmp1 + 1) | 0
    var tmp_1 = (tmp_0 + (fromHexChar($this, source, tmp1) << 4)) | 0
    var tmp0 = curPos
    curPos = (tmp0 + 1) | 0
    append($this, numberToChar((tmp_1 + fromHexChar($this, source, tmp0)) | 0))
    return curPos
  }
  function fromHexChar($this, source, currentPosition) {
    var tmp0_require_0 = currentPosition < source.length
    if (!tmp0_require_0) {
      $this.fail("Unexpected EOF during unicode escape", currentPosition)
    }
    var curChar = charSequenceGet(source, currentPosition)
    var tmp
    if (new Char(48).rangeTo(new Char(57)).contains_8(curChar)) {
      tmp = (curChar.toInt_5() - 48) | 0
    } else if (new Char(97).rangeTo(new Char(102)).contains_8(curChar)) {
      tmp = (((curChar.toInt_5() - 97) | 0) + 10) | 0
    } else if (new Char(65).rangeTo(new Char(70)).contains_8(curChar)) {
      tmp = (((curChar.toInt_5() - 65) | 0) + 10) | 0
    } else {
      var tmp_0 =
        "" + "Invalid toHexChar char '" + curChar + "' in unicode escape"
      $this.fail$default(tmp_0, 0, 2, null)
    }
    return tmp
  }
  function initC2ESC($this, c, esc) {
    if (!esc.equals(new Char(117)))
      $this._ESCAPE_2_CHAR[esc.toInt_5()] = numberToChar(c)
  }
  function initC2ESC_0($this, c, esc) {
    return initC2ESC($this, c.toInt_5(), esc)
  }
  function decodeSerializableValuePolymorphic(_this_, deserializer) {
    var tmp
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true
    } else {
      {
        tmp = _this_._get_json__4()._configuration._useArrayPolymorphism_0
      }
    }
    if (tmp) {
      return deserializer.deserialize_32(_this_)
    } else {
    }
    var tmp0_cast_0 = _this_.decodeJsonElement_4()
    var tmp1_cast_0 = deserializer._get_descriptor__32()
    if (!(tmp0_cast_0 instanceof JsonObject)) {
      throw new JsonDecodingException(
        -1,
        "" +
          "Expected " +
          getKClass_0(JsonObject) +
          " as the serialized body of " +
          tmp1_cast_0._get_serialName__12() +
          ", but had " +
          getKClassFromExpression_0(tmp0_cast_0)
      )
    } else {
    }
    var jsonTree = tmp0_cast_0
    var discriminator = _this_._get_json__4()._configuration
      ._classDiscriminator_0
    var tmp0_safe_receiver = jsonTree.get_15(discriminator)
    var tmp1_safe_receiver =
      tmp0_safe_receiver == null
        ? null
        : _get_jsonPrimitive_(tmp0_safe_receiver)
    var tmp2_elvis_lhs =
      tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_content__1()
    var tmp_0
    if (tmp2_elvis_lhs == null) {
      throw JsonDecodingException_0(
        -1,
        "" + "Missing polymorphic discriminator " + discriminator,
        jsonTree.toString()
      )
    } else {
      tmp_0 = tmp2_elvis_lhs
    }
    var type = tmp_0
    var tmp2_cast_0 = deserializer.findPolymorphicSerializer_0(_this_, type)
    var actualSerializer = isInterface(tmp2_cast_0, DeserializationStrategy)
      ? tmp2_cast_0
      : THROW_CCE()
    return readPolymorphicJson(
      _this_._get_json__4(),
      discriminator,
      jsonTree,
      actualSerializer
    )
  }
  function StreamingJsonDecoder(json, mode, reader) {
    AbstractDecoder.call(this)
    this._json = json
    this._mode = mode
    this._reader_0 = reader
    this._serializersModule_1 = this._json._get_serializersModule__10()
    this._currentIndex = -1
    this._configuration_0 = this._json._configuration
  }
  StreamingJsonDecoder.prototype._get_json__4 = function() {
    return this._json
  }
  StreamingJsonDecoder.prototype._get_serializersModule__10 = function() {
    return this._serializersModule_1
  }
  StreamingJsonDecoder.prototype.decodeJsonElement_4 = function() {
    return new JsonParser(this._json._configuration, this._reader_0).read_0()
  }
  StreamingJsonDecoder.prototype.decodeSerializableValue_15 = function(
    deserializer
  ) {
    return decodeSerializableValuePolymorphic(this, deserializer)
  }
  StreamingJsonDecoder.prototype.beginStructure_16 = function(descriptor) {
    var newMode = switchMode(this._json, descriptor)
    if (!newMode._begin.equals(new Char(0))) {
      var tmp0_requireTokenClass_0 = this._reader_0
      var tmp1_requireTokenClass_0 = newMode._beginTc
      if (
        !(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)
      ) {
        var tmp2__anonymous__1 = numberToChar(
          tmp0_requireTokenClass_0._tokenClass
        )
        tmp0_requireTokenClass_0.fail(
          "" +
            "Expected '" +
            newMode._begin +
            ", kind: " +
            descriptor._get_kind__12() +
            "'",
          tmp0_requireTokenClass_0._tokenPosition
        )
      }
      this._reader_0.nextToken()
    }
    var tmp0_subject = newMode
    return ((tmp0_subject.equals(WriteMode_LIST_getInstance())
    ? true
    : tmp0_subject.equals(WriteMode_MAP_getInstance()))
    ? true
    : tmp0_subject.equals(WriteMode_POLY_OBJ_getInstance()))
      ? new StreamingJsonDecoder(this._json, newMode, this._reader_0)
      : this._mode.equals(newMode)
      ? this
      : new StreamingJsonDecoder(this._json, newMode, this._reader_0)
  }
  StreamingJsonDecoder.prototype.endStructure_7 = function(descriptor) {
    if (!this._mode._end.equals(new Char(0))) {
      var tmp0_requireTokenClass_0 = this._reader_0
      var tmp1_requireTokenClass_0 = this._mode._endTc
      if (
        !(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)
      ) {
        var tmp2__anonymous__1 = numberToChar(
          tmp0_requireTokenClass_0._tokenClass
        )
        tmp0_requireTokenClass_0.fail(
          "" + "Expected '" + this._mode._end + "'",
          tmp0_requireTokenClass_0._tokenPosition
        )
      }
      this._reader_0.nextToken()
    }
  }
  StreamingJsonDecoder.prototype.decodeNotNullMark_7 = function() {
    return !(this._reader_0._tokenClass === 10)
  }
  StreamingJsonDecoder.prototype.decodeNull_7 = function() {
    var tmp0_requireTokenClass_0 = this._reader_0
    var tmp1_requireTokenClass_0 = 10
    if (!(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)) {
      var tmp2__anonymous__1 = numberToChar(
        tmp0_requireTokenClass_0._tokenClass
      )
      tmp0_requireTokenClass_0.fail(
        "Expected 'null' literal",
        tmp0_requireTokenClass_0._tokenPosition
      )
    }
    this._reader_0.nextToken()
    return null
  }
  StreamingJsonDecoder.prototype.decodeElementIndex_7 = function(descriptor) {
    var tokenClass = this._reader_0._tokenClass
    if (tokenClass === 4) {
      var tmp0_require_0 = this._reader_0
      var tmp1_require_0 = !(this._currentIndex === -1)
      var tmp2_require_0 = this._reader_0._currentPosition
      if (!tmp1_require_0) {
        tmp0_require_0.fail("Unexpected leading comma", tmp2_require_0)
      }
      this._reader_0.nextToken()
    }
    var tmp0_subject = this._mode
    var tmp
    if (tmp0_subject.equals(WriteMode_LIST_getInstance())) {
      tmp = decodeListIndex(this, tokenClass)
    } else if (tmp0_subject.equals(WriteMode_MAP_getInstance())) {
      tmp = decodeMapIndex(this, tokenClass)
    } else if (tmp0_subject.equals(WriteMode_POLY_OBJ_getInstance())) {
      var tmp1_this = this
      tmp1_this._currentIndex = (tmp1_this._currentIndex + 1) | 0
      var tmp2_subject = tmp1_this._currentIndex
      var tmp_0
      switch (tmp2_subject) {
        case 0:
          tmp_0 = 0
          break
        case 1:
          tmp_0 = 1
          break
        default:
          tmp_0 = -1
          break
      }
      tmp = tmp_0
    } else {
      tmp = decodeObjectIndex(this, tokenClass, descriptor)
    }
    return tmp
  }
  StreamingJsonDecoder.prototype.decodeBoolean_7 = function() {
    var tmp
    if (this._configuration_0._isLenient_0) {
      tmp = toBooleanStrict(this._reader_0.takeString())
    } else {
      tmp = toBooleanStrict(this._reader_0.takeBooleanStringUnquoted())
    }
    return tmp
  }
  StreamingJsonDecoder.prototype.decodeByte_7 = function() {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_parse_0 = this._reader_0.takeString()
      var tmp1_parse_0 = "byte"
      try {
        tmp$ret$0 = toByte(tmp0_parse_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = "" + "Failed to parse '" + tmp1_parse_0 + "'"
          this._reader_0.fail$default(tmp, 0, 2, null)
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  StreamingJsonDecoder.prototype.decodeShort_7 = function() {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_parse_0 = this._reader_0.takeString()
      var tmp1_parse_0 = "short"
      try {
        tmp$ret$0 = toShort(tmp0_parse_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = "" + "Failed to parse '" + tmp1_parse_0 + "'"
          this._reader_0.fail$default(tmp, 0, 2, null)
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  StreamingJsonDecoder.prototype.decodeInt_7 = function() {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_parse_0 = this._reader_0.takeString()
      var tmp1_parse_0 = "int"
      try {
        tmp$ret$0 = toInt(tmp0_parse_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = "" + "Failed to parse '" + tmp1_parse_0 + "'"
          this._reader_0.fail$default(tmp, 0, 2, null)
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  StreamingJsonDecoder.prototype.decodeLong_7 = function() {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_parse_0 = this._reader_0.takeString()
      var tmp1_parse_0 = "long"
      try {
        tmp$ret$0 = toLong(tmp0_parse_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = "" + "Failed to parse '" + tmp1_parse_0 + "'"
          this._reader_0.fail$default(tmp, 0, 2, null)
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  StreamingJsonDecoder.prototype.decodeFloat_7 = function() {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_parse_0 = this._reader_0.takeString()
      var tmp1_parse_0 = "float"
      try {
        var tmp0_unsafeCast_0_1_3 = toDouble(tmp0_parse_0)
        tmp$ret$0 = tmp0_unsafeCast_0_1_3
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = "" + "Failed to parse '" + tmp1_parse_0 + "'"
          this._reader_0.fail$default(tmp, 0, 2, null)
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  StreamingJsonDecoder.prototype.decodeDouble_7 = function() {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_parse_0 = this._reader_0.takeString()
      var tmp1_parse_0 = "double"
      try {
        tmp$ret$0 = toDouble(tmp0_parse_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = "" + "Failed to parse '" + tmp1_parse_0 + "'"
          this._reader_0.fail$default(tmp, 0, 2, null)
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  StreamingJsonDecoder.prototype.decodeChar_7 = function() {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_parse_0 = this._reader_0.takeString()
      var tmp1_parse_0 = "char"
      try {
        tmp$ret$0 = single(tmp0_parse_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = "" + "Failed to parse '" + tmp1_parse_0 + "'"
          this._reader_0.fail$default(tmp, 0, 2, null)
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  StreamingJsonDecoder.prototype.decodeString_7 = function() {
    var tmp
    if (this._configuration_0._isLenient_0) {
      tmp = this._reader_0.takeString()
    } else {
      tmp = this._reader_0.takeStringQuoted()
    }
    return tmp
  }
  StreamingJsonDecoder.prototype.decodeEnum_7 = function(enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString_7())
  }
  StreamingJsonDecoder.$metadata$ = {
    simpleName: "StreamingJsonDecoder",
    kind: "class",
    interfaces: [JsonDecoder],
  }
  function decodeMapIndex($this, tokenClass) {
    if (!(tokenClass === 4) ? $this._currentIndex % 2 === 1 : false) {
      var tmp0_requireTokenClass_0 = $this._reader_0
      var tmp1_requireTokenClass_0 = 7
      if (
        !(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)
      ) {
        var tmp2__anonymous__1 = numberToChar(
          tmp0_requireTokenClass_0._tokenClass
        )
        tmp0_requireTokenClass_0.fail(
          "Expected end of the object or comma",
          tmp0_requireTokenClass_0._tokenPosition
        )
      }
    }
    if ($this._currentIndex % 2 === 0) {
      var tmp3_requireTokenClass_0 = $this._reader_0
      var tmp4_requireTokenClass_0 = 5
      if (
        !(tmp3_requireTokenClass_0._tokenClass === tmp4_requireTokenClass_0)
      ) {
        var tmp5__anonymous__1 = numberToChar(
          tmp3_requireTokenClass_0._tokenClass
        )
        tmp3_requireTokenClass_0.fail(
          "Expected ':' after the key",
          tmp3_requireTokenClass_0._tokenPosition
        )
      }
      $this._reader_0.nextToken()
    }
    var tmp
    if (!$this._reader_0._get_canBeginValue_()) {
      var tmp6_require_0 = $this._reader_0
      var tmp7_require_0 = !(tokenClass === 4)
      var tmp8_require_0 = tmp6_require_0._currentPosition
      if (!tmp7_require_0) {
        tmp6_require_0.fail("Unexpected trailing comma", tmp8_require_0)
      }
      tmp = -1
    } else {
      var tmp0_this = $this
      tmp0_this._currentIndex = (tmp0_this._currentIndex + 1) | 0
      tmp = tmp0_this._currentIndex
    }
    return tmp
  }
  function coerceInputValue($this, descriptor, index) {
    var elementDescriptor = descriptor.getElementDescriptor_12(index)
    if (
      $this._reader_0._tokenClass === 10
        ? !elementDescriptor._get_isNullable__12()
        : false
    )
      return true
    if (equals_0(elementDescriptor._get_kind__12(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = $this._reader_0.peekString(
        $this._configuration_0._isLenient_0
      )
      var tmp
      if (tmp0_elvis_lhs == null) {
        return false
      } else {
        tmp = tmp0_elvis_lhs
      }
      var enumValue = tmp
      var enumIndex = elementDescriptor.getElementIndex_12(enumValue)
      if (enumIndex === -3) return true
    }
    return false
  }
  function decodeObjectIndex($this, tokenClass, descriptor) {
    if (tokenClass === 4 ? !$this._reader_0._get_canBeginValue_() : false) {
      $this._reader_0.fail$default("Unexpected trailing comma", 0, 2, null)
    }
    while ($this._reader_0._get_canBeginValue_()) {
      var tmp0_this = $this
      tmp0_this._currentIndex = (tmp0_this._currentIndex + 1) | 0
      Unit_getInstance()
      var key = $this.decodeString_7()
      var tmp0_requireTokenClass_0 = $this._reader_0
      var tmp1_requireTokenClass_0 = 5
      if (
        !(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)
      ) {
        var tmp2__anonymous__1 = numberToChar(
          tmp0_requireTokenClass_0._tokenClass
        )
        tmp0_requireTokenClass_0.fail(
          "Expected ':'",
          tmp0_requireTokenClass_0._tokenPosition
        )
      }
      $this._reader_0.nextToken()
      var index = descriptor.getElementIndex_12(key)
      var tmp
      if (!(index === -3)) {
        var tmp_0
        if (
          $this._configuration_0._coerceInputValues_0
            ? coerceInputValue($this, descriptor, index)
            : false
        ) {
          tmp_0 = false
        } else {
          return index
        }
        tmp = tmp_0
      } else {
        tmp = true
      }
      var isUnknown = tmp
      if (isUnknown ? !$this._configuration_0._ignoreUnknownKeys_0 : false) {
        var tmp_1 =
          "" +
          "Encountered an unknown key '" +
          key +
          "'. You can enable 'JsonBuilder.ignoreUnknownKeys' property" +
          " to ignore unknown keys"
        $this._reader_0.fail$default(tmp_1, 0, 2, null)
      } else {
        $this._reader_0.skipElement()
      }
      if ($this._reader_0._tokenClass === 4) {
        $this._reader_0.nextToken()
        var tmp3_require_0 = $this._reader_0
        var tmp4_require_0 = $this._reader_0._get_canBeginValue_()
        var tmp5_require_0 = $this._reader_0._currentPosition
        if (!tmp4_require_0) {
          tmp3_require_0.fail("Unexpected trailing comma", tmp5_require_0)
        }
      }
    }
    return -1
  }
  function decodeListIndex($this, tokenClass) {
    if (!(tokenClass === 4) ? !($this._currentIndex === -1) : false) {
      var tmp0_requireTokenClass_0 = $this._reader_0
      var tmp1_requireTokenClass_0 = 9
      if (
        !(tmp0_requireTokenClass_0._tokenClass === tmp1_requireTokenClass_0)
      ) {
        var tmp2__anonymous__1 = numberToChar(
          tmp0_requireTokenClass_0._tokenClass
        )
        tmp0_requireTokenClass_0.fail(
          "Expected end of the array or comma",
          tmp0_requireTokenClass_0._tokenPosition
        )
      }
    }
    var tmp
    if (!$this._reader_0._get_canBeginValue_()) {
      var tmp3_require_0 = $this._reader_0
      var tmp4_require_0 = !(tokenClass === 4)
      var tmp5_require_0 = tmp3_require_0._currentPosition
      if (!tmp4_require_0) {
        tmp3_require_0.fail("Unexpected trailing comma", tmp5_require_0)
      }
      tmp = -1
    } else {
      var tmp0_this = $this
      tmp0_this._currentIndex = (tmp0_this._currentIndex + 1) | 0
      tmp = tmp0_this._currentIndex
    }
    return tmp
  }
  var ESCAPE_CHARS
  function toHexChar(i) {
    var d = i & 15
    return d < 10
      ? numberToChar((d + 48) | 0)
      : numberToChar((((d - 10) | 0) + 97) | 0)
  }
  function printQuoted(_this_, value) {
    _this_.append_2(new Char(34))
    Unit_getInstance()
    var lastPos = 0
    var length = value.length
    var inductionVariable = 0
    var last_0 = (length - 1) | 0
    if (!(length === -2147483648) ? inductionVariable <= last_0 : false)
      do {
        var i = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var c = charSequenceGet(value, i).toInt_5()
        if (c >= ESCAPE_CHARS.length) continue
        var tmp1_elvis_lhs = ESCAPE_CHARS[c]
        var tmp
        if (tmp1_elvis_lhs == null) {
          continue
        } else {
          tmp = tmp1_elvis_lhs
        }
        var esc = tmp
        _this_.append_4(value, lastPos, i)
        Unit_getInstance()
        _this_.append_5(esc)
        Unit_getInstance()
        lastPos = (i + 1) | 0
      } while (inductionVariable <= last_0)
    _this_.append_4(value, lastPos, length)
    Unit_getInstance()
    _this_.append_2(new Char(34))
    Unit_getInstance()
  }
  function toBooleanStrict(_this_) {
    var tmp0_elvis_lhs = toBooleanStrictOrNull(_this_)
    var tmp
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(
        "" + _this_ + " does not represent a Boolean"
      )
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  function toBooleanStrictOrNull(_this_) {
    return equals(_this_, "true", true)
      ? true
      : equals(_this_, "false", true)
      ? false
      : null
  }
  function ESCAPE_CHARS$init$() {
    var tmp0_arrayOfNulls_0 = 128
    var tmp1_apply_0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null)
    var inductionVariable = 0
    var last_0 = 31
    if (inductionVariable <= last_0)
      do {
        var c_3 = inductionVariable
        inductionVariable = (inductionVariable + 1) | 0
        var c1_4 = toHexChar(c_3 >> 12)
        var c2_5 = toHexChar(c_3 >> 8)
        var c3_6 = toHexChar(c_3 >> 4)
        var c4_7 = toHexChar(c_3)
        tmp1_apply_0[c_3] = "" + "\\u" + c1_4 + c2_5 + c3_6 + c4_7
      } while (inductionVariable <= last_0)
    tmp1_apply_0[34] = '\\"'
    tmp1_apply_0[92] = "\\\\"
    tmp1_apply_0[9] = "\\t"
    tmp1_apply_0[8] = "\\b"
    tmp1_apply_0[10] = "\\n"
    tmp1_apply_0[13] = "\\r"
    tmp1_apply_0[12] = "\\f"
    return tmp1_apply_0
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder_init_$Init$(null, 1, null, this)
    this._json_0 = json
    this._value_2 = value
    this._configuration_1 = this._get_json__4()._configuration
  }
  AbstractJsonTreeDecoder.prototype._get_json__4 = function() {
    return this._json_0
  }
  AbstractJsonTreeDecoder.prototype._get_value__11 = function() {
    return this._value_2
  }
  AbstractJsonTreeDecoder.prototype._get_serializersModule__10 = function() {
    return this._get_json__4()._get_serializersModule__10()
  }
  AbstractJsonTreeDecoder.prototype._get_configuration__3 = function() {
    return this._configuration_1
  }
  AbstractJsonTreeDecoder.prototype.decodeJsonElement_4 = function() {
    return currentObject(this)
  }
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_15 = function(
    deserializer
  ) {
    return decodeSerializableValuePolymorphic(this, deserializer)
  }
  AbstractJsonTreeDecoder.prototype.composeName_3 = function(
    parentName,
    childName
  ) {
    return childName
  }
  AbstractJsonTreeDecoder.prototype.beginStructure_16 = function(descriptor) {
    var currentObject_0 = currentObject(this)
    var tmp0_subject = descriptor._get_kind__12()
    var tmp
    var tmp_0
    if (equals_0(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind
    }
    if (tmp_0) {
      var tmp_1 = this._get_json__4()
      if (!(currentObject_0 instanceof JsonArray)) {
        throw new JsonDecodingException(
          -1,
          "" +
            "Expected " +
            getKClass_0(JsonArray) +
            " as the serialized body of " +
            descriptor._get_serialName__12() +
            ", but had " +
            getKClassFromExpression_0(currentObject_0)
        )
      } else {
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject_0)
    } else {
      if (equals_0(tmp0_subject, MAP_getInstance())) {
        var tmp0_selectMapMode_0 = this._get_json__4()
        var keyDescriptor_1 = descriptor.getElementDescriptor_12(0)
        var keyKind_2 = keyDescriptor_1._get_kind__12()
        var tmp_2
        var tmp_3
        if (keyKind_2 instanceof PrimitiveKind) {
          tmp_3 = true
        } else {
          {
            tmp_3 = equals_0(keyKind_2, ENUM_getInstance())
          }
        }
        if (tmp_3) {
          var tmp_4 = this._get_json__4()
          if (!(currentObject_0 instanceof JsonObject)) {
            throw new JsonDecodingException(
              -1,
              "" +
                "Expected " +
                getKClass_0(JsonObject) +
                " as the serialized body of " +
                descriptor._get_serialName__12() +
                ", but had " +
                getKClassFromExpression_0(currentObject_0)
            )
          } else {
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject_0)
        } else {
          if (tmp0_selectMapMode_0._configuration._allowStructuredMapKeys_0) {
            var tmp_5 = this._get_json__4()
            if (!(currentObject_0 instanceof JsonArray)) {
              throw new JsonDecodingException(
                -1,
                "" +
                  "Expected " +
                  getKClass_0(JsonArray) +
                  " as the serialized body of " +
                  descriptor._get_serialName__12() +
                  ", but had " +
                  getKClassFromExpression_0(currentObject_0)
              )
            } else {
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject_0)
          } else {
            {
              throw InvalidKeyKindException(keyDescriptor_1)
            }
          }
        }
        tmp = tmp_2
      } else {
        {
          var tmp_6 = this._get_json__4()
          if (!(currentObject_0 instanceof JsonObject)) {
            throw new JsonDecodingException(
              -1,
              "" +
                "Expected " +
                getKClass_0(JsonObject) +
                " as the serialized body of " +
                descriptor._get_serialName__12() +
                ", but had " +
                getKClassFromExpression_0(currentObject_0)
            )
          } else {
          }
          var tmp_7 = currentObject_0
          tmp = JsonTreeDecoder_init_$Create$(
            tmp_6,
            tmp_7,
            null,
            null,
            12,
            null
          )
        }
      }
    }
    return tmp
  }
  AbstractJsonTreeDecoder.prototype.endStructure_7 = function(descriptor) {}
  AbstractJsonTreeDecoder.prototype.getValue_2 = function(tag) {
    var currentElement = this.currentElement_2(tag)
    var tmp0_elvis_lhs =
      currentElement instanceof JsonPrimitive ? currentElement : null
    var tmp
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(
        -1,
        "" + "Expected JsonPrimitive at " + tag + ", found " + currentElement,
        toString_1(currentObject(this))
      )
    } else {
      tmp = tmp0_elvis_lhs
    }
    return tmp
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_5 = function(
    tag,
    enumDescription
  ) {
    return getElementIndexOrThrow(
      enumDescription,
      this.getValue_2(tag)._get_content__1()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_2 = function(
    tag,
    enumDescription
  ) {
    return this.decodeTaggedEnum_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE(),
      enumDescription
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_5 = function(tag) {
    return !(this.currentElement_2(tag) === JsonNull_getInstance())
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_2 = function(tag) {
    return this.decodeTaggedNotNullMark_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_5 = function(tag) {
    var value = this.getValue_2(tag)
    if (!this._get_json__4()._configuration._isLenient_0) {
      var literal = value instanceof JsonLiteral ? value : THROW_CCE()
      if (literal._isString)
        throw JsonDecodingException_0(
          -1,
          "" +
            "Boolean literal for key '" +
            tag +
            "' should be unquoted. Use 'JsonBuilder.isLenient = true' to accept non-compliant JSON",
          toString_1(currentObject(this))
        )
    }
    return _get_boolean_(value)
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_2 = function(tag) {
    return this.decodeTaggedBoolean_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_5 = function(tag) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag)
      var tmp1_primitive_0 = "byte"
      try {
        tmp$ret$0 = toByte_0(_get_int_(tmp0_primitive_0))
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(
            -1,
            "" + "Failed to parse '" + tmp1_primitive_0 + "'",
            toString_1(currentObject(this))
          )
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_2 = function(tag) {
    return this.decodeTaggedByte_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_5 = function(tag) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag)
      var tmp1_primitive_0 = "short"
      try {
        tmp$ret$0 = toShort_0(_get_int_(tmp0_primitive_0))
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(
            -1,
            "" + "Failed to parse '" + tmp1_primitive_0 + "'",
            toString_1(currentObject(this))
          )
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_2 = function(tag) {
    return this.decodeTaggedShort_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_5 = function(tag) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag)
      var tmp1_primitive_0 = "int"
      try {
        tmp$ret$0 = _get_int_(tmp0_primitive_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(
            -1,
            "" + "Failed to parse '" + tmp1_primitive_0 + "'",
            toString_1(currentObject(this))
          )
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_2 = function(tag) {
    return this.decodeTaggedInt_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_5 = function(tag) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag)
      var tmp1_primitive_0 = "long"
      try {
        tmp$ret$0 = _get_long_(tmp0_primitive_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(
            -1,
            "" + "Failed to parse '" + tmp1_primitive_0 + "'",
            toString_1(currentObject(this))
          )
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_2 = function(tag) {
    return this.decodeTaggedLong_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_5 = function(tag) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag)
      var tmp1_primitive_0 = "float"
      try {
        tmp$ret$0 = _get_float_(tmp0_primitive_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(
            -1,
            "" + "Failed to parse '" + tmp1_primitive_0 + "'",
            toString_1(currentObject(this))
          )
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_2 = function(tag) {
    return this.decodeTaggedFloat_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_5 = function(tag) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag)
      var tmp1_primitive_0 = "double"
      try {
        tmp$ret$0 = _get_double_(tmp0_primitive_0)
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(
            -1,
            "" + "Failed to parse '" + tmp1_primitive_0 + "'",
            toString_1(currentObject(this))
          )
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_2 = function(tag) {
    return this.decodeTaggedDouble_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_5 = function(tag) {
    var tmp$ret$0
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag)
      var tmp1_primitive_0 = "char"
      try {
        tmp$ret$0 = single(tmp0_primitive_0._get_content__1())
        break l$ret$1
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(
            -1,
            "" + "Failed to parse '" + tmp1_primitive_0 + "'",
            toString_1(currentObject(this))
          )
        } else {
          {
            throw $p
          }
        }
      }
    } while (false)
    return tmp$ret$0
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_2 = function(tag) {
    return this.decodeTaggedChar_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_5 = function(tag) {
    var value = this.getValue_2(tag)
    if (!this._get_json__4()._configuration._isLenient_0) {
      var literal = value instanceof JsonLiteral ? value : THROW_CCE()
      if (!literal._isString)
        throw JsonDecodingException_0(
          -1,
          "" +
            "String literal for key '" +
            tag +
            "' should be quoted. Use 'JsonBuilder.isLenient = true' to accept non-compliant JSON",
          toString_1(currentObject(this))
        )
    }
    return value._get_content__1()
  }
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_2 = function(tag) {
    return this.decodeTaggedString_5(
      (!(tag == null) ? typeof tag === "string" : false) ? tag : THROW_CCE()
    )
  }
  AbstractJsonTreeDecoder.$metadata$ = {
    simpleName: "AbstractJsonTreeDecoder",
    kind: "class",
    interfaces: [JsonDecoder],
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value)
    this._value_3 = value
    this._polyDiscriminator = polyDiscriminator
    this._polyDescriptor = polyDescriptor
    this._position = 0
  }
  JsonTreeDecoder.prototype._get_value__11 = function() {
    return this._value_3
  }
  JsonTreeDecoder.prototype.decodeElementIndex_7 = function(descriptor) {
    while (this._position < descriptor._get_elementsCount__12()) {
      var tmp0_this = this
      var tmp1 = tmp0_this._position
      tmp0_this._position = (tmp1 + 1) | 0
      var name = this.getTag_4(descriptor, tmp1)
      var tmp
      var tmp0_contains_0 = this._get_value__11()
      if (
        (isInterface(tmp0_contains_0, Map_0)
          ? tmp0_contains_0
          : THROW_CCE()
        ).containsKey_8(name)
      ) {
        tmp = !this._get_configuration__3()._coerceInputValues_0
          ? true
          : !coerceInputValue_0(
              this,
              descriptor,
              (this._position - 1) | 0,
              name
            )
      } else {
        {
          tmp = false
        }
      }
      if (tmp) {
        return (this._position - 1) | 0
      } else {
      }
    }
    return -1
  }
  JsonTreeDecoder.prototype.currentElement_2 = function(tag) {
    return getValue(this._get_value__11(), tag)
  }
  JsonTreeDecoder.prototype.beginStructure_16 = function(descriptor) {
    if (descriptor === this._polyDescriptor) return this
    return AbstractJsonTreeDecoder.prototype.beginStructure_16.call(
      this,
      descriptor
    )
  }
  JsonTreeDecoder.prototype.endStructure_7 = function(descriptor) {
    var tmp
    if (this._get_configuration__3()._ignoreUnknownKeys_0) {
      tmp = true
    } else {
      var tmp_0 = descriptor._get_kind__12()
      tmp = tmp_0 instanceof PolymorphicKind
    }
    if (tmp) return Unit_getInstance()
    else {
    }
    var names = cachedSerialNames(descriptor)
    var tmp0_iterator = this._get_value__11()
      ._get_keys__5()
      .iterator_37()
    while (tmp0_iterator.hasNext_14()) {
      var key = tmp0_iterator.next_14()
      if (
        !names.contains_23(key) ? !(key === this._polyDiscriminator) : false
      ) {
        throw UnknownKeyException(key, this._get_value__11().toString())
      }
    }
  }
  JsonTreeDecoder.$metadata$ = {
    simpleName: "JsonTreeDecoder",
    kind: "class",
    interfaces: [],
  }
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value)
    this._value_4 = value
    this._size_0 = this._value_4._get_size__27()
    this._currentIndex_0 = -1
  }
  JsonTreeListDecoder.prototype._get_value__11 = function() {
    return this._value_4
  }
  JsonTreeListDecoder.prototype.elementName_3 = function(desc, index) {
    return index.toString()
  }
  JsonTreeListDecoder.prototype.currentElement_2 = function(tag) {
    return this._value_4.get_27(toInt(tag))
  }
  JsonTreeListDecoder.prototype.decodeElementIndex_7 = function(descriptor) {
    while (this._currentIndex_0 < ((this._size_0 - 1) | 0)) {
      var tmp0_this = this
      var tmp1 = tmp0_this._currentIndex_0
      tmp0_this._currentIndex_0 = (tmp1 + 1) | 0
      Unit_getInstance()
      return this._currentIndex_0
    }
    return -1
  }
  JsonTreeListDecoder.$metadata$ = {
    simpleName: "JsonTreeListDecoder",
    kind: "class",
    interfaces: [],
  }
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this)
    this._value_5 = value
    this._keys_0 = toList_0(this._value_5._get_keys__5())
    this._size_1 = imul(this._keys_0._get_size__27(), 2)
    this._position_0 = -1
  }
  JsonTreeMapDecoder.prototype._get_value__11 = function() {
    return this._value_5
  }
  JsonTreeMapDecoder.prototype.elementName_3 = function(desc, index) {
    var i = (index / 2) | 0
    return this._keys_0.get_27(i)
  }
  JsonTreeMapDecoder.prototype.decodeElementIndex_7 = function(descriptor) {
    while (this._position_0 < ((this._size_1 - 1) | 0)) {
      var tmp0_this = this
      var tmp1 = tmp0_this._position_0
      tmp0_this._position_0 = (tmp1 + 1) | 0
      Unit_getInstance()
      return this._position_0
    }
    return -1
  }
  JsonTreeMapDecoder.prototype.currentElement_2 = function(tag) {
    return this._position_0 % 2 === 0
      ? JsonPrimitive_0(tag)
      : getValue(this._value_5, tag)
  }
  JsonTreeMapDecoder.prototype.endStructure_7 = function(descriptor) {}
  JsonTreeMapDecoder.$metadata$ = {
    simpleName: "JsonTreeMapDecoder",
    kind: "class",
    interfaces: [],
  }
  function readPolymorphicJson(_this_, discriminator, element, deserializer) {
    return new JsonTreeDecoder(
      _this_,
      element,
      discriminator,
      deserializer._get_descriptor__32()
    ).decodeSerializableValue_15(deserializer)
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this._get_currentTagOrNull__4()
    var tmp
    if (tmp0_safe_receiver == null) {
      tmp = null
    } else {
      tmp = $this.currentElement_2(tmp0_safe_receiver)
    }
    var tmp1_elvis_lhs = tmp
    return tmp1_elvis_lhs == null ? $this._get_value__11() : tmp1_elvis_lhs
  }
  function JsonTreeDecoder_init_$Init$(
    json,
    value,
    polyDiscriminator,
    polyDescriptor,
    $mask0,
    $marker,
    $this
  ) {
    var polyDiscriminator_0 = !(($mask0 & 4) === 0) ? null : polyDiscriminator
    var polyDescriptor_0 = !(($mask0 & 8) === 0) ? null : polyDescriptor
    JsonTreeDecoder.call(
      $this,
      json,
      value,
      polyDiscriminator_0,
      polyDescriptor_0
    )
    return $this
  }
  function JsonTreeDecoder_init_$Create$(
    json,
    value,
    polyDiscriminator,
    polyDescriptor,
    $mask0,
    $marker
  ) {
    return JsonTreeDecoder_init_$Init$(
      json,
      value,
      polyDiscriminator,
      polyDescriptor,
      $mask0,
      $marker,
      Object.create(JsonTreeDecoder.prototype)
    )
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var elementDescriptor = descriptor.getElementDescriptor_12(index)
    var tmp
    var tmp_0 = $this.currentElement_2(tag)
    if (tmp_0 instanceof JsonNull) {
      tmp = !elementDescriptor._get_isNullable__12()
    } else {
      {
        tmp = false
      }
    }
    if (tmp) return true
    else {
    }
    if (equals_0(elementDescriptor._get_kind__12(), ENUM_getInstance())) {
      var tmp_1 = $this.currentElement_2(tag)
      var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null
      var tmp1_elvis_lhs =
        tmp0_safe_receiver == null
          ? null
          : _get_contentOrNull_(tmp0_safe_receiver)
      var tmp_2
      if (tmp1_elvis_lhs == null) {
        return false
      } else {
        tmp_2 = tmp1_elvis_lhs
      }
      var enumValue = tmp_2
      var enumIndex = elementDescriptor.getElementIndex_12(enumValue)
      if (enumIndex === -3) return true
    }
    return false
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal)
    this._begin = begin
    this._end = end
    this._beginTc = charToTokenClass(this._begin)
    this._endTc = charToTokenClass(this._end)
  }
  WriteMode.$metadata$ = {
    simpleName: "WriteMode",
    kind: "class",
    interfaces: [],
  }
  function switchMode(_this_, desc) {
    var tmp0_subject = desc._get_kind__12()
    var tmp
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance()
    } else {
      if (equals_0(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance()
      } else {
        if (equals_0(tmp0_subject, MAP_getInstance())) {
          var keyDescriptor_1 = desc.getElementDescriptor_12(0)
          var keyKind_2 = keyDescriptor_1._get_kind__12()
          var tmp_0
          var tmp_1
          if (keyKind_2 instanceof PrimitiveKind) {
            tmp_1 = true
          } else {
            {
              tmp_1 = equals_0(keyKind_2, ENUM_getInstance())
            }
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance()
          } else {
            if (_this_._configuration._allowStructuredMapKeys_0) {
              tmp_0 = WriteMode_LIST_getInstance()
            } else {
              {
                throw InvalidKeyKindException(keyDescriptor_1)
              }
            }
          }
          tmp = tmp_0
        } else {
          {
            tmp = WriteMode_OBJ_getInstance()
          }
        }
      }
    }
    return tmp
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries()
    return WriteMode_OBJ_instance
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries()
    return WriteMode_LIST_instance
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries()
    return WriteMode_MAP_instance
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries()
    return WriteMode_POLY_OBJ_instance
  }
  var WriteMode_OBJ_instance
  var WriteMode_LIST_instance
  var WriteMode_MAP_instance
  var WriteMode_POLY_OBJ_instance
  var WriteMode_entriesInitialized
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized) return Unit_getInstance()
    WriteMode_entriesInitialized = true
    WriteMode_OBJ_instance = new WriteMode(
      "OBJ",
      0,
      new Char(123),
      new Char(125)
    )
    WriteMode_LIST_instance = new WriteMode(
      "LIST",
      1,
      new Char(91),
      new Char(93)
    )
    WriteMode_MAP_instance = new WriteMode(
      "MAP",
      2,
      new Char(123),
      new Char(125)
    )
    WriteMode_POLY_OBJ_instance = new WriteMode(
      "POLY_OBJ",
      3,
      new Char(91),
      new Char(93)
    )
  }
  var EmptySerializersModule
  function SerializersModule() {}
  SerializersModule.$metadata$ = {
    simpleName: "SerializersModule",
    kind: "class",
    interfaces: [],
  }
  function SerialModuleImpl(
    class2Serializer,
    polyBase2Serializers,
    polyBase2NamedSerializers,
    polyBase2DefaultProvider
  ) {
    SerializersModule.call(this)
    this._class2Serializer = class2Serializer
    this._polyBase2Serializers = polyBase2Serializers
    this._polyBase2NamedSerializers = polyBase2NamedSerializers
    this._polyBase2DefaultProvider = polyBase2DefaultProvider
  }
  SerialModuleImpl.prototype.getPolymorphic_0 = function(
    baseClass,
    serializedClassName
  ) {
    var tmp0_safe_receiver = this._polyBase2NamedSerializers.get_16(baseClass)
    var tmp =
      tmp0_safe_receiver == null
        ? null
        : tmp0_safe_receiver.get_16(serializedClassName)
    var registered = (!(tmp == null)
    ? isInterface(tmp, KSerializer)
    : false)
      ? tmp
      : null
    if (!(registered == null)) return registered
    var tmp_0 = this._polyBase2DefaultProvider.get_16(baseClass)
    var tmp1_safe_receiver = (!(tmp_0 == null)
    ? typeof tmp_0 === "function"
    : false)
      ? tmp_0
      : null
    var default_0 =
      tmp1_safe_receiver == null
        ? null
        : tmp1_safe_receiver(serializedClassName)
    if (!(default_0 == null)) return default_0
    var tmp_1
    if (baseClass.equals(PrimitiveClasses_getInstance()._get_anyClass_())) {
      var tmp2_safe_receiver = StandardSubtypesOfAny_getInstance().getDefaultDeserializer(
        serializedClassName
      )
      var tmp_2
      if (tmp2_safe_receiver == null) {
        tmp_2 = null
      } else {
        tmp_2 = (!(tmp2_safe_receiver == null)
        ? isInterface(tmp2_safe_receiver, KSerializer)
        : false)
          ? tmp2_safe_receiver
          : THROW_CCE()
      }
      tmp_1 = tmp_2
    } else {
      tmp_1 = null
    }
    return tmp_1
  }
  SerialModuleImpl.prototype.dumpTo_0 = function(collector) {
    var tmp0_forEach_0 = this._class2Serializer
    var tmp0_iterator_1 = tmp0_forEach_0._get_entries__5().iterator_37()
    while (tmp0_iterator_1.hasNext_14()) {
      var element_2 = tmp0_iterator_1.next_14()
      var kclass_4 = element_2._get_key__3()
      var serial_5 = element_2._get_value__11()
      var tmp = isInterface(kclass_4, KClass) ? kclass_4 : THROW_CCE()
      collector.contextual_0(
        tmp,
        isInterface(serial_5, KSerializer) ? serial_5 : THROW_CCE()
      )
    }
    var tmp1_forEach_0 = this._polyBase2Serializers
    var tmp0_iterator_1_0 = tmp1_forEach_0._get_entries__5().iterator_37()
    while (tmp0_iterator_1_0.hasNext_14()) {
      var element_2_0 = tmp0_iterator_1_0.next_14()
      var baseClass_4 = element_2_0._get_key__3()
      var classMap_5 = element_2_0._get_value__11()
      var tmp0_iterator_1_6 = classMap_5._get_entries__5().iterator_37()
      while (tmp0_iterator_1_6.hasNext_14()) {
        var element_2_7 = tmp0_iterator_1_6.next_14()
        var actualClass_4_8 = element_2_7._get_key__3()
        var serializer_5_9 = element_2_7._get_value__11()
        var tmp_0 = isInterface(baseClass_4, KClass) ? baseClass_4 : THROW_CCE()
        var tmp_1 = isInterface(actualClass_4_8, KClass)
          ? actualClass_4_8
          : THROW_CCE()
        collector.polymorphic_0(
          tmp_0,
          tmp_1,
          isInterface(serializer_5_9, KSerializer)
            ? serializer_5_9
            : THROW_CCE()
        )
      }
    }
    var tmp2_forEach_0 = this._polyBase2DefaultProvider
    var tmp0_iterator_1_1 = tmp2_forEach_0._get_entries__5().iterator_37()
    while (tmp0_iterator_1_1.hasNext_14()) {
      var element_2_1 = tmp0_iterator_1_1.next_14()
      var baseClass_4_0 = element_2_1._get_key__3()
      var provider_5 = element_2_1._get_value__11()
      var tmp_2 = isInterface(baseClass_4_0, KClass)
        ? baseClass_4_0
        : THROW_CCE()
      collector.polymorphicDefault_0(
        tmp_2,
        typeof provider_5 === "function" ? provider_5 : THROW_CCE()
      )
    }
  }
  SerialModuleImpl.$metadata$ = {
    simpleName: "SerialModuleImpl",
    kind: "class",
    interfaces: [],
  }
  function SerializersModuleCollector() {}
  SerializersModuleCollector.$metadata$ = {
    simpleName: "SerializersModuleCollector",
    kind: "interface",
    interfaces: [],
  }
  function StandardSubtypesOfAny() {
    StandardSubtypesOfAny_instance = this
    this._map_1 = mapOf([
      to(
        getKClass_0(List),
        ListSerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        getKClass_0(LinkedHashSet),
        SetSerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        getKClass_0(HashSet),
        new HashSetSerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        getKClass_0(Set),
        SetSerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        getKClass_0(LinkedHashMap),
        new LinkedHashMapSerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          ),
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        getKClass_0(HashMap),
        new HashMapSerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          ),
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        getKClass_0(Map_0),
        new LinkedHashMapSerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          ),
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        getKClass_0(Entry),
        MapEntrySerializer(
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          ),
          _get_nullable_(
            new PolymorphicSerializer(
              PrimitiveClasses_getInstance()._get_anyClass_()
            )
          )
        )
      ),
      to(
        PrimitiveClasses_getInstance()._get_stringClass_(),
        serializer(StringCompanionObject_getInstance())
      ),
      to(getKClass_0(Char), serializer_0(Companion_getInstance_3())),
      to(
        PrimitiveClasses_getInstance()._get_intClass_(),
        serializer_4(IntCompanionObject_getInstance())
      ),
      to(
        PrimitiveClasses_getInstance()._get_byteClass_(),
        serializer_6(ByteCompanionObject_getInstance())
      ),
      to(
        PrimitiveClasses_getInstance()._get_shortClass_(),
        serializer_5(ShortCompanionObject_getInstance())
      ),
      to(getKClass_0(Long), serializer_3(Companion_getInstance_4())),
      to(
        PrimitiveClasses_getInstance()._get_doubleClass_(),
        serializer_1(DoubleCompanionObject_getInstance())
      ),
      to(
        PrimitiveClasses_getInstance()._get_floatClass_(),
        serializer_2(FloatCompanionObject_getInstance())
      ),
      to(
        PrimitiveClasses_getInstance()._get_booleanClass_(),
        serializer_7(BooleanCompanionObject_getInstance())
      ),
      to(getKClass_0(Unit), serializer_8(Unit_getInstance())),
    ])
    var tmp = this
    var tmp0_mapKeys_0 = this._map_1
    var tmp1_mapKeysTo_0_1 = LinkedHashMap_init_$Create$_0(
      mapCapacity(tmp0_mapKeys_0._get_size__27())
    )
    var tmp0_associateByTo_0_2 = tmp0_mapKeys_0._get_entries__5()
    var tmp0_iterator_1_3 = tmp0_associateByTo_0_2.iterator_37()
    while (tmp0_iterator_1_3.hasNext_14()) {
      var element_2_4 = tmp0_iterator_1_3.next_14()
      var s_6 = element_2_4._get_value__11()
      var tmp_0 = s_6._get_descriptor__32()._get_serialName__12()
      tmp1_mapKeysTo_0_1.put_5(tmp_0, element_2_4._get_value__11())
      Unit_getInstance()
    }
    tmp._deserializingMap = tmp1_mapKeysTo_0_1
  }
  StandardSubtypesOfAny.prototype.getDefaultDeserializer = function(
    serializedClassName
  ) {
    return this._deserializingMap.get_16(serializedClassName)
  }
  StandardSubtypesOfAny.$metadata$ = {
    simpleName: "StandardSubtypesOfAny",
    kind: "object",
    interfaces: [],
  }
  var StandardSubtypesOfAny_instance
  function StandardSubtypesOfAny_getInstance() {
    if (StandardSubtypesOfAny_instance == null) new StandardSubtypesOfAny()
    return StandardSubtypesOfAny_instance
  }
  function SerializableWith() {}
  SerializableWith.$metadata$ = {
    simpleName: "SerializableWith",
    kind: "class",
    interfaces: [Annotation],
    associatedObjectKey: 0,
  }
  function getChecked(_this_, index) {
    if (!_get_indices_(_this_).contains_7(index))
      throw IndexOutOfBoundsException_init_$Create$(
        "" + "Index " + index + " out of bounds " + _get_indices_(_this_)
      )
    return _this_[index]
  }
  function Message() {}
  Message.$metadata$ = {
    simpleName: "Message",
    kind: "class",
    interfaces: [Serializable_0],
  }
  function MessageReceiver() {}
  MessageReceiver.$metadata$ = {
    simpleName: "MessageReceiver",
    kind: "interface",
    interfaces: [],
  }
  function Serializable_0() {}
  Serializable_0.$metadata$ = {
    simpleName: "Serializable",
    kind: "interface",
    interfaces: [],
  }
  function SmartypeApiBase() {
    var tmp = this
    tmp._mutableReceivers = ArrayList_init_$Create$()
  }
  SmartypeApiBase.prototype.send = function(message) {
    var messageJson = message.toJson()
    var tmp0_forEach_0 = this._mutableReceivers
    var tmp0_iterator_1 = tmp0_forEach_0.iterator_37()
    while (tmp0_iterator_1.hasNext_14()) {
      var element_2 = tmp0_iterator_1.next_14()
      element_2.receive(messageJson)
    }
  }
  SmartypeApiBase.prototype.addReceiver = function(receiver) {
    return this._mutableReceivers.add_16(receiver)
  }
  SmartypeApiBase.prototype.removeReceiver = function(receiver) {
    return this._mutableReceivers.remove_12(receiver)
  }
  SmartypeApiBase.$metadata$ = {
    simpleName: "SmartypeApiBase",
    kind: "class",
    interfaces: [],
  }
  function _no_name_provided_$factory_36() {
    var i = new _no_name_provided__44()
    return function(p1) {
      i.invoke_65(p1)
      return Unit_getInstance()
    }
  }
  function _no_name_provided__44() {}
  _no_name_provided__44.prototype.invoke_65 = function(_this__0) {
    _this__0._isLenient = true
    _this__0._ignoreUnknownKeys = true
  }
  _no_name_provided__44.prototype.invoke_66 = function(p1) {
    this.invoke_65(p1 instanceof JsonBuilder ? p1 : THROW_CCE())
    return Unit_getInstance()
  }
  _no_name_provided__44.$metadata$ = {
    kind: "class",
    interfaces: [],
  }
  function Companion_7() {
    Companion_instance_6 = this
  }
  Companion_7.prototype.convertToEvent = function(message) {
    var json = Json$default(null, _no_name_provided_$factory_36(), 1, null)
    var adapter = json.decodeFromString_1(
      Companion_getInstance_7().serializer_1(),
      message
    )
    var type = adapter._get_event_type_()
    if (type.equals(EventType_custom_event_getInstance())) {
      return json.decodeFromString_1(
        Companion_getInstance_8().serializer_1(),
        message
      )
    } else if (type.equals(EventType_screen_view_getInstance())) {
      return json.decodeFromString_1(
        Companion_getInstance_9().serializer_1(),
        message
      )
    }
    return null
  }
  Companion_7.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_6
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null) new Companion_7()
    return Companion_instance_6
  }
  function BaseEvent() {
    this._event_type = null
  }
  BaseEvent.prototype._set_event_type__1 = function(_set___) {
    this._event_type = _set___
  }
  BaseEvent.$metadata$ = {
    simpleName: "BaseEvent",
    kind: "class",
    interfaces: [],
  }
  function EventType(name, ordinal) {
    Enum.call(this, name, ordinal)
  }
  EventType.$metadata$ = {
    simpleName: "EventType",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: $serializer_getInstance },
  }
  function BaseEventAdapter() {}
  BaseEventAdapter.prototype._get_event_type_ = function() {
    var tmp = this._event_type_0
    if (!(tmp == null)) return tmp
    else {
      throwUninitializedPropertyAccessException("event_type")
    }
  }
  BaseEventAdapter.$metadata$ = {
    simpleName: "BaseEventAdapter",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: $serializer_getInstance_0 },
  }
  function EventType_custom_event_getInstance() {
    EventType_initEntries()
    return EventType_custom_event_instance
  }
  function EventType_screen_view_getInstance() {
    EventType_initEntries()
    return EventType_screen_view_instance
  }
  var EventType_custom_event_instance
  var EventType_screen_view_instance
  function $serializer() {
    $serializer_instance = this
    var tmp0_serialDesc = new EnumDescriptor(
      "com.mparticle.smartype.api.receivers.mparticle.models.EventType",
      2
    )
    tmp0_serialDesc.addElement_0("custom_event", false)
    tmp0_serialDesc.addElement_0("screen_view", false)
    this._descriptor_18 = tmp0_serialDesc
  }
  $serializer.prototype._get_descriptor__32 = function() {
    return this._descriptor_18
  }
  $serializer.prototype.childSerializers_6 = function() {
    var tmp0_arrayOf_0 = []
    return tmp0_arrayOf_0
  }
  $serializer.prototype.deserialize_32 = function(decoder) {
    return values()[decoder.decodeEnum_7(this._descriptor_18)]
  }
  $serializer.$metadata$ = {
    simpleName: "$serializer",
    kind: "object",
    interfaces: [GeneratedSerializer],
  }
  var $serializer_instance
  function $serializer_getInstance() {
    if ($serializer_instance == null) new $serializer()
    return $serializer_instance
  }
  function values() {
    return [
      EventType_custom_event_getInstance(),
      EventType_screen_view_getInstance(),
    ]
  }
  var EventType_entriesInitialized
  function EventType_initEntries() {
    if (EventType_entriesInitialized) return Unit_getInstance()
    EventType_entriesInitialized = true
    EventType_custom_event_instance = new EventType("custom_event", 0)
    EventType_screen_view_instance = new EventType("screen_view", 1)
  }
  function Companion_8() {
    Companion_instance_7 = this
  }
  Companion_8.prototype.serializer_1 = function() {
    return $serializer_getInstance_0()
  }
  Companion_8.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_7
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null) new Companion_8()
    return Companion_instance_7
  }
  function $serializer_0() {
    $serializer_instance_0 = this
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor(
      "com.mparticle.smartype.api.receivers.mparticle.models.BaseEventAdapter",
      this,
      1
    )
    tmp0_serialDesc.addElement_0("event_type", false)
    this._descriptor_19 = tmp0_serialDesc
  }
  $serializer_0.prototype._get_descriptor__32 = function() {
    return this._descriptor_19
  }
  $serializer_0.prototype.childSerializers_6 = function() {
    var tmp0_arrayOf_0 = [$serializer_getInstance()]
    return tmp0_arrayOf_0
  }
  $serializer_0.prototype.deserialize_32 = function(decoder) {
    var tmp0_desc = this._descriptor_19
    var tmp1_flag = true
    var tmp2_index = 0
    var tmp3_bitMask0 = 0
    var tmp4_local0 = null
    var tmp5_input = decoder.beginStructure_16(tmp0_desc)
    if (tmp5_input.decodeSequentially_7()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_16(
        tmp0_desc,
        0,
        $serializer_getInstance(),
        tmp4_local0
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 1
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_7(tmp0_desc)
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false
            break
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_16(
              tmp0_desc,
              0,
              $serializer_getInstance(),
              tmp4_local0
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 1
            break
          default:
            throw new UnknownFieldException(tmp2_index)
        }
      }
    tmp5_input.endStructure_7(tmp0_desc)
    return BaseEventAdapter_init_$Create$(tmp3_bitMask0, tmp4_local0, null)
  }
  $serializer_0.$metadata$ = {
    simpleName: "$serializer",
    kind: "object",
    interfaces: [GeneratedSerializer],
  }
  var $serializer_instance_0
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null) new $serializer_0()
    return $serializer_instance_0
  }
  function BaseEventAdapter_init_$Init$(
    seen1,
    event_type,
    serializationConstructorMarker,
    $this
  ) {
    if (0 === (seen1 & 1)) throw new MissingFieldException("event_type")
    else $this._event_type_0 = event_type
    return $this
  }
  function BaseEventAdapter_init_$Create$(
    seen1,
    event_type,
    serializationConstructorMarker
  ) {
    return BaseEventAdapter_init_$Init$(
      seen1,
      event_type,
      serializationConstructorMarker,
      Object.create(BaseEventAdapter.prototype)
    )
  }
  function CustomEvent() {}
  CustomEvent.$metadata$ = {
    simpleName: "CustomEvent",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: $serializer_getInstance_1 },
  }
  function CustomEventData() {}
  CustomEventData.$metadata$ = {
    simpleName: "CustomEventData",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: $serializer_getInstance_2 },
  }
  function CustomEventType(name, ordinal) {
    Enum.call(this, name, ordinal)
  }
  CustomEventType.$metadata$ = {
    simpleName: "CustomEventType",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: $serializer_getInstance_3 },
  }
  function CustomEventType_navigation_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_navigation_instance
  }
  function CustomEventType_location_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_location_instance
  }
  function CustomEventType_search_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_search_instance
  }
  function CustomEventType_transaction_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_transaction_instance
  }
  function CustomEventType_user_content_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_user_content_instance
  }
  function CustomEventType_user_preference_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_user_preference_instance
  }
  function CustomEventType_social_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_social_instance
  }
  function CustomEventType_other_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_other_instance
  }
  function CustomEventType_media_getInstance() {
    CustomEventType_initEntries()
    return CustomEventType_media_instance
  }
  function Companion_9() {
    Companion_instance_8 = this
  }
  Companion_9.prototype.serializer_1 = function() {
    return $serializer_getInstance_1()
  }
  Companion_9.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_8
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null) new Companion_9()
    return Companion_instance_8
  }
  function $serializer_1() {
    $serializer_instance_1 = this
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor(
      "custom_event",
      this,
      1
    )
    tmp0_serialDesc.addElement_0("data", true)
    this._descriptor_20 = tmp0_serialDesc
  }
  $serializer_1.prototype._get_descriptor__32 = function() {
    return this._descriptor_20
  }
  $serializer_1.prototype.childSerializers_6 = function() {
    var tmp0_arrayOf_0 = [new NullableSerializer($serializer_getInstance_2())]
    return tmp0_arrayOf_0
  }
  $serializer_1.prototype.deserialize_32 = function(decoder) {
    var tmp0_desc = this._descriptor_20
    var tmp1_flag = true
    var tmp2_index = 0
    var tmp3_bitMask0 = 0
    var tmp4_local0 = null
    var tmp5_input = decoder.beginStructure_16(tmp0_desc)
    if (tmp5_input.decodeSequentially_7()) {
      tmp4_local0 = tmp5_input.decodeNullableSerializableElement_16(
        tmp0_desc,
        0,
        $serializer_getInstance_2(),
        tmp4_local0
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 1
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_7(tmp0_desc)
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false
            break
          case 0:
            tmp4_local0 = tmp5_input.decodeNullableSerializableElement_16(
              tmp0_desc,
              0,
              $serializer_getInstance_2(),
              tmp4_local0
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 1
            break
          default:
            throw new UnknownFieldException(tmp2_index)
        }
      }
    tmp5_input.endStructure_7(tmp0_desc)
    return CustomEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, null)
  }
  $serializer_1.$metadata$ = {
    simpleName: "$serializer",
    kind: "object",
    interfaces: [GeneratedSerializer],
  }
  var $serializer_instance_1
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null) new $serializer_1()
    return $serializer_instance_1
  }
  function CustomEvent_init_$Init$(
    seen1,
    data,
    serializationConstructorMarker,
    $this
  ) {
    BaseEvent.call($this)
    if (0 === (seen1 & 1)) $this._data = null
    else $this._data = data
    $this._set_event_type__1(EventType_custom_event_getInstance())
    return $this
  }
  function CustomEvent_init_$Create$(
    seen1,
    data,
    serializationConstructorMarker
  ) {
    return CustomEvent_init_$Init$(
      seen1,
      data,
      serializationConstructorMarker,
      Object.create(CustomEvent.prototype)
    )
  }
  function $serializer_2() {
    $serializer_instance_2 = this
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor(
      "com.mparticle.smartype.api.receivers.mparticle.models.CustomEventData",
      this,
      3
    )
    tmp0_serialDesc.addElement_0("event_name", true)
    tmp0_serialDesc.addElement_0("custom_event_type", true)
    tmp0_serialDesc.addElement_0("custom_attributes", true)
    this._descriptor_21 = tmp0_serialDesc
  }
  $serializer_2.prototype._get_descriptor__32 = function() {
    return this._descriptor_21
  }
  $serializer_2.prototype.childSerializers_6 = function() {
    var tmp0_arrayOf_0 = [
      new NullableSerializer(StringSerializer_getInstance()),
      new NullableSerializer($serializer_getInstance_3()),
      new NullableSerializer(
        new LinkedHashMapSerializer(
          StringSerializer_getInstance(),
          JsonPrimitiveSerializer_getInstance()
        )
      ),
    ]
    return tmp0_arrayOf_0
  }
  $serializer_2.prototype.deserialize_32 = function(decoder) {
    var tmp0_desc = this._descriptor_21
    var tmp1_flag = true
    var tmp2_index = 0
    var tmp3_bitMask0 = 0
    var tmp4_local0 = null
    var tmp5_local1 = null
    var tmp6_local2 = null
    var tmp7_input = decoder.beginStructure_16(tmp0_desc)
    if (tmp7_input.decodeSequentially_7()) {
      tmp4_local0 = tmp7_input.decodeNullableSerializableElement_16(
        tmp0_desc,
        0,
        StringSerializer_getInstance(),
        tmp4_local0
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 1
      tmp5_local1 = tmp7_input.decodeNullableSerializableElement_16(
        tmp0_desc,
        1,
        $serializer_getInstance_3(),
        tmp5_local1
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 2
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_16(
        tmp0_desc,
        2,
        new LinkedHashMapSerializer(
          StringSerializer_getInstance(),
          JsonPrimitiveSerializer_getInstance()
        ),
        tmp6_local2
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 4
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_7(tmp0_desc)
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false
            break
          case 0:
            tmp4_local0 = tmp7_input.decodeNullableSerializableElement_16(
              tmp0_desc,
              0,
              StringSerializer_getInstance(),
              tmp4_local0
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 1
            break
          case 1:
            tmp5_local1 = tmp7_input.decodeNullableSerializableElement_16(
              tmp0_desc,
              1,
              $serializer_getInstance_3(),
              tmp5_local1
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 2
            break
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_16(
              tmp0_desc,
              2,
              new LinkedHashMapSerializer(
                StringSerializer_getInstance(),
                JsonPrimitiveSerializer_getInstance()
              ),
              tmp6_local2
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 4
            break
          default:
            throw new UnknownFieldException(tmp2_index)
        }
      }
    tmp7_input.endStructure_7(tmp0_desc)
    return CustomEventData_init_$Create$(
      tmp3_bitMask0,
      tmp4_local0,
      tmp5_local1,
      tmp6_local2,
      null
    )
  }
  $serializer_2.$metadata$ = {
    simpleName: "$serializer",
    kind: "object",
    interfaces: [GeneratedSerializer],
  }
  var $serializer_instance_2
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null) new $serializer_2()
    return $serializer_instance_2
  }
  function CustomEventData_init_$Init$(
    seen1,
    event_name,
    custom_event_type,
    custom_attributes,
    serializationConstructorMarker,
    $this
  ) {
    if (0 === (seen1 & 1)) $this._event_name = null
    else $this._event_name = event_name
    if (0 === (seen1 & 2)) $this._custom_event_type = null
    else $this._custom_event_type = custom_event_type
    if (0 === (seen1 & 4)) $this._custom_attributes = null
    else $this._custom_attributes = custom_attributes
    return $this
  }
  function CustomEventData_init_$Create$(
    seen1,
    event_name,
    custom_event_type,
    custom_attributes,
    serializationConstructorMarker
  ) {
    return CustomEventData_init_$Init$(
      seen1,
      event_name,
      custom_event_type,
      custom_attributes,
      serializationConstructorMarker,
      Object.create(CustomEventData.prototype)
    )
  }
  var CustomEventType_navigation_instance
  var CustomEventType_location_instance
  var CustomEventType_search_instance
  var CustomEventType_transaction_instance
  var CustomEventType_user_content_instance
  var CustomEventType_user_preference_instance
  var CustomEventType_social_instance
  var CustomEventType_other_instance
  var CustomEventType_media_instance
  function $serializer_3() {
    $serializer_instance_3 = this
    var tmp0_serialDesc = new EnumDescriptor("custom_event_type", 9)
    tmp0_serialDesc.addElement_0("navigation", false)
    tmp0_serialDesc.addElement_0("location", false)
    tmp0_serialDesc.addElement_0("search", false)
    tmp0_serialDesc.addElement_0("transaction", false)
    tmp0_serialDesc.addElement_0("user_content", false)
    tmp0_serialDesc.addElement_0("user_preference", false)
    tmp0_serialDesc.addElement_0("social", false)
    tmp0_serialDesc.addElement_0("other", false)
    tmp0_serialDesc.addElement_0("media", false)
    this._descriptor_22 = tmp0_serialDesc
  }
  $serializer_3.prototype._get_descriptor__32 = function() {
    return this._descriptor_22
  }
  $serializer_3.prototype.childSerializers_6 = function() {
    var tmp0_arrayOf_0 = []
    return tmp0_arrayOf_0
  }
  $serializer_3.prototype.deserialize_32 = function(decoder) {
    return values_0()[decoder.decodeEnum_7(this._descriptor_22)]
  }
  $serializer_3.$metadata$ = {
    simpleName: "$serializer",
    kind: "object",
    interfaces: [GeneratedSerializer],
  }
  var $serializer_instance_3
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null) new $serializer_3()
    return $serializer_instance_3
  }
  function values_0() {
    return [
      CustomEventType_navigation_getInstance(),
      CustomEventType_location_getInstance(),
      CustomEventType_search_getInstance(),
      CustomEventType_transaction_getInstance(),
      CustomEventType_user_content_getInstance(),
      CustomEventType_user_preference_getInstance(),
      CustomEventType_social_getInstance(),
      CustomEventType_other_getInstance(),
      CustomEventType_media_getInstance(),
    ]
  }
  var CustomEventType_entriesInitialized
  function CustomEventType_initEntries() {
    if (CustomEventType_entriesInitialized) return Unit_getInstance()
    CustomEventType_entriesInitialized = true
    CustomEventType_navigation_instance = new CustomEventType("navigation", 0)
    CustomEventType_location_instance = new CustomEventType("location", 1)
    CustomEventType_search_instance = new CustomEventType("search", 2)
    CustomEventType_transaction_instance = new CustomEventType("transaction", 3)
    CustomEventType_user_content_instance = new CustomEventType(
      "user_content",
      4
    )
    CustomEventType_user_preference_instance = new CustomEventType(
      "user_preference",
      5
    )
    CustomEventType_social_instance = new CustomEventType("social", 6)
    CustomEventType_other_instance = new CustomEventType("other", 7)
    CustomEventType_media_instance = new CustomEventType("media", 8)
  }
  function ScreenViewEvent() {}
  ScreenViewEvent.$metadata$ = {
    simpleName: "ScreenViewEvent",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: $serializer_getInstance_4 },
  }
  function ScreenViewEventData() {}
  ScreenViewEventData.$metadata$ = {
    simpleName: "ScreenViewEventData",
    kind: "class",
    interfaces: [],
    associatedObjects: { 0: $serializer_getInstance_5 },
  }
  function Companion_10() {
    Companion_instance_9 = this
  }
  Companion_10.prototype.serializer_1 = function() {
    return $serializer_getInstance_4()
  }
  Companion_10.$metadata$ = {
    simpleName: "Companion",
    kind: "object",
    interfaces: [],
  }
  var Companion_instance_9
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null) new Companion_10()
    return Companion_instance_9
  }
  function $serializer_4() {
    $serializer_instance_4 = this
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor(
      "com.mparticle.smartype.api.receivers.mparticle.models.ScreenViewEvent",
      this,
      1
    )
    tmp0_serialDesc.addElement_0("data", true)
    this._descriptor_23 = tmp0_serialDesc
  }
  $serializer_4.prototype._get_descriptor__32 = function() {
    return this._descriptor_23
  }
  $serializer_4.prototype.childSerializers_6 = function() {
    var tmp0_arrayOf_0 = [new NullableSerializer($serializer_getInstance_5())]
    return tmp0_arrayOf_0
  }
  $serializer_4.prototype.deserialize_32 = function(decoder) {
    var tmp0_desc = this._descriptor_23
    var tmp1_flag = true
    var tmp2_index = 0
    var tmp3_bitMask0 = 0
    var tmp4_local0 = null
    var tmp5_input = decoder.beginStructure_16(tmp0_desc)
    if (tmp5_input.decodeSequentially_7()) {
      tmp4_local0 = tmp5_input.decodeNullableSerializableElement_16(
        tmp0_desc,
        0,
        $serializer_getInstance_5(),
        tmp4_local0
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 1
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_7(tmp0_desc)
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false
            break
          case 0:
            tmp4_local0 = tmp5_input.decodeNullableSerializableElement_16(
              tmp0_desc,
              0,
              $serializer_getInstance_5(),
              tmp4_local0
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 1
            break
          default:
            throw new UnknownFieldException(tmp2_index)
        }
      }
    tmp5_input.endStructure_7(tmp0_desc)
    return ScreenViewEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, null)
  }
  $serializer_4.$metadata$ = {
    simpleName: "$serializer",
    kind: "object",
    interfaces: [GeneratedSerializer],
  }
  var $serializer_instance_4
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null) new $serializer_4()
    return $serializer_instance_4
  }
  function ScreenViewEvent_init_$Init$(
    seen1,
    data,
    serializationConstructorMarker,
    $this
  ) {
    BaseEvent.call($this)
    if (0 === (seen1 & 1)) $this._data_0 = null
    else $this._data_0 = data
    $this._set_event_type__1(EventType_screen_view_getInstance())
    return $this
  }
  function ScreenViewEvent_init_$Create$(
    seen1,
    data,
    serializationConstructorMarker
  ) {
    return ScreenViewEvent_init_$Init$(
      seen1,
      data,
      serializationConstructorMarker,
      Object.create(ScreenViewEvent.prototype)
    )
  }
  function $serializer_5() {
    $serializer_instance_5 = this
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor(
      "com.mparticle.smartype.api.receivers.mparticle.models.ScreenViewEventData",
      this,
      2
    )
    tmp0_serialDesc.addElement_0("screen_name", true)
    tmp0_serialDesc.addElement_0("custom_attributes", true)
    this._descriptor_24 = tmp0_serialDesc
  }
  $serializer_5.prototype._get_descriptor__32 = function() {
    return this._descriptor_24
  }
  $serializer_5.prototype.childSerializers_6 = function() {
    var tmp0_arrayOf_0 = [
      new NullableSerializer(StringSerializer_getInstance()),
      new NullableSerializer(
        new LinkedHashMapSerializer(
          StringSerializer_getInstance(),
          JsonPrimitiveSerializer_getInstance()
        )
      ),
    ]
    return tmp0_arrayOf_0
  }
  $serializer_5.prototype.deserialize_32 = function(decoder) {
    var tmp0_desc = this._descriptor_24
    var tmp1_flag = true
    var tmp2_index = 0
    var tmp3_bitMask0 = 0
    var tmp4_local0 = null
    var tmp5_local1 = null
    var tmp6_input = decoder.beginStructure_16(tmp0_desc)
    if (tmp6_input.decodeSequentially_7()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_16(
        tmp0_desc,
        0,
        StringSerializer_getInstance(),
        tmp4_local0
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 1
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_16(
        tmp0_desc,
        1,
        new LinkedHashMapSerializer(
          StringSerializer_getInstance(),
          JsonPrimitiveSerializer_getInstance()
        ),
        tmp5_local1
      )
      tmp3_bitMask0 = tmp3_bitMask0 | 2
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_7(tmp0_desc)
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false
            break
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_16(
              tmp0_desc,
              0,
              StringSerializer_getInstance(),
              tmp4_local0
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 1
            break
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_16(
              tmp0_desc,
              1,
              new LinkedHashMapSerializer(
                StringSerializer_getInstance(),
                JsonPrimitiveSerializer_getInstance()
              ),
              tmp5_local1
            )
            tmp3_bitMask0 = tmp3_bitMask0 | 2
            break
          default:
            throw new UnknownFieldException(tmp2_index)
        }
      }
    tmp6_input.endStructure_7(tmp0_desc)
    return ScreenViewEventData_init_$Create$(
      tmp3_bitMask0,
      tmp4_local0,
      tmp5_local1,
      null
    )
  }
  $serializer_5.$metadata$ = {
    simpleName: "$serializer",
    kind: "object",
    interfaces: [GeneratedSerializer],
  }
  var $serializer_instance_5
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null) new $serializer_5()
    return $serializer_instance_5
  }
  function ScreenViewEventData_init_$Init$(
    seen1,
    screen_name,
    custom_attributes,
    serializationConstructorMarker,
    $this
  ) {
    if (0 === (seen1 & 1)) $this._screen_name = null
    else $this._screen_name = screen_name
    if (0 === (seen1 & 2)) $this._custom_attributes_0 = null
    else $this._custom_attributes_0 = custom_attributes
    return $this
  }
  function ScreenViewEventData_init_$Create$(
    seen1,
    screen_name,
    custom_attributes,
    serializationConstructorMarker
  ) {
    return ScreenViewEventData_init_$Init$(
      seen1,
      screen_name,
      custom_attributes,
      serializationConstructorMarker,
      Object.create(ScreenViewEventData.prototype)
    )
  }
  function mParticleReceiver() {
    return new MParticleReceiver()
  }
  function MParticleReceiver() {}
  MParticleReceiver.prototype.receive_0 = function(message) {
    ;(function() {
      var $externalVarargReceiverTmp = console
      return $externalVarargReceiverTmp.log.apply(
        $externalVarargReceiverTmp,
        [].concat(
          [].slice.call(["" + "MParticleReceiver#receive:message=" + message])
        )
      )
    }.call(this))
    var tmp0_elvis_lhs = Companion_getInstance_6().convertToEvent(message)
    var tmp
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance()
    } else {
      tmp = tmp0_elvis_lhs
    }
    var commonEvent = tmp
    var tmp0_get_0 = window
    var tmp1_get_0 = "mParticle"
    var mParticle_0 = tmp0_get_0[tmp1_get_0]
    if (commonEvent instanceof CustomEvent) {
      var data = commonEvent._data
      if (!(data == null)) {
        var eventType = new NativeConverters().convertToNativeEventType(
          data._custom_event_type
        )
        var eventName = data._event_name
        var attributes = data._custom_attributes
        if (!(eventName == null) ? !(eventType == null) : false) {
          if (!(attributes == null)) {
            var attributesString = "{"
            var tmp1_iterator = attributes._get_entries__5().iterator_37()
            while (tmp1_iterator.hasNext_14()) {
              var tmp2_loop_parameter = tmp1_iterator.next_14()
              var key = tmp2_loop_parameter._get_key__3()
              var value = tmp2_loop_parameter._get_value__11()
              if (value._get_isString__1()) {
                var content = value._get_content__1()
                attributesString =
                  attributesString + ("" + '"' + key + '":"' + content + '",')
              } else {
                attributesString =
                  attributesString + ("" + '"' + key + '":' + value + ",")
              }
            }
            attributesString = dropLast(attributesString, 1)
            attributesString = attributesString + "}"
            mParticle_0.logEvent(
              eventName,
              eventType,
              JSON.parse(attributesString)
            )
          } else {
            mParticle_0.logEvent(eventName, eventType, void 1)
          }
        }
      }
    } else {
    }
    if (commonEvent instanceof ScreenViewEvent) {
      var data_0 = commonEvent._data_0
      if (!(data_0 == null)) {
        var screenName = data_0._screen_name
        var attributes_0 = data_0._custom_attributes_0
        if (!(screenName == null)) {
          if (!(attributes_0 == null)) {
            var attributesString_0 = "{"
            var tmp3_iterator = attributes_0._get_entries__5().iterator_37()
            while (tmp3_iterator.hasNext_14()) {
              var tmp4_loop_parameter = tmp3_iterator.next_14()
              var key_0 = tmp4_loop_parameter._get_key__3()
              var value_0 = tmp4_loop_parameter._get_value__11()
              if (value_0._get_isString__1()) {
                var content_0 = value_0._get_content__1()
                attributesString_0 =
                  attributesString_0 +
                  ("" + '"' + key_0 + '":"' + content_0 + '",')
              } else {
                attributesString_0 =
                  attributesString_0 + ("" + '"' + key_0 + '":' + value_0 + ",")
              }
            }
            attributesString_0 = dropLast(attributesString_0, 1)
            attributesString_0 = attributesString_0 + "}"
            mParticle_0.logPageView(screenName, JSON.parse(attributesString_0))
          } else {
            mParticle_0.logPageView(screenName, void 1)
          }
        }
      }
    } else {
    }
  }
  MParticleReceiver.prototype.receive = function(message) {
    return this.receive_0(message)
  }
  MParticleReceiver.$metadata$ = {
    simpleName: "MParticleReceiver",
    kind: "class",
    interfaces: [MessageReceiver],
  }
  function NativeConverters() {}
  NativeConverters.prototype.convertToNativeEventType = function(
    commonCustomEventType
  ) {
    var tmp0_subject = commonCustomEventType
    return equals_0(tmp0_subject, CustomEventType_navigation_getInstance())
      ? 1
      : equals_0(tmp0_subject, CustomEventType_location_getInstance())
      ? 2
      : equals_0(tmp0_subject, CustomEventType_search_getInstance())
      ? 3
      : equals_0(tmp0_subject, CustomEventType_transaction_getInstance())
      ? 4
      : equals_0(tmp0_subject, CustomEventType_user_content_getInstance())
      ? 5
      : equals_0(tmp0_subject, CustomEventType_user_preference_getInstance())
      ? 6
      : equals_0(tmp0_subject, CustomEventType_social_getInstance())
      ? 7
      : equals_0(tmp0_subject, CustomEventType_other_getInstance())
      ? 8
      : equals_0(tmp0_subject, CustomEventType_media_getInstance())
      ? 9
      : null
  }
  NativeConverters.$metadata$ = {
    simpleName: "NativeConverters",
    kind: "class",
    interfaces: [],
  }
  function AddCustomizationColorDataCustomAttributesColor() {}
  AddCustomizationColorDataCustomAttributesColor.prototype._set_value__0 = function(
    _set___
  ) {
    this._value_6 = _set___
  }
  AddCustomizationColorDataCustomAttributesColor.prototype._get_value__11 = function() {
    var tmp = this._value_6
    if (!(tmp == null)) return tmp
    else {
      throwUninitializedPropertyAccessException("value")
    }
  }
  AddCustomizationColorDataCustomAttributesColor.prototype.toJson_7 = function() {
    return this._get_value__11()
  }
  AddCustomizationColorDataCustomAttributesColor.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationColorDataCustomAttributesColor.prototype.BLUE = function() {
    var enumVal = new AddCustomizationColorDataCustomAttributesColor()
    enumVal._value_6 = "blue"
    return enumVal
  }
  AddCustomizationColorDataCustomAttributesColor.prototype.BROWN = function() {
    var enumVal = new AddCustomizationColorDataCustomAttributesColor()
    enumVal._value_6 = "brown"
    return enumVal
  }
  AddCustomizationColorDataCustomAttributesColor.prototype.GREEN = function() {
    var enumVal = new AddCustomizationColorDataCustomAttributesColor()
    enumVal._value_6 = "green"
    return enumVal
  }
  AddCustomizationColorDataCustomAttributesColor.prototype.LAVENDER = function() {
    var enumVal = new AddCustomizationColorDataCustomAttributesColor()
    enumVal._value_6 = "lavender"
    return enumVal
  }
  AddCustomizationColorDataCustomAttributesColor.prototype.YELLOW = function() {
    var enumVal = new AddCustomizationColorDataCustomAttributesColor()
    enumVal._value_6 = "yellow"
    return enumVal
  }
  AddCustomizationColorDataCustomAttributesColor.$metadata$ = {
    simpleName: "AddCustomizationColorDataCustomAttributesColor",
    kind: "class",
    interfaces: [Serializable_0],
  }
  Object.defineProperty(
    AddCustomizationColorDataCustomAttributesColor.prototype,
    "value",
    {
      configurable: true,
      get:
        AddCustomizationColorDataCustomAttributesColor.prototype._get_value__11,
      set:
        AddCustomizationColorDataCustomAttributesColor.prototype._set_value__0,
    }
  )
  function AddCustomizationColorDataCustomAttributes(color) {
    this._color = color
  }
  AddCustomizationColorDataCustomAttributes.prototype._get_color_ = function() {
    return this._color
  }
  AddCustomizationColorDataCustomAttributes.prototype.toJson_7 = function() {
    var result = "{"
    result = result + ('"color":"' + this._color.toJson_7() + '",')
    result = dropLast(result, 1)
    result = result + "}"
    return result
  }
  AddCustomizationColorDataCustomAttributes.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationColorDataCustomAttributes.prototype.component1_5 = function() {
    return this._color
  }
  AddCustomizationColorDataCustomAttributes.prototype.copy = function(color) {
    return new AddCustomizationColorDataCustomAttributes(color)
  }
  AddCustomizationColorDataCustomAttributes.prototype.copy$default = function(
    color,
    $mask0,
    $handler
  ) {
    var color_0 = !(($mask0 & 1) === 0) ? this._color : color
    return this.copy(color_0)
  }
  AddCustomizationColorDataCustomAttributes.prototype.toString = function() {
    return (
      "" +
      "AddCustomizationColorDataCustomAttributes(color=" +
      this._color +
      ")"
    )
  }
  AddCustomizationColorDataCustomAttributes.prototype.hashCode = function() {
    return hashCode(this._color)
  }
  AddCustomizationColorDataCustomAttributes.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof AddCustomizationColorDataCustomAttributes))
      return false
    else {
    }
    var tmp0_other_with_cast =
      other instanceof AddCustomizationColorDataCustomAttributes
        ? other
        : THROW_CCE()
    if (!equals_0(this._color, tmp0_other_with_cast._color)) return false
    return true
  }
  AddCustomizationColorDataCustomAttributes.$metadata$ = {
    simpleName: "AddCustomizationColorDataCustomAttributes",
    kind: "class",
    interfaces: [Serializable_0],
  }
  Object.defineProperty(
    AddCustomizationColorDataCustomAttributes.prototype,
    "color",
    {
      configurable: true,
      get: AddCustomizationColorDataCustomAttributes.prototype._get_color_,
    }
  )
  function AddCustomizationColorData(customAttributes) {
    this._customAttributes = customAttributes
    this._eventName = "Add Customization - Color"
    this._customEventType = "other"
  }
  AddCustomizationColorData.prototype._get_customAttributes__0 = function() {
    return this._customAttributes
  }
  AddCustomizationColorData.prototype._get_eventName__0 = function() {
    return this._eventName
  }
  AddCustomizationColorData.prototype._get_customEventType__0 = function() {
    return this._customEventType
  }
  AddCustomizationColorData.prototype.toJson_7 = function() {
    var result = "{"
    result =
      result +
      ('"custom_attributes":' + this._customAttributes.toJson_7() + ",")
    result = result + ('"event_name":"' + this._eventName + '",')
    result = result + ('"custom_event_type":"' + this._customEventType + '",')
    result = dropLast(result, 1)
    result = result + "}"
    return result
  }
  AddCustomizationColorData.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationColorData.prototype.component1_5 = function() {
    return this._customAttributes
  }
  AddCustomizationColorData.prototype.copy_0 = function(customAttributes) {
    return new AddCustomizationColorData(customAttributes)
  }
  AddCustomizationColorData.prototype.copy$default_0 = function(
    customAttributes,
    $mask0,
    $handler
  ) {
    var customAttributes_0 = !(($mask0 & 1) === 0)
      ? this._customAttributes
      : customAttributes
    return this.copy_0(customAttributes_0)
  }
  AddCustomizationColorData.prototype.toString = function() {
    return (
      "" +
      "AddCustomizationColorData(customAttributes=" +
      this._customAttributes +
      ")"
    )
  }
  AddCustomizationColorData.prototype.hashCode = function() {
    return this._customAttributes.hashCode()
  }
  AddCustomizationColorData.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof AddCustomizationColorData)) return false
    else {
    }
    var tmp0_other_with_cast =
      other instanceof AddCustomizationColorData ? other : THROW_CCE()
    if (!this._customAttributes.equals(tmp0_other_with_cast._customAttributes))
      return false
    return true
  }
  AddCustomizationColorData.$metadata$ = {
    simpleName: "AddCustomizationColorData",
    kind: "class",
    interfaces: [Serializable_0],
  }
  Object.defineProperty(
    AddCustomizationColorData.prototype,
    "customAttributes",
    {
      configurable: true,
      get: AddCustomizationColorData.prototype._get_customAttributes__0,
    }
  )
  Object.defineProperty(AddCustomizationColorData.prototype, "eventName", {
    configurable: true,
    get: AddCustomizationColorData.prototype._get_eventName__0,
  })
  Object.defineProperty(
    AddCustomizationColorData.prototype,
    "customEventType",
    {
      configurable: true,
      get: AddCustomizationColorData.prototype._get_customEventType__0,
    }
  )
  function AddCustomizationColor(data) {
    Message.call(this)
    this._data_1 = data
    this._eventType = "custom_event"
  }
  AddCustomizationColor.prototype._get_data__0 = function() {
    return this._data_1
  }
  AddCustomizationColor.prototype._get_eventType__0 = function() {
    return this._eventType
  }
  AddCustomizationColor.prototype.toJson_7 = function() {
    var result = "{"
    if (!(this._data_1 == null)) {
      result = result + ('"data":' + this._data_1.toJson_7() + ",")
    }
    result = result + ('"event_type":"' + this._eventType + '",')
    result = dropLast(result, 1)
    result = result + "}"
    return result
  }
  AddCustomizationColor.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationColor.prototype.component1_5 = function() {
    return this._data_1
  }
  AddCustomizationColor.prototype.copy_1 = function(data) {
    return new AddCustomizationColor(data)
  }
  AddCustomizationColor.prototype.copy$default_1 = function(
    data,
    $mask0,
    $handler
  ) {
    var data_0 = !(($mask0 & 1) === 0) ? this._data_1 : data
    return this.copy_1(data_0)
  }
  AddCustomizationColor.prototype.toString = function() {
    return "" + "AddCustomizationColor(data=" + this._data_1 + ")"
  }
  AddCustomizationColor.prototype.hashCode = function() {
    return this._data_1 == null ? 0 : this._data_1.hashCode()
  }
  AddCustomizationColor.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof AddCustomizationColor)) return false
    else {
    }
    var tmp0_other_with_cast =
      other instanceof AddCustomizationColor ? other : THROW_CCE()
    if (!equals_0(this._data_1, tmp0_other_with_cast._data_1)) return false
    return true
  }
  AddCustomizationColor.$metadata$ = {
    simpleName: "AddCustomizationColor",
    kind: "class",
    interfaces: [],
  }
  Object.defineProperty(AddCustomizationColor.prototype, "data", {
    configurable: true,
    get: AddCustomizationColor.prototype._get_data__0,
  })
  Object.defineProperty(AddCustomizationColor.prototype, "eventType", {
    configurable: true,
    get: AddCustomizationColor.prototype._get_eventType__0,
  })
  function AddCustomizationConfigDataCustomAttributesConfig() {}
  AddCustomizationConfigDataCustomAttributesConfig.prototype._set_value__0 = function(
    _set___
  ) {
    this._value_7 = _set___
  }
  AddCustomizationConfigDataCustomAttributesConfig.prototype._get_value__11 = function() {
    var tmp = this._value_7
    if (!(tmp == null)) return tmp
    else {
      throwUninitializedPropertyAccessException("value")
    }
  }
  AddCustomizationConfigDataCustomAttributesConfig.prototype.toJson_7 = function() {
    return this._get_value__11()
  }
  AddCustomizationConfigDataCustomAttributesConfig.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationConfigDataCustomAttributesConfig.prototype.TWO_SEATER = function() {
    var enumVal = new AddCustomizationConfigDataCustomAttributesConfig()
    enumVal._value_7 = "two seater"
    return enumVal
  }
  AddCustomizationConfigDataCustomAttributesConfig.prototype.THREE_SEATER = function() {
    var enumVal = new AddCustomizationConfigDataCustomAttributesConfig()
    enumVal._value_7 = "three seater"
    return enumVal
  }
  AddCustomizationConfigDataCustomAttributesConfig.prototype.SECTIONAL = function() {
    var enumVal = new AddCustomizationConfigDataCustomAttributesConfig()
    enumVal._value_7 = "sectional"
    return enumVal
  }
  AddCustomizationConfigDataCustomAttributesConfig.$metadata$ = {
    simpleName: "AddCustomizationConfigDataCustomAttributesConfig",
    kind: "class",
    interfaces: [Serializable_0],
  }
  Object.defineProperty(
    AddCustomizationConfigDataCustomAttributesConfig.prototype,
    "value",
    {
      configurable: true,
      get:
        AddCustomizationConfigDataCustomAttributesConfig.prototype
          ._get_value__11,
      set:
        AddCustomizationConfigDataCustomAttributesConfig.prototype
          ._set_value__0,
    }
  )
  function AddCustomizationConfigDataCustomAttributes(config) {
    this._config = config
  }
  AddCustomizationConfigDataCustomAttributes.prototype._get_config_ = function() {
    return this._config
  }
  AddCustomizationConfigDataCustomAttributes.prototype.toJson_7 = function() {
    var result = "{"
    result = result + ('"config":"' + this._config.toJson_7() + '",')
    result = dropLast(result, 1)
    result = result + "}"
    return result
  }
  AddCustomizationConfigDataCustomAttributes.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationConfigDataCustomAttributes.prototype.component1_5 = function() {
    return this._config
  }
  AddCustomizationConfigDataCustomAttributes.prototype.copy_2 = function(
    config
  ) {
    return new AddCustomizationConfigDataCustomAttributes(config)
  }
  AddCustomizationConfigDataCustomAttributes.prototype.copy$default_2 = function(
    config,
    $mask0,
    $handler
  ) {
    var config_0 = !(($mask0 & 1) === 0) ? this._config : config
    return this.copy_2(config_0)
  }
  AddCustomizationConfigDataCustomAttributes.prototype.toString = function() {
    return (
      "" +
      "AddCustomizationConfigDataCustomAttributes(config=" +
      this._config +
      ")"
    )
  }
  AddCustomizationConfigDataCustomAttributes.prototype.hashCode = function() {
    return hashCode(this._config)
  }
  AddCustomizationConfigDataCustomAttributes.prototype.equals = function(
    other
  ) {
    if (this === other) return true
    if (!(other instanceof AddCustomizationConfigDataCustomAttributes))
      return false
    else {
    }
    var tmp0_other_with_cast =
      other instanceof AddCustomizationConfigDataCustomAttributes
        ? other
        : THROW_CCE()
    if (!equals_0(this._config, tmp0_other_with_cast._config)) return false
    return true
  }
  AddCustomizationConfigDataCustomAttributes.$metadata$ = {
    simpleName: "AddCustomizationConfigDataCustomAttributes",
    kind: "class",
    interfaces: [Serializable_0],
  }
  Object.defineProperty(
    AddCustomizationConfigDataCustomAttributes.prototype,
    "config",
    {
      configurable: true,
      get: AddCustomizationConfigDataCustomAttributes.prototype._get_config_,
    }
  )
  function AddCustomizationConfigData(customAttributes) {
    this._customAttributes_0 = customAttributes
    this._eventName_0 = "Add Customization - Config"
    this._customEventType_0 = "other"
  }
  AddCustomizationConfigData.prototype._get_customAttributes__0 = function() {
    return this._customAttributes_0
  }
  AddCustomizationConfigData.prototype._get_eventName__0 = function() {
    return this._eventName_0
  }
  AddCustomizationConfigData.prototype._get_customEventType__0 = function() {
    return this._customEventType_0
  }
  AddCustomizationConfigData.prototype.toJson_7 = function() {
    var result = "{"
    result =
      result +
      ('"custom_attributes":' + this._customAttributes_0.toJson_7() + ",")
    result = result + ('"event_name":"' + this._eventName_0 + '",')
    result = result + ('"custom_event_type":"' + this._customEventType_0 + '",')
    result = dropLast(result, 1)
    result = result + "}"
    return result
  }
  AddCustomizationConfigData.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationConfigData.prototype.component1_5 = function() {
    return this._customAttributes_0
  }
  AddCustomizationConfigData.prototype.copy_3 = function(customAttributes) {
    return new AddCustomizationConfigData(customAttributes)
  }
  AddCustomizationConfigData.prototype.copy$default_3 = function(
    customAttributes,
    $mask0,
    $handler
  ) {
    var customAttributes_0 = !(($mask0 & 1) === 0)
      ? this._customAttributes_0
      : customAttributes
    return this.copy_3(customAttributes_0)
  }
  AddCustomizationConfigData.prototype.toString = function() {
    return (
      "" +
      "AddCustomizationConfigData(customAttributes=" +
      this._customAttributes_0 +
      ")"
    )
  }
  AddCustomizationConfigData.prototype.hashCode = function() {
    return this._customAttributes_0.hashCode()
  }
  AddCustomizationConfigData.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof AddCustomizationConfigData)) return false
    else {
    }
    var tmp0_other_with_cast =
      other instanceof AddCustomizationConfigData ? other : THROW_CCE()
    if (
      !this._customAttributes_0.equals(tmp0_other_with_cast._customAttributes_0)
    )
      return false
    return true
  }
  AddCustomizationConfigData.$metadata$ = {
    simpleName: "AddCustomizationConfigData",
    kind: "class",
    interfaces: [Serializable_0],
  }
  Object.defineProperty(
    AddCustomizationConfigData.prototype,
    "customAttributes",
    {
      configurable: true,
      get: AddCustomizationConfigData.prototype._get_customAttributes__0,
    }
  )
  Object.defineProperty(AddCustomizationConfigData.prototype, "eventName", {
    configurable: true,
    get: AddCustomizationConfigData.prototype._get_eventName__0,
  })
  Object.defineProperty(
    AddCustomizationConfigData.prototype,
    "customEventType",
    {
      configurable: true,
      get: AddCustomizationConfigData.prototype._get_customEventType__0,
    }
  )
  function AddCustomizationConfig(data) {
    Message.call(this)
    this._data_2 = data
    this._eventType_0 = "custom_event"
  }
  AddCustomizationConfig.prototype._get_data__0 = function() {
    return this._data_2
  }
  AddCustomizationConfig.prototype._get_eventType__0 = function() {
    return this._eventType_0
  }
  AddCustomizationConfig.prototype.toJson_7 = function() {
    var result = "{"
    if (!(this._data_2 == null)) {
      result = result + ('"data":' + this._data_2.toJson_7() + ",")
    }
    result = result + ('"event_type":"' + this._eventType_0 + '",')
    result = dropLast(result, 1)
    result = result + "}"
    return result
  }
  AddCustomizationConfig.prototype.toJson = function() {
    return this.toJson_7()
  }
  AddCustomizationConfig.prototype.component1_5 = function() {
    return this._data_2
  }
  AddCustomizationConfig.prototype.copy_4 = function(data) {
    return new AddCustomizationConfig(data)
  }
  AddCustomizationConfig.prototype.copy$default_4 = function(
    data,
    $mask0,
    $handler
  ) {
    var data_0 = !(($mask0 & 1) === 0) ? this._data_2 : data
    return this.copy_4(data_0)
  }
  AddCustomizationConfig.prototype.toString = function() {
    return "" + "AddCustomizationConfig(data=" + this._data_2 + ")"
  }
  AddCustomizationConfig.prototype.hashCode = function() {
    return this._data_2 == null ? 0 : this._data_2.hashCode()
  }
  AddCustomizationConfig.prototype.equals = function(other) {
    if (this === other) return true
    if (!(other instanceof AddCustomizationConfig)) return false
    else {
    }
    var tmp0_other_with_cast =
      other instanceof AddCustomizationConfig ? other : THROW_CCE()
    if (!equals_0(this._data_2, tmp0_other_with_cast._data_2)) return false
    return true
  }
  AddCustomizationConfig.$metadata$ = {
    simpleName: "AddCustomizationConfig",
    kind: "class",
    interfaces: [],
  }
  Object.defineProperty(AddCustomizationConfig.prototype, "data", {
    configurable: true,
    get: AddCustomizationConfig.prototype._get_data__0,
  })
  Object.defineProperty(AddCustomizationConfig.prototype, "eventType", {
    configurable: true,
    get: AddCustomizationConfig.prototype._get_eventType__0,
  })
  function SmartypeApi() {
    SmartypeApiBase.call(this)
    this._dataPlanId = "sofa_king_main"
    this._dataPlanVersion = 1
  }
  SmartypeApi.prototype._get_dataPlanId_ = function() {
    return this._dataPlanId
  }
  SmartypeApi.prototype._get_dataPlanVersion_ = function() {
    return this._dataPlanVersion
  }
  SmartypeApi.prototype.addCustomizationColor = function(data) {
    return new AddCustomizationColor(data)
  }
  SmartypeApi.prototype.addCustomizationConfig = function(data) {
    return new AddCustomizationConfig(data)
  }
  SmartypeApi.$metadata$ = {
    simpleName: "SmartypeApi",
    kind: "class",
    interfaces: [],
  }
  Object.defineProperty(SmartypeApi.prototype, "dataPlanId", {
    configurable: true,
    get: SmartypeApi.prototype._get_dataPlanId_,
  })
  Object.defineProperty(SmartypeApi.prototype, "dataPlanVersion", {
    configurable: true,
    get: SmartypeApi.prototype._get_dataPlanVersion_,
  })
  function Constants() {}
  Constants.prototype.platform_0 = function() {
    var receiver = mParticleReceiver()
    return "js"
  }
  Constants.$metadata$ = {
    simpleName: "Constants",
    kind: "class",
    interfaces: [],
  }
  function _hashCode$factory() {
    return getPropertyCallableRef(
      "_hashCode",
      1,
      KProperty1,
      function(receiver) {
        return _get__hashCode_(receiver)
      },
      null
    )
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef(
      "elementDescriptors",
      1,
      KProperty1,
      function(receiver) {
        return _get_elementDescriptors__0(receiver)
      },
      null
    )
  }
  function indices$factory() {
    return getPropertyCallableRef(
      "indices",
      1,
      KProperty1,
      function(receiver) {
        return _get_indices__0(receiver)
      },
      null
    )
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef(
      "typeParameterDescriptors",
      1,
      KProperty1,
      function(receiver) {
        return _get_typeParameterDescriptors_(receiver)
      },
      null
    )
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef(
      "_hashCode",
      1,
      KProperty1,
      function(receiver) {
        return _get__hashCode__0(receiver)
      },
      null
    )
  }
  AbstractCollection.prototype._get_size__27 =
    AbstractCollection.prototype._get_size__27
  AbstractCollection.prototype.iterator_37 =
    AbstractCollection.prototype.iterator_37
  AbstractMap.prototype._get_entries__5 = Map_0.prototype._get_entries__5
  AbstractSet.prototype._get_size__27 =
    AbstractCollection.prototype._get_size__27
  AbstractSet.prototype.iterator_37 = AbstractCollection.prototype.iterator_37
  AbstractSet.prototype.contains_23 = AbstractCollection.prototype.contains_23
  AbstractSet.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  AbstractSet.prototype.isEmpty_28 = AbstractCollection.prototype.isEmpty_28
  AbstractSet.prototype.toString = AbstractCollection.prototype.toString
  AbstractSet.prototype.toArray = AbstractCollection.prototype.toArray
  _no_name_provided__2.prototype.toArray = AbstractCollection.prototype.toArray
  _no_name_provided__2.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  _no_name_provided__2.prototype.equals = AbstractSet.prototype.equals
  _no_name_provided__2.prototype.hashCode = AbstractSet.prototype.hashCode
  _no_name_provided__2.prototype.isEmpty_28 =
    AbstractCollection.prototype.isEmpty_28
  _no_name_provided__2.prototype.toString =
    AbstractCollection.prototype.toString
  IntIterator.prototype.nextInt_0 = IntIterator.prototype.nextInt_0
  IntIterator.prototype.hasNext_14 = Iterator.prototype.hasNext_14
  CharIterator.prototype.nextChar_0 = CharIterator.prototype.nextChar_0
  CharIterator.prototype.hasNext_14 = Iterator.prototype.hasNext_14
  IntProgressionIterator.prototype.next_14 = IntIterator.prototype.next_14
  CharProgressionIterator.prototype.next_14 = CharIterator.prototype.next_14
  IntRange.prototype._get_first__2 = IntProgression.prototype._get_first__2
  IntRange.prototype._get_last__2 = IntProgression.prototype._get_last__2
  IntRange.prototype.iterator_37 = IntProgression.prototype.iterator_37
  CharRange.prototype._get_first__2 = CharProgression.prototype._get_first__2
  CharRange.prototype._get_last__2 = CharProgression.prototype._get_last__2
  CharRange.prototype.iterator_37 = CharProgression.prototype.iterator_37
  AbstractMutableCollection.prototype.add_16 =
    AbstractMutableCollection.prototype.add_16
  AbstractMutableCollection.prototype._get_size__27 =
    AbstractCollection.prototype._get_size__27
  AbstractMutableCollection.prototype.iterator_37 =
    AbstractCollection.prototype.iterator_37
  AbstractMutableCollection.prototype.contains_23 =
    AbstractCollection.prototype.contains_23
  AbstractMutableCollection.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  AbstractMutableCollection.prototype.isEmpty_28 =
    AbstractCollection.prototype.isEmpty_28
  AbstractMutableCollection.prototype.toString =
    AbstractCollection.prototype.toString
  AbstractMutableCollection.prototype.toArray =
    AbstractCollection.prototype.toArray
  AbstractMutableList.prototype.add_7 = AbstractMutableList.prototype.add_7
  AbstractMutableList.prototype.removeAt_1 =
    AbstractMutableList.prototype.removeAt_1
  AbstractMutableList.prototype.remove_12 =
    AbstractMutableCollection.prototype.remove_12
  AbstractMutableList.prototype.toJSON =
    AbstractMutableCollection.prototype.toJSON
  AbstractMutableList.prototype.checkIsMutable_10 =
    AbstractMutableCollection.prototype.checkIsMutable_10
  AbstractMutableList.prototype._get_size__27 =
    AbstractCollection.prototype._get_size__27
  AbstractMutableList.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  AbstractMutableList.prototype.isEmpty_28 =
    AbstractCollection.prototype.isEmpty_28
  AbstractMutableList.prototype.toString = AbstractCollection.prototype.toString
  AbstractMutableList.prototype.toArray = AbstractCollection.prototype.toArray
  AbstractMutableList.prototype.get_27 = List.prototype.get_27
  AbstractMutableMap.prototype.put_5 = AbstractMutableMap.prototype.put_5
  AbstractMutableMap.prototype.containsKey_8 =
    AbstractMap.prototype.containsKey_8
  AbstractMutableMap.prototype.containsEntry_2 =
    AbstractMap.prototype.containsEntry_2
  AbstractMutableMap.prototype.equals = AbstractMap.prototype.equals
  AbstractMutableMap.prototype.get_16 = AbstractMap.prototype.get_16
  AbstractMutableMap.prototype.hashCode = AbstractMap.prototype.hashCode
  AbstractMutableMap.prototype.isEmpty_28 = AbstractMap.prototype.isEmpty_28
  AbstractMutableMap.prototype._get_size__27 =
    AbstractMap.prototype._get_size__27
  AbstractMutableMap.prototype.toString = AbstractMap.prototype.toString
  AbstractMutableMap.prototype._get_entries__5 =
    MutableMap.prototype._get_entries__5
  AbstractMutableSet.prototype.add_16 =
    AbstractMutableCollection.prototype.add_16
  AbstractMutableSet.prototype.toJSON =
    AbstractMutableCollection.prototype.toJSON
  AbstractMutableSet.prototype.checkIsMutable_10 =
    AbstractMutableCollection.prototype.checkIsMutable_10
  AbstractMutableSet.prototype._get_size__27 =
    AbstractCollection.prototype._get_size__27
  AbstractMutableSet.prototype.iterator_37 =
    AbstractCollection.prototype.iterator_37
  AbstractMutableSet.prototype.contains_23 =
    AbstractCollection.prototype.contains_23
  AbstractMutableSet.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  AbstractMutableSet.prototype.isEmpty_28 =
    AbstractCollection.prototype.isEmpty_28
  AbstractMutableSet.prototype.toString = AbstractCollection.prototype.toString
  AbstractMutableSet.prototype.toArray = AbstractCollection.prototype.toArray
  _no_name_provided__5.prototype.toArray = AbstractCollection.prototype.toArray
  _no_name_provided__5.prototype.toJSON =
    AbstractMutableCollection.prototype.toJSON
  _no_name_provided__5.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  _no_name_provided__5.prototype.equals = AbstractMutableSet.prototype.equals
  _no_name_provided__5.prototype.hashCode =
    AbstractMutableSet.prototype.hashCode
  _no_name_provided__5.prototype.isEmpty_28 =
    AbstractCollection.prototype.isEmpty_28
  _no_name_provided__5.prototype.toString =
    AbstractCollection.prototype.toString
  ArrayList.prototype._set_modCount__0 =
    AbstractMutableList.prototype._set_modCount__0
  ArrayList.prototype._get_modCount__0 =
    AbstractMutableList.prototype._get_modCount__0
  ArrayList.prototype.iterator_37 = AbstractMutableList.prototype.iterator_37
  ArrayList.prototype.contains_23 = AbstractMutableList.prototype.contains_23
  ArrayList.prototype.equals = AbstractMutableList.prototype.equals
  ArrayList.prototype.hashCode = AbstractMutableList.prototype.hashCode
  ArrayList.prototype.toJSON = AbstractMutableCollection.prototype.toJSON
  ArrayList.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  ArrayList.prototype.isEmpty_28 = AbstractCollection.prototype.isEmpty_28
  HashMap.prototype._get_keys__5 = AbstractMutableMap.prototype._get_keys__5
  HashMap.prototype.putAll_1 = AbstractMutableMap.prototype.putAll_1
  HashMap.prototype.checkIsMutable_10 =
    AbstractMutableMap.prototype.checkIsMutable_10
  HashMap.prototype.containsEntry_2 = AbstractMap.prototype.containsEntry_2
  HashMap.prototype.equals = AbstractMap.prototype.equals
  HashMap.prototype.hashCode = AbstractMap.prototype.hashCode
  HashMap.prototype.isEmpty_28 = AbstractMap.prototype.isEmpty_28
  HashMap.prototype.toString = AbstractMap.prototype.toString
  EntrySet.prototype.toArray = AbstractCollection.prototype.toArray
  EntrySet.prototype.toJSON = AbstractMutableCollection.prototype.toJSON
  EntrySet.prototype.checkIsMutable_10 =
    AbstractMutableCollection.prototype.checkIsMutable_10
  EntrySet.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  EntrySet.prototype.equals = AbstractMutableSet.prototype.equals
  EntrySet.prototype.hashCode = AbstractMutableSet.prototype.hashCode
  EntrySet.prototype.isEmpty_28 = AbstractCollection.prototype.isEmpty_28
  EntrySet.prototype.toString = AbstractCollection.prototype.toString
  HashSet.prototype.equals = AbstractMutableSet.prototype.equals
  HashSet.prototype.hashCode = AbstractMutableSet.prototype.hashCode
  HashSet.prototype.addAll_2 = AbstractMutableCollection.prototype.addAll_2
  HashSet.prototype.toJSON = AbstractMutableCollection.prototype.toJSON
  HashSet.prototype.checkIsMutable_10 =
    AbstractMutableCollection.prototype.checkIsMutable_10
  HashSet.prototype.containsAll_20 = AbstractCollection.prototype.containsAll_20
  HashSet.prototype.toString = AbstractCollection.prototype.toString
  HashSet.prototype.toArray = AbstractCollection.prototype.toArray
  InternalHashCodeMap.prototype.createJsMap_0 =
    InternalMap.prototype.createJsMap_0
  LinkedHashMap.prototype._get_entries__5 = HashMap.prototype._get_entries__5
  LinkedHashMap.prototype._get_keys__5 =
    AbstractMutableMap.prototype._get_keys__5
  LinkedHashMap.prototype.putAll_1 = AbstractMutableMap.prototype.putAll_1
  LinkedHashMap.prototype.containsEntry_2 =
    AbstractMap.prototype.containsEntry_2
  LinkedHashMap.prototype.equals = AbstractMap.prototype.equals
  LinkedHashMap.prototype.hashCode = AbstractMap.prototype.hashCode
  LinkedHashMap.prototype.isEmpty_28 = AbstractMap.prototype.isEmpty_28
  LinkedHashMap.prototype.toString = AbstractMap.prototype.toString
  ChainEntry.prototype.equals = SimpleEntry.prototype.equals
  ChainEntry.prototype.hashCode = SimpleEntry.prototype.hashCode
  ChainEntry.prototype.toString = SimpleEntry.prototype.toString
  ChainEntry.prototype._get_key__3 = SimpleEntry.prototype._get_key__3
  ChainEntry.prototype._get_value__11 = SimpleEntry.prototype._get_value__11
  EntrySet_0.prototype.toArray = AbstractCollection.prototype.toArray
  EntrySet_0.prototype.toJSON = AbstractMutableCollection.prototype.toJSON
  EntrySet_0.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  EntrySet_0.prototype.equals = AbstractMutableSet.prototype.equals
  EntrySet_0.prototype.hashCode = AbstractMutableSet.prototype.hashCode
  EntrySet_0.prototype.isEmpty_28 = AbstractCollection.prototype.isEmpty_28
  EntrySet_0.prototype.toString = AbstractCollection.prototype.toString
  LinkedHashSet.prototype._get_map__0 = HashSet.prototype._get_map__0
  LinkedHashSet.prototype.add_16 = HashSet.prototype.add_16
  LinkedHashSet.prototype.contains_23 = HashSet.prototype.contains_23
  LinkedHashSet.prototype.isEmpty_28 = HashSet.prototype.isEmpty_28
  LinkedHashSet.prototype.iterator_37 = HashSet.prototype.iterator_37
  LinkedHashSet.prototype._get_size__27 = HashSet.prototype._get_size__27
  LinkedHashSet.prototype.equals = AbstractMutableSet.prototype.equals
  LinkedHashSet.prototype.hashCode = AbstractMutableSet.prototype.hashCode
  LinkedHashSet.prototype.addAll_2 =
    AbstractMutableCollection.prototype.addAll_2
  LinkedHashSet.prototype.toJSON = AbstractMutableCollection.prototype.toJSON
  LinkedHashSet.prototype.containsAll_20 =
    AbstractCollection.prototype.containsAll_20
  LinkedHashSet.prototype.toString = AbstractCollection.prototype.toString
  LinkedHashSet.prototype.toArray = AbstractCollection.prototype.toArray
  KClassImpl.prototype._get_simpleName__4 = KClass.prototype._get_simpleName__4
  PrimitiveKClassImpl.prototype._get_jClass__2 =
    KClassImpl.prototype._get_jClass__2
  PrimitiveKClassImpl.prototype.hashCode = KClassImpl.prototype.hashCode
  PrimitiveKClassImpl.prototype.toString = KClassImpl.prototype.toString
  NothingKClassImpl.prototype.toString = KClassImpl.prototype.toString
  SimpleKClassImpl.prototype._get_jClass__2 =
    KClassImpl.prototype._get_jClass__2
  SimpleKClassImpl.prototype.equals = KClassImpl.prototype.equals
  SimpleKClassImpl.prototype.hashCode = KClassImpl.prototype.hashCode
  SimpleKClassImpl.prototype.toString = KClassImpl.prototype.toString
  UpdateMode.prototype.equals = Enum.prototype.equals
  UpdateMode.prototype.hashCode = Enum.prototype.hashCode
  UpdateMode.prototype.toString = Enum.prototype.toString
  AbstractPolymorphicSerializer.prototype._get_baseClass__0 =
    AbstractPolymorphicSerializer.prototype._get_baseClass__0
  AbstractPolymorphicSerializer.prototype._get_descriptor__32 =
    KSerializer.prototype._get_descriptor__32
  PolymorphicSerializer.prototype.deserialize_32 =
    AbstractPolymorphicSerializer.prototype.deserialize_32
  PolymorphicSerializer.prototype.findPolymorphicSerializer_0 =
    AbstractPolymorphicSerializer.prototype.findPolymorphicSerializer_0
  SerialDescriptorImpl.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  PolymorphicKind.prototype.toString = SerialKind.prototype.toString
  PolymorphicKind.prototype.hashCode = SerialKind.prototype.hashCode
  PrimitiveKind.prototype.toString = SerialKind.prototype.toString
  PrimitiveKind.prototype.hashCode = SerialKind.prototype.hashCode
  StructureKind.prototype.toString = SerialKind.prototype.toString
  StructureKind.prototype.hashCode = SerialKind.prototype.hashCode
  ENUM.prototype.toString = SerialKind.prototype.toString
  ENUM.prototype.hashCode = SerialKind.prototype.hashCode
  CONTEXTUAL.prototype.toString = SerialKind.prototype.toString
  CONTEXTUAL.prototype.hashCode = SerialKind.prototype.hashCode
  OPEN.prototype.toString = SerialKind.prototype.toString
  OPEN.prototype.hashCode = SerialKind.prototype.hashCode
  BOOLEAN.prototype.toString = SerialKind.prototype.toString
  BOOLEAN.prototype.hashCode = SerialKind.prototype.hashCode
  BYTE.prototype.toString = SerialKind.prototype.toString
  BYTE.prototype.hashCode = SerialKind.prototype.hashCode
  CHAR.prototype.toString = SerialKind.prototype.toString
  CHAR.prototype.hashCode = SerialKind.prototype.hashCode
  SHORT.prototype.toString = SerialKind.prototype.toString
  SHORT.prototype.hashCode = SerialKind.prototype.hashCode
  INT.prototype.toString = SerialKind.prototype.toString
  INT.prototype.hashCode = SerialKind.prototype.hashCode
  LONG.prototype.toString = SerialKind.prototype.toString
  LONG.prototype.hashCode = SerialKind.prototype.hashCode
  FLOAT.prototype.toString = SerialKind.prototype.toString
  FLOAT.prototype.hashCode = SerialKind.prototype.hashCode
  DOUBLE.prototype.toString = SerialKind.prototype.toString
  DOUBLE.prototype.hashCode = SerialKind.prototype.hashCode
  STRING.prototype.toString = SerialKind.prototype.toString
  STRING.prototype.hashCode = SerialKind.prototype.hashCode
  CLASS.prototype.toString = SerialKind.prototype.toString
  CLASS.prototype.hashCode = SerialKind.prototype.hashCode
  LIST.prototype.toString = SerialKind.prototype.toString
  LIST.prototype.hashCode = SerialKind.prototype.hashCode
  MAP.prototype.toString = SerialKind.prototype.toString
  MAP.prototype.hashCode = SerialKind.prototype.hashCode
  OBJECT.prototype.toString = SerialKind.prototype.toString
  OBJECT.prototype.hashCode = SerialKind.prototype.hashCode
  AbstractDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  AbstractDecoder.prototype.beginStructure_16 =
    Decoder.prototype.beginStructure_16
  AbstractDecoder.prototype.decodeSerializableValue_15 =
    Decoder.prototype.decodeSerializableValue_15
  AbstractDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  AbstractDecoder.prototype.decodeElementIndex_7 =
    CompositeDecoder.prototype.decodeElementIndex_7
  AbstractDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  AbstractDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  AbstractDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  ListLikeDescriptor.prototype._get_serialName__12 =
    SerialDescriptor.prototype._get_serialName__12
  ListLikeDescriptor.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  HashSetClassDesc.prototype._get_kind__12 =
    ListLikeDescriptor.prototype._get_kind__12
  HashSetClassDesc.prototype._get_elementsCount__12 =
    ListLikeDescriptor.prototype._get_elementsCount__12
  HashSetClassDesc.prototype.getElementName_12 =
    ListLikeDescriptor.prototype.getElementName_12
  HashSetClassDesc.prototype.getElementIndex_12 =
    ListLikeDescriptor.prototype.getElementIndex_12
  HashSetClassDesc.prototype.getElementDescriptor_12 =
    ListLikeDescriptor.prototype.getElementDescriptor_12
  HashSetClassDesc.prototype.equals = ListLikeDescriptor.prototype.equals
  HashSetClassDesc.prototype.hashCode = ListLikeDescriptor.prototype.hashCode
  HashSetClassDesc.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  MapLikeDescriptor.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  LinkedHashMapClassDesc.prototype._get_serialName__12 =
    MapLikeDescriptor.prototype._get_serialName__12
  LinkedHashMapClassDesc.prototype._get_kind__12 =
    MapLikeDescriptor.prototype._get_kind__12
  LinkedHashMapClassDesc.prototype._get_elementsCount__12 =
    MapLikeDescriptor.prototype._get_elementsCount__12
  LinkedHashMapClassDesc.prototype.getElementName_12 =
    MapLikeDescriptor.prototype.getElementName_12
  LinkedHashMapClassDesc.prototype.getElementIndex_12 =
    MapLikeDescriptor.prototype.getElementIndex_12
  LinkedHashMapClassDesc.prototype.getElementDescriptor_12 =
    MapLikeDescriptor.prototype.getElementDescriptor_12
  LinkedHashMapClassDesc.prototype.equals = MapLikeDescriptor.prototype.equals
  LinkedHashMapClassDesc.prototype.hashCode =
    MapLikeDescriptor.prototype.hashCode
  LinkedHashMapClassDesc.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  HashMapClassDesc.prototype._get_serialName__12 =
    MapLikeDescriptor.prototype._get_serialName__12
  HashMapClassDesc.prototype._get_kind__12 =
    MapLikeDescriptor.prototype._get_kind__12
  HashMapClassDesc.prototype._get_elementsCount__12 =
    MapLikeDescriptor.prototype._get_elementsCount__12
  HashMapClassDesc.prototype.getElementName_12 =
    MapLikeDescriptor.prototype.getElementName_12
  HashMapClassDesc.prototype.getElementIndex_12 =
    MapLikeDescriptor.prototype.getElementIndex_12
  HashMapClassDesc.prototype.getElementDescriptor_12 =
    MapLikeDescriptor.prototype.getElementDescriptor_12
  HashMapClassDesc.prototype.equals = MapLikeDescriptor.prototype.equals
  HashMapClassDesc.prototype.hashCode = MapLikeDescriptor.prototype.hashCode
  HashMapClassDesc.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  ArrayListClassDesc.prototype._get_kind__12 =
    ListLikeDescriptor.prototype._get_kind__12
  ArrayListClassDesc.prototype._get_elementsCount__12 =
    ListLikeDescriptor.prototype._get_elementsCount__12
  ArrayListClassDesc.prototype.getElementName_12 =
    ListLikeDescriptor.prototype.getElementName_12
  ArrayListClassDesc.prototype.getElementIndex_12 =
    ListLikeDescriptor.prototype.getElementIndex_12
  ArrayListClassDesc.prototype.getElementDescriptor_12 =
    ListLikeDescriptor.prototype.getElementDescriptor_12
  ArrayListClassDesc.prototype.equals = ListLikeDescriptor.prototype.equals
  ArrayListClassDesc.prototype.hashCode = ListLikeDescriptor.prototype.hashCode
  ArrayListClassDesc.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  LinkedHashSetClassDesc.prototype._get_kind__12 =
    ListLikeDescriptor.prototype._get_kind__12
  LinkedHashSetClassDesc.prototype._get_elementsCount__12 =
    ListLikeDescriptor.prototype._get_elementsCount__12
  LinkedHashSetClassDesc.prototype.getElementName_12 =
    ListLikeDescriptor.prototype.getElementName_12
  LinkedHashSetClassDesc.prototype.getElementIndex_12 =
    ListLikeDescriptor.prototype.getElementIndex_12
  LinkedHashSetClassDesc.prototype.getElementDescriptor_12 =
    ListLikeDescriptor.prototype.getElementDescriptor_12
  LinkedHashSetClassDesc.prototype.equals = ListLikeDescriptor.prototype.equals
  LinkedHashSetClassDesc.prototype.hashCode =
    ListLikeDescriptor.prototype.hashCode
  LinkedHashSetClassDesc.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  AbstractCollectionSerializer.prototype.builder_6 =
    AbstractCollectionSerializer.prototype.builder_6
  AbstractCollectionSerializer.prototype.builderSize_11 =
    AbstractCollectionSerializer.prototype.builderSize_11
  AbstractCollectionSerializer.prototype.toResult_11 =
    AbstractCollectionSerializer.prototype.toResult_11
  AbstractCollectionSerializer.prototype.toBuilder_11 =
    AbstractCollectionSerializer.prototype.toBuilder_11
  AbstractCollectionSerializer.prototype.checkCapacity_11 =
    AbstractCollectionSerializer.prototype.checkCapacity_11
  AbstractCollectionSerializer.prototype.readElement_6 =
    AbstractCollectionSerializer.prototype.readElement_6
  AbstractCollectionSerializer.prototype.readAll_6 =
    AbstractCollectionSerializer.prototype.readAll_6
  AbstractCollectionSerializer.prototype._get_descriptor__32 =
    KSerializer.prototype._get_descriptor__32
  ListLikeSerializer.prototype.insert_5 = ListLikeSerializer.prototype.insert_5
  ListLikeSerializer.prototype._get_descriptor__32 =
    ListLikeSerializer.prototype._get_descriptor__32
  ListLikeSerializer.prototype.readElement$default_6 =
    AbstractCollectionSerializer.prototype.readElement$default_6
  ListLikeSerializer.prototype.builder_6 =
    AbstractCollectionSerializer.prototype.builder_6
  ListLikeSerializer.prototype.builderSize_11 =
    AbstractCollectionSerializer.prototype.builderSize_11
  ListLikeSerializer.prototype.toResult_11 =
    AbstractCollectionSerializer.prototype.toResult_11
  ListLikeSerializer.prototype.toBuilder_11 =
    AbstractCollectionSerializer.prototype.toBuilder_11
  ListLikeSerializer.prototype.checkCapacity_11 =
    AbstractCollectionSerializer.prototype.checkCapacity_11
  ListLikeSerializer.prototype.merge_6 =
    AbstractCollectionSerializer.prototype.merge_6
  ListLikeSerializer.prototype.deserialize_32 =
    AbstractCollectionSerializer.prototype.deserialize_32
  HashSetSerializer.prototype.readAll_6 = ListLikeSerializer.prototype.readAll_6
  HashSetSerializer.prototype.readElement_6 =
    ListLikeSerializer.prototype.readElement_6
  HashSetSerializer.prototype.readElement$default_6 =
    AbstractCollectionSerializer.prototype.readElement$default_6
  HashSetSerializer.prototype.merge_6 =
    AbstractCollectionSerializer.prototype.merge_6
  HashSetSerializer.prototype.deserialize_32 =
    AbstractCollectionSerializer.prototype.deserialize_32
  MapLikeSerializer.prototype._get_descriptor__32 =
    MapLikeSerializer.prototype._get_descriptor__32
  MapLikeSerializer.prototype.readElement$default_6 =
    AbstractCollectionSerializer.prototype.readElement$default_6
  MapLikeSerializer.prototype.builder_6 =
    AbstractCollectionSerializer.prototype.builder_6
  MapLikeSerializer.prototype.builderSize_11 =
    AbstractCollectionSerializer.prototype.builderSize_11
  MapLikeSerializer.prototype.toResult_11 =
    AbstractCollectionSerializer.prototype.toResult_11
  MapLikeSerializer.prototype.toBuilder_11 =
    AbstractCollectionSerializer.prototype.toBuilder_11
  MapLikeSerializer.prototype.checkCapacity_11 =
    AbstractCollectionSerializer.prototype.checkCapacity_11
  MapLikeSerializer.prototype.merge_6 =
    AbstractCollectionSerializer.prototype.merge_6
  MapLikeSerializer.prototype.deserialize_32 =
    AbstractCollectionSerializer.prototype.deserialize_32
  LinkedHashMapSerializer.prototype.readAll_6 =
    MapLikeSerializer.prototype.readAll_6
  LinkedHashMapSerializer.prototype.readElement_6 =
    MapLikeSerializer.prototype.readElement_6
  LinkedHashMapSerializer.prototype.readElement$default_6 =
    AbstractCollectionSerializer.prototype.readElement$default_6
  LinkedHashMapSerializer.prototype.merge_6 =
    AbstractCollectionSerializer.prototype.merge_6
  LinkedHashMapSerializer.prototype.deserialize_32 =
    AbstractCollectionSerializer.prototype.deserialize_32
  HashMapSerializer.prototype.readAll_6 = MapLikeSerializer.prototype.readAll_6
  HashMapSerializer.prototype.readElement_6 =
    MapLikeSerializer.prototype.readElement_6
  HashMapSerializer.prototype.readElement$default_6 =
    AbstractCollectionSerializer.prototype.readElement$default_6
  HashMapSerializer.prototype.merge_6 =
    AbstractCollectionSerializer.prototype.merge_6
  HashMapSerializer.prototype.deserialize_32 =
    AbstractCollectionSerializer.prototype.deserialize_32
  ArrayListSerializer.prototype.readAll_6 =
    ListLikeSerializer.prototype.readAll_6
  ArrayListSerializer.prototype.readElement_6 =
    ListLikeSerializer.prototype.readElement_6
  ArrayListSerializer.prototype.readElement$default_6 =
    AbstractCollectionSerializer.prototype.readElement$default_6
  ArrayListSerializer.prototype.merge_6 =
    AbstractCollectionSerializer.prototype.merge_6
  ArrayListSerializer.prototype.deserialize_32 =
    AbstractCollectionSerializer.prototype.deserialize_32
  LinkedHashSetSerializer.prototype.readAll_6 =
    ListLikeSerializer.prototype.readAll_6
  LinkedHashSetSerializer.prototype.readElement_6 =
    ListLikeSerializer.prototype.readElement_6
  LinkedHashSetSerializer.prototype.readElement$default_6 =
    AbstractCollectionSerializer.prototype.readElement$default_6
  LinkedHashSetSerializer.prototype.merge_6 =
    AbstractCollectionSerializer.prototype.merge_6
  LinkedHashSetSerializer.prototype.deserialize_32 =
    AbstractCollectionSerializer.prototype.deserialize_32
  PluginGeneratedSerialDescriptor.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  EnumDescriptor.prototype._get_serialName__12 =
    PluginGeneratedSerialDescriptor.prototype._get_serialName__12
  EnumDescriptor.prototype._get_elementsCount__12 =
    PluginGeneratedSerialDescriptor.prototype._get_elementsCount__12
  EnumDescriptor.prototype._get_namesSet__0 =
    PluginGeneratedSerialDescriptor.prototype._get_namesSet__0
  EnumDescriptor.prototype.addElement_0 =
    PluginGeneratedSerialDescriptor.prototype.addElement_0
  EnumDescriptor.prototype.getElementName_12 =
    PluginGeneratedSerialDescriptor.prototype.getElementName_12
  EnumDescriptor.prototype.getElementIndex_12 =
    PluginGeneratedSerialDescriptor.prototype.getElementIndex_12
  EnumDescriptor.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  PrimitiveSerialDescriptor.prototype._get_isNullable__12 =
    SerialDescriptor.prototype._get_isNullable__12
  TaggedDecoder.prototype.getTag_4 = TaggedDecoder.prototype.getTag_4
  TaggedDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  TaggedDecoder.prototype.beginStructure_16 =
    Decoder.prototype.beginStructure_16
  TaggedDecoder.prototype.decodeSerializableValue_15 =
    Decoder.prototype.decodeSerializableValue_15
  TaggedDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  TaggedDecoder.prototype.decodeElementIndex_7 =
    CompositeDecoder.prototype.decodeElementIndex_7
  TaggedDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  TaggedDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  TaggedDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  NamedValueDecoder.prototype._get_serializersModule__10 =
    TaggedDecoder.prototype._get_serializersModule__10
  NamedValueDecoder.prototype.decodeTaggedValue_0 =
    TaggedDecoder.prototype.decodeTaggedValue_0
  NamedValueDecoder.prototype.decodeTaggedNotNullMark_2 =
    TaggedDecoder.prototype.decodeTaggedNotNullMark_2
  NamedValueDecoder.prototype.decodeTaggedBoolean_2 =
    TaggedDecoder.prototype.decodeTaggedBoolean_2
  NamedValueDecoder.prototype.decodeTaggedByte_2 =
    TaggedDecoder.prototype.decodeTaggedByte_2
  NamedValueDecoder.prototype.decodeTaggedShort_2 =
    TaggedDecoder.prototype.decodeTaggedShort_2
  NamedValueDecoder.prototype.decodeTaggedInt_2 =
    TaggedDecoder.prototype.decodeTaggedInt_2
  NamedValueDecoder.prototype.decodeTaggedLong_2 =
    TaggedDecoder.prototype.decodeTaggedLong_2
  NamedValueDecoder.prototype.decodeTaggedFloat_2 =
    TaggedDecoder.prototype.decodeTaggedFloat_2
  NamedValueDecoder.prototype.decodeTaggedDouble_2 =
    TaggedDecoder.prototype.decodeTaggedDouble_2
  NamedValueDecoder.prototype.decodeTaggedChar_2 =
    TaggedDecoder.prototype.decodeTaggedChar_2
  NamedValueDecoder.prototype.decodeTaggedString_2 =
    TaggedDecoder.prototype.decodeTaggedString_2
  NamedValueDecoder.prototype.decodeTaggedEnum_2 =
    TaggedDecoder.prototype.decodeTaggedEnum_2
  NamedValueDecoder.prototype.decodeSerializableValue_15 =
    Decoder.prototype.decodeSerializableValue_15
  NamedValueDecoder.prototype.decodeSerializableValue_14 =
    TaggedDecoder.prototype.decodeSerializableValue_14
  NamedValueDecoder.prototype.decodeNotNullMark_7 =
    TaggedDecoder.prototype.decodeNotNullMark_7
  NamedValueDecoder.prototype.decodeNull_7 =
    TaggedDecoder.prototype.decodeNull_7
  NamedValueDecoder.prototype.decodeBoolean_7 =
    TaggedDecoder.prototype.decodeBoolean_7
  NamedValueDecoder.prototype.decodeByte_7 =
    TaggedDecoder.prototype.decodeByte_7
  NamedValueDecoder.prototype.decodeShort_7 =
    TaggedDecoder.prototype.decodeShort_7
  NamedValueDecoder.prototype.decodeInt_7 = TaggedDecoder.prototype.decodeInt_7
  NamedValueDecoder.prototype.decodeLong_7 =
    TaggedDecoder.prototype.decodeLong_7
  NamedValueDecoder.prototype.decodeFloat_7 =
    TaggedDecoder.prototype.decodeFloat_7
  NamedValueDecoder.prototype.decodeDouble_7 =
    TaggedDecoder.prototype.decodeDouble_7
  NamedValueDecoder.prototype.decodeChar_7 =
    TaggedDecoder.prototype.decodeChar_7
  NamedValueDecoder.prototype.decodeString_7 =
    TaggedDecoder.prototype.decodeString_7
  NamedValueDecoder.prototype.decodeEnum_7 =
    TaggedDecoder.prototype.decodeEnum_7
  NamedValueDecoder.prototype.beginStructure_15 =
    TaggedDecoder.prototype.beginStructure_15
  NamedValueDecoder.prototype.beginStructure_16 =
    Decoder.prototype.beginStructure_16
  NamedValueDecoder.prototype.endStructure_7 =
    TaggedDecoder.prototype.endStructure_7
  NamedValueDecoder.prototype.decodeStringElement_7 =
    TaggedDecoder.prototype.decodeStringElement_7
  NamedValueDecoder.prototype.decodeSerializableElement_16 =
    TaggedDecoder.prototype.decodeSerializableElement_16
  NamedValueDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  NamedValueDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  NamedValueDecoder.prototype.decodeNullableSerializableElement_16 =
    TaggedDecoder.prototype.decodeNullableSerializableElement_16
  NamedValueDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  NamedValueDecoder.prototype._get_currentTag__4 =
    TaggedDecoder.prototype._get_currentTag__4
  NamedValueDecoder.prototype._get_currentTagOrNull__4 =
    TaggedDecoder.prototype._get_currentTagOrNull__4
  NamedValueDecoder.prototype.pushTag_0 = TaggedDecoder.prototype.pushTag_0
  NamedValueDecoder.prototype.popTag_4 = TaggedDecoder.prototype.popTag_4
  NamedValueDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  NamedValueDecoder.prototype.decodeElementIndex_7 =
    CompositeDecoder.prototype.decodeElementIndex_7
  NamedValueDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  KeyValueSerializer.prototype.toResult_13 =
    KeyValueSerializer.prototype.toResult_13
  KeyValueSerializer.prototype._get_descriptor__32 =
    KSerializer.prototype._get_descriptor__32
  MapEntrySerializer_0.prototype.deserialize_32 =
    KeyValueSerializer.prototype.deserialize_32
  JsonImpl.prototype._get_configuration__3 =
    Json.prototype._get_configuration__3
  JsonImpl.prototype.decodeFromString_1 = Json.prototype.decodeFromString_1
  JsonImpl.prototype._get_serializersModule__10 =
    Json.prototype._get_serializersModule__10
  Default.prototype._get_serializersModule__10 =
    Json.prototype._get_serializersModule__10
  Default.prototype.decodeFromString_1 = Json.prototype.decodeFromString_1
  JsonPrimitive.prototype._get_isString__1 =
    JsonPrimitive.prototype._get_isString__1
  JsonPrimitive.prototype._get_content__1 =
    JsonPrimitive.prototype._get_content__1
  JsonNull.prototype.toString = JsonPrimitive.prototype.toString
  StreamingJsonDecoder.prototype.beginStructure_15 =
    AbstractDecoder.prototype.beginStructure_15
  StreamingJsonDecoder.prototype.decodeSerializableValue_14 =
    AbstractDecoder.prototype.decodeSerializableValue_14
  StreamingJsonDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  StreamingJsonDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  StreamingJsonDecoder.prototype.decodeStringElement_7 =
    AbstractDecoder.prototype.decodeStringElement_7
  StreamingJsonDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  StreamingJsonDecoder.prototype.decodeSerializableElement_16 =
    AbstractDecoder.prototype.decodeSerializableElement_16
  StreamingJsonDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement_16 =
    AbstractDecoder.prototype.decodeNullableSerializableElement_16
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  StreamingJsonDecoder.prototype.decodeValue_0 =
    AbstractDecoder.prototype.decodeValue_0
  AbstractJsonTreeDecoder.prototype.currentElement_2 =
    AbstractJsonTreeDecoder.prototype.currentElement_2
  AbstractJsonTreeDecoder.prototype.beginStructure_15 =
    TaggedDecoder.prototype.beginStructure_15
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  AbstractJsonTreeDecoder.prototype.getTag_4 =
    NamedValueDecoder.prototype.getTag_4
  AbstractJsonTreeDecoder.prototype.nested_3 =
    NamedValueDecoder.prototype.nested_3
  AbstractJsonTreeDecoder.prototype.popTag_4 = TaggedDecoder.prototype.popTag_4
  AbstractJsonTreeDecoder.prototype.pushTag_0 =
    TaggedDecoder.prototype.pushTag_0
  AbstractJsonTreeDecoder.prototype._get_currentTag__4 =
    TaggedDecoder.prototype._get_currentTag__4
  AbstractJsonTreeDecoder.prototype._get_currentTagOrNull__4 =
    TaggedDecoder.prototype._get_currentTagOrNull__4
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_14 =
    TaggedDecoder.prototype.decodeSerializableValue_14
  AbstractJsonTreeDecoder.prototype.decodeTaggedValue_0 =
    TaggedDecoder.prototype.decodeTaggedValue_0
  AbstractJsonTreeDecoder.prototype.elementName_3 =
    NamedValueDecoder.prototype.elementName_3
  AbstractJsonTreeDecoder.prototype.decodeElementIndex_7 =
    CompositeDecoder.prototype.decodeElementIndex_7
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableElement_16 =
    TaggedDecoder.prototype.decodeNullableSerializableElement_16
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement_16 =
    TaggedDecoder.prototype.decodeSerializableElement_16
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  AbstractJsonTreeDecoder.prototype.decodeBoolean_7 =
    TaggedDecoder.prototype.decodeBoolean_7
  AbstractJsonTreeDecoder.prototype.decodeByte_7 =
    TaggedDecoder.prototype.decodeByte_7
  AbstractJsonTreeDecoder.prototype.decodeChar_7 =
    TaggedDecoder.prototype.decodeChar_7
  AbstractJsonTreeDecoder.prototype.decodeDouble_7 =
    TaggedDecoder.prototype.decodeDouble_7
  AbstractJsonTreeDecoder.prototype.decodeEnum_7 =
    TaggedDecoder.prototype.decodeEnum_7
  AbstractJsonTreeDecoder.prototype.decodeFloat_7 =
    TaggedDecoder.prototype.decodeFloat_7
  AbstractJsonTreeDecoder.prototype.decodeInt_7 =
    TaggedDecoder.prototype.decodeInt_7
  AbstractJsonTreeDecoder.prototype.decodeLong_7 =
    TaggedDecoder.prototype.decodeLong_7
  AbstractJsonTreeDecoder.prototype.decodeNotNullMark_7 =
    TaggedDecoder.prototype.decodeNotNullMark_7
  AbstractJsonTreeDecoder.prototype.decodeNull_7 =
    TaggedDecoder.prototype.decodeNull_7
  AbstractJsonTreeDecoder.prototype.decodeShort_7 =
    TaggedDecoder.prototype.decodeShort_7
  AbstractJsonTreeDecoder.prototype.decodeString_7 =
    TaggedDecoder.prototype.decodeString_7
  AbstractJsonTreeDecoder.prototype.decodeStringElement_7 =
    TaggedDecoder.prototype.decodeStringElement_7
  AbstractJsonTreeDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  AbstractJsonTreeDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  JsonTreeDecoder.prototype._get_configuration__3 =
    AbstractJsonTreeDecoder.prototype._get_configuration__3
  JsonTreeDecoder.prototype.beginStructure_15 =
    TaggedDecoder.prototype.beginStructure_15
  JsonTreeDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  JsonTreeDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  JsonTreeDecoder.prototype.getTag_4 = NamedValueDecoder.prototype.getTag_4
  JsonTreeDecoder.prototype.nested_3 = NamedValueDecoder.prototype.nested_3
  JsonTreeDecoder.prototype.popTag_4 = TaggedDecoder.prototype.popTag_4
  JsonTreeDecoder.prototype.pushTag_0 = TaggedDecoder.prototype.pushTag_0
  JsonTreeDecoder.prototype._get_currentTag__4 =
    TaggedDecoder.prototype._get_currentTag__4
  JsonTreeDecoder.prototype._get_currentTagOrNull__4 =
    TaggedDecoder.prototype._get_currentTagOrNull__4
  JsonTreeDecoder.prototype.decodeSerializableValue_14 =
    TaggedDecoder.prototype.decodeSerializableValue_14
  JsonTreeDecoder.prototype.composeName_3 =
    AbstractJsonTreeDecoder.prototype.composeName_3
  JsonTreeDecoder.prototype.decodeTaggedBoolean_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_5
  JsonTreeDecoder.prototype.decodeTaggedByte_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedByte_5
  JsonTreeDecoder.prototype.decodeTaggedChar_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedChar_5
  JsonTreeDecoder.prototype.decodeTaggedDouble_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_5
  JsonTreeDecoder.prototype.decodeTaggedEnum_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_5
  JsonTreeDecoder.prototype.decodeTaggedFloat_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_5
  JsonTreeDecoder.prototype.decodeTaggedInt_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedInt_5
  JsonTreeDecoder.prototype.decodeTaggedLong_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedLong_5
  JsonTreeDecoder.prototype.decodeTaggedNotNullMark_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_5
  JsonTreeDecoder.prototype.decodeTaggedShort_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedShort_5
  JsonTreeDecoder.prototype.decodeTaggedString_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedString_5
  JsonTreeDecoder.prototype.decodeTaggedValue_0 =
    TaggedDecoder.prototype.decodeTaggedValue_0
  JsonTreeDecoder.prototype.elementName_3 =
    NamedValueDecoder.prototype.elementName_3
  JsonTreeDecoder.prototype.getValue_2 =
    AbstractJsonTreeDecoder.prototype.getValue_2
  JsonTreeDecoder.prototype.decodeNullableSerializableElement_16 =
    TaggedDecoder.prototype.decodeNullableSerializableElement_16
  JsonTreeDecoder.prototype.decodeSerializableElement_16 =
    TaggedDecoder.prototype.decodeSerializableElement_16
  JsonTreeDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  JsonTreeDecoder.prototype.decodeBoolean_7 =
    TaggedDecoder.prototype.decodeBoolean_7
  JsonTreeDecoder.prototype.decodeByte_7 = TaggedDecoder.prototype.decodeByte_7
  JsonTreeDecoder.prototype.decodeChar_7 = TaggedDecoder.prototype.decodeChar_7
  JsonTreeDecoder.prototype.decodeDouble_7 =
    TaggedDecoder.prototype.decodeDouble_7
  JsonTreeDecoder.prototype.decodeEnum_7 = TaggedDecoder.prototype.decodeEnum_7
  JsonTreeDecoder.prototype.decodeFloat_7 =
    TaggedDecoder.prototype.decodeFloat_7
  JsonTreeDecoder.prototype.decodeInt_7 = TaggedDecoder.prototype.decodeInt_7
  JsonTreeDecoder.prototype.decodeLong_7 = TaggedDecoder.prototype.decodeLong_7
  JsonTreeDecoder.prototype.decodeNotNullMark_7 =
    TaggedDecoder.prototype.decodeNotNullMark_7
  JsonTreeDecoder.prototype.decodeNull_7 = TaggedDecoder.prototype.decodeNull_7
  JsonTreeDecoder.prototype.decodeShort_7 =
    TaggedDecoder.prototype.decodeShort_7
  JsonTreeDecoder.prototype.decodeString_7 =
    TaggedDecoder.prototype.decodeString_7
  JsonTreeDecoder.prototype.decodeStringElement_7 =
    TaggedDecoder.prototype.decodeStringElement_7
  JsonTreeDecoder.prototype.decodeSerializableValue_15 =
    AbstractJsonTreeDecoder.prototype.decodeSerializableValue_15
  JsonTreeDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  JsonTreeDecoder.prototype.decodeJsonElement_4 =
    AbstractJsonTreeDecoder.prototype.decodeJsonElement_4
  JsonTreeDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  JsonTreeDecoder.prototype._get_json__4 =
    AbstractJsonTreeDecoder.prototype._get_json__4
  JsonTreeDecoder.prototype._get_serializersModule__10 =
    AbstractJsonTreeDecoder.prototype._get_serializersModule__10
  JsonTreeListDecoder.prototype.beginStructure_15 =
    TaggedDecoder.prototype.beginStructure_15
  JsonTreeListDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  JsonTreeListDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  JsonTreeListDecoder.prototype.getTag_4 = NamedValueDecoder.prototype.getTag_4
  JsonTreeListDecoder.prototype.nested_3 = NamedValueDecoder.prototype.nested_3
  JsonTreeListDecoder.prototype.popTag_4 = TaggedDecoder.prototype.popTag_4
  JsonTreeListDecoder.prototype.pushTag_0 = TaggedDecoder.prototype.pushTag_0
  JsonTreeListDecoder.prototype._get_currentTag__4 =
    TaggedDecoder.prototype._get_currentTag__4
  JsonTreeListDecoder.prototype._get_currentTagOrNull__4 =
    TaggedDecoder.prototype._get_currentTagOrNull__4
  JsonTreeListDecoder.prototype.decodeSerializableValue_14 =
    TaggedDecoder.prototype.decodeSerializableValue_14
  JsonTreeListDecoder.prototype.composeName_3 =
    AbstractJsonTreeDecoder.prototype.composeName_3
  JsonTreeListDecoder.prototype.decodeTaggedBoolean_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_5
  JsonTreeListDecoder.prototype.decodeTaggedByte_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedByte_5
  JsonTreeListDecoder.prototype.decodeTaggedChar_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedChar_5
  JsonTreeListDecoder.prototype.decodeTaggedDouble_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_5
  JsonTreeListDecoder.prototype.decodeTaggedEnum_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_5
  JsonTreeListDecoder.prototype.decodeTaggedFloat_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_5
  JsonTreeListDecoder.prototype.decodeTaggedInt_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedInt_5
  JsonTreeListDecoder.prototype.decodeTaggedLong_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedLong_5
  JsonTreeListDecoder.prototype.decodeTaggedNotNullMark_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_5
  JsonTreeListDecoder.prototype.decodeTaggedShort_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedShort_5
  JsonTreeListDecoder.prototype.decodeTaggedString_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedString_5
  JsonTreeListDecoder.prototype.decodeTaggedValue_0 =
    TaggedDecoder.prototype.decodeTaggedValue_0
  JsonTreeListDecoder.prototype.getValue_2 =
    AbstractJsonTreeDecoder.prototype.getValue_2
  JsonTreeListDecoder.prototype.decodeNullableSerializableElement_16 =
    TaggedDecoder.prototype.decodeNullableSerializableElement_16
  JsonTreeListDecoder.prototype.decodeSerializableElement_16 =
    TaggedDecoder.prototype.decodeSerializableElement_16
  JsonTreeListDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  JsonTreeListDecoder.prototype.decodeBoolean_7 =
    TaggedDecoder.prototype.decodeBoolean_7
  JsonTreeListDecoder.prototype.decodeByte_7 =
    TaggedDecoder.prototype.decodeByte_7
  JsonTreeListDecoder.prototype.decodeChar_7 =
    TaggedDecoder.prototype.decodeChar_7
  JsonTreeListDecoder.prototype.decodeDouble_7 =
    TaggedDecoder.prototype.decodeDouble_7
  JsonTreeListDecoder.prototype.decodeEnum_7 =
    TaggedDecoder.prototype.decodeEnum_7
  JsonTreeListDecoder.prototype.decodeFloat_7 =
    TaggedDecoder.prototype.decodeFloat_7
  JsonTreeListDecoder.prototype.decodeInt_7 =
    TaggedDecoder.prototype.decodeInt_7
  JsonTreeListDecoder.prototype.decodeLong_7 =
    TaggedDecoder.prototype.decodeLong_7
  JsonTreeListDecoder.prototype.decodeNotNullMark_7 =
    TaggedDecoder.prototype.decodeNotNullMark_7
  JsonTreeListDecoder.prototype.decodeNull_7 =
    TaggedDecoder.prototype.decodeNull_7
  JsonTreeListDecoder.prototype.decodeShort_7 =
    TaggedDecoder.prototype.decodeShort_7
  JsonTreeListDecoder.prototype.decodeString_7 =
    TaggedDecoder.prototype.decodeString_7
  JsonTreeListDecoder.prototype.decodeStringElement_7 =
    TaggedDecoder.prototype.decodeStringElement_7
  JsonTreeListDecoder.prototype.decodeSerializableValue_15 =
    AbstractJsonTreeDecoder.prototype.decodeSerializableValue_15
  JsonTreeListDecoder.prototype.beginStructure_16 =
    AbstractJsonTreeDecoder.prototype.beginStructure_16
  JsonTreeListDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  JsonTreeListDecoder.prototype.decodeJsonElement_4 =
    AbstractJsonTreeDecoder.prototype.decodeJsonElement_4
  JsonTreeListDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  JsonTreeListDecoder.prototype.endStructure_7 =
    AbstractJsonTreeDecoder.prototype.endStructure_7
  JsonTreeListDecoder.prototype._get_json__4 =
    AbstractJsonTreeDecoder.prototype._get_json__4
  JsonTreeListDecoder.prototype._get_serializersModule__10 =
    AbstractJsonTreeDecoder.prototype._get_serializersModule__10
  JsonTreeMapDecoder.prototype._get_configuration__3 =
    AbstractJsonTreeDecoder.prototype._get_configuration__3
  JsonTreeMapDecoder.prototype.beginStructure_15 =
    TaggedDecoder.prototype.beginStructure_15
  JsonTreeMapDecoder.prototype.decodeNullableSerializableElement_15 =
    CompositeDecoder.prototype.decodeNullableSerializableElement_15
  JsonTreeMapDecoder.prototype.decodeSerializableElement_15 =
    CompositeDecoder.prototype.decodeSerializableElement_15
  JsonTreeMapDecoder.prototype.getTag_4 = NamedValueDecoder.prototype.getTag_4
  JsonTreeMapDecoder.prototype.nested_3 = NamedValueDecoder.prototype.nested_3
  JsonTreeMapDecoder.prototype.popTag_4 = TaggedDecoder.prototype.popTag_4
  JsonTreeMapDecoder.prototype.pushTag_0 = TaggedDecoder.prototype.pushTag_0
  JsonTreeMapDecoder.prototype._get_currentTag__4 =
    TaggedDecoder.prototype._get_currentTag__4
  JsonTreeMapDecoder.prototype._get_currentTagOrNull__4 =
    TaggedDecoder.prototype._get_currentTagOrNull__4
  JsonTreeMapDecoder.prototype.decodeSerializableValue_14 =
    TaggedDecoder.prototype.decodeSerializableValue_14
  JsonTreeMapDecoder.prototype.composeName_3 =
    AbstractJsonTreeDecoder.prototype.composeName_3
  JsonTreeMapDecoder.prototype.decodeTaggedBoolean_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_5
  JsonTreeMapDecoder.prototype.decodeTaggedByte_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedByte_5
  JsonTreeMapDecoder.prototype.decodeTaggedChar_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedChar_5
  JsonTreeMapDecoder.prototype.decodeTaggedDouble_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_5
  JsonTreeMapDecoder.prototype.decodeTaggedEnum_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_5
  JsonTreeMapDecoder.prototype.decodeTaggedFloat_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_5
  JsonTreeMapDecoder.prototype.decodeTaggedInt_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedInt_5
  JsonTreeMapDecoder.prototype.decodeTaggedLong_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedLong_5
  JsonTreeMapDecoder.prototype.decodeTaggedNotNullMark_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_5
  JsonTreeMapDecoder.prototype.decodeTaggedShort_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedShort_5
  JsonTreeMapDecoder.prototype.decodeTaggedString_5 =
    AbstractJsonTreeDecoder.prototype.decodeTaggedString_5
  JsonTreeMapDecoder.prototype.decodeTaggedValue_0 =
    TaggedDecoder.prototype.decodeTaggedValue_0
  JsonTreeMapDecoder.prototype.getValue_2 =
    AbstractJsonTreeDecoder.prototype.getValue_2
  JsonTreeMapDecoder.prototype.decodeNullableSerializableElement_16 =
    TaggedDecoder.prototype.decodeNullableSerializableElement_16
  JsonTreeMapDecoder.prototype.decodeSerializableElement_16 =
    TaggedDecoder.prototype.decodeSerializableElement_16
  JsonTreeMapDecoder.prototype.decodeSerializableElement$default_7 =
    CompositeDecoder.prototype.decodeSerializableElement$default_7
  JsonTreeMapDecoder.prototype.decodeBoolean_7 =
    TaggedDecoder.prototype.decodeBoolean_7
  JsonTreeMapDecoder.prototype.decodeByte_7 =
    TaggedDecoder.prototype.decodeByte_7
  JsonTreeMapDecoder.prototype.decodeChar_7 =
    TaggedDecoder.prototype.decodeChar_7
  JsonTreeMapDecoder.prototype.decodeDouble_7 =
    TaggedDecoder.prototype.decodeDouble_7
  JsonTreeMapDecoder.prototype.decodeEnum_7 =
    TaggedDecoder.prototype.decodeEnum_7
  JsonTreeMapDecoder.prototype.decodeFloat_7 =
    TaggedDecoder.prototype.decodeFloat_7
  JsonTreeMapDecoder.prototype.decodeInt_7 = TaggedDecoder.prototype.decodeInt_7
  JsonTreeMapDecoder.prototype.decodeLong_7 =
    TaggedDecoder.prototype.decodeLong_7
  JsonTreeMapDecoder.prototype.decodeNotNullMark_7 =
    TaggedDecoder.prototype.decodeNotNullMark_7
  JsonTreeMapDecoder.prototype.decodeNull_7 =
    TaggedDecoder.prototype.decodeNull_7
  JsonTreeMapDecoder.prototype.decodeShort_7 =
    TaggedDecoder.prototype.decodeShort_7
  JsonTreeMapDecoder.prototype.decodeString_7 =
    TaggedDecoder.prototype.decodeString_7
  JsonTreeMapDecoder.prototype.decodeStringElement_7 =
    TaggedDecoder.prototype.decodeStringElement_7
  JsonTreeMapDecoder.prototype.decodeSerializableValue_15 =
    AbstractJsonTreeDecoder.prototype.decodeSerializableValue_15
  JsonTreeMapDecoder.prototype.beginStructure_16 =
    JsonTreeDecoder.prototype.beginStructure_16
  JsonTreeMapDecoder.prototype.decodeCollectionSize_7 =
    CompositeDecoder.prototype.decodeCollectionSize_7
  JsonTreeMapDecoder.prototype.decodeJsonElement_4 =
    AbstractJsonTreeDecoder.prototype.decodeJsonElement_4
  JsonTreeMapDecoder.prototype.decodeSequentially_7 =
    CompositeDecoder.prototype.decodeSequentially_7
  JsonTreeMapDecoder.prototype._get_json__4 =
    AbstractJsonTreeDecoder.prototype._get_json__4
  JsonTreeMapDecoder.prototype._get_serializersModule__10 =
    AbstractJsonTreeDecoder.prototype._get_serializersModule__10
  WriteMode.prototype.equals = Enum.prototype.equals
  WriteMode.prototype.hashCode = Enum.prototype.hashCode
  WriteMode.prototype.toString = Enum.prototype.toString
  SerializersModule.prototype.getPolymorphic_0 =
    SerializersModule.prototype.getPolymorphic_0
  SerializersModule.prototype.dumpTo_0 = SerializersModule.prototype.dumpTo_0
  Message.prototype.toJson = Serializable_0.prototype.toJson
  EventType.prototype.equals = Enum.prototype.equals
  EventType.prototype.hashCode = Enum.prototype.hashCode
  EventType.prototype.toString = Enum.prototype.toString
  $serializer.prototype.typeParametersSerializers_6 =
    GeneratedSerializer.prototype.typeParametersSerializers_6
  $serializer_0.prototype.typeParametersSerializers_6 =
    GeneratedSerializer.prototype.typeParametersSerializers_6
  CustomEvent.prototype._set_event_type__1 =
    BaseEvent.prototype._set_event_type__1
  CustomEventType.prototype.equals = Enum.prototype.equals
  CustomEventType.prototype.hashCode = Enum.prototype.hashCode
  CustomEventType.prototype.toString = Enum.prototype.toString
  $serializer_1.prototype.typeParametersSerializers_6 =
    GeneratedSerializer.prototype.typeParametersSerializers_6
  $serializer_2.prototype.typeParametersSerializers_6 =
    GeneratedSerializer.prototype.typeParametersSerializers_6
  $serializer_3.prototype.typeParametersSerializers_6 =
    GeneratedSerializer.prototype.typeParametersSerializers_6
  ScreenViewEvent.prototype._set_event_type__1 =
    BaseEvent.prototype._set_event_type__1
  $serializer_4.prototype.typeParametersSerializers_6 =
    GeneratedSerializer.prototype.typeParametersSerializers_6
  $serializer_5.prototype.typeParametersSerializers_6 =
    GeneratedSerializer.prototype.typeParametersSerializers_6
  SmartypeApi.prototype.send = SmartypeApiBase.prototype.send
  SmartypeApi.prototype.addReceiver = SmartypeApiBase.prototype.addReceiver
  SmartypeApi.prototype.removeReceiver =
    SmartypeApiBase.prototype.removeReceiver
  functionClasses = functionClasses$init$()
  buf = new ArrayBuffer(8)
  bufFloat64 = bufFloat64$init$()
  bufInt32 = bufInt32$init$()
  lowIndex = lowIndex$init$()
  highIndex = (1 - lowIndex) | 0
  ZERO = fromInt(0)
  ONE = fromInt(1)
  NEG_ONE = fromInt(-1)
  MAX_VALUE = new Long(-1, 2147483647)
  MIN_VALUE = new Long(0, -2147483648)
  TWO_PWR_24_ = fromInt(16777216)
  propertyRefClassMetadataCache = propertyRefClassMetadataCache$init$()
  EMPTY_DESCRIPTOR_ARRAY = EMPTY_DESCRIPTOR_ARRAY$init$()
  EMPTY_SERIALIZER_ARRAY = EMPTY_SERIALIZER_ARRAY$init$()
  NULL = new Object()
  C2TC = C2TC$init$()
  ESCAPE_CHARS = ESCAPE_CHARS$init$()
  EmptySerializersModule = new SerialModuleImpl(
    emptyMap(),
    emptyMap(),
    emptyMap(),
    emptyMap()
  )
  var $com = _.com || (_.com = {})
  var $com$mparticle = $com.mparticle || ($com.mparticle = {})
  var $com$mparticle$smartype =
    $com$mparticle.smartype || ($com$mparticle.smartype = {})
  var $com$mparticle$smartype$api =
    $com$mparticle$smartype.api || ($com$mparticle$smartype.api = {})
  $com$mparticle$smartype$api.Message = Message
  $com$mparticle$smartype$api.SmartypeApiBase = SmartypeApiBase
  _.mParticleReceiver = mParticleReceiver
  var $com$mparticle$smartype$api$receivers =
    $com$mparticle$smartype$api.receivers ||
    ($com$mparticle$smartype$api.receivers = {})
  var $com$mparticle$smartype$api$receivers$mparticle =
    $com$mparticle$smartype$api$receivers.mparticle ||
    ($com$mparticle$smartype$api$receivers.mparticle = {})
  $com$mparticle$smartype$api$receivers$mparticle.MParticleReceiver = MParticleReceiver
  _.AddCustomizationColorDataCustomAttributesColor = AddCustomizationColorDataCustomAttributesColor
  _.AddCustomizationColorDataCustomAttributes = AddCustomizationColorDataCustomAttributes
  _.AddCustomizationColorData = AddCustomizationColorData
  _.AddCustomizationColor = AddCustomizationColor
  _.AddCustomizationConfigDataCustomAttributesConfig = AddCustomizationConfigDataCustomAttributesConfig
  _.AddCustomizationConfigDataCustomAttributes = AddCustomizationConfigDataCustomAttributes
  _.AddCustomizationConfigData = AddCustomizationConfigData
  _.AddCustomizationConfig = AddCustomizationConfig
  _.SmartypeApi = SmartypeApi
  $com$mparticle$smartype.Constants = Constants
  return _
})
