#import <Foundation/NSArray.h>
#import <Foundation/NSDictionary.h>
#import <Foundation/NSError.h>
#import <Foundation/NSObject.h>
#import <Foundation/NSSet.h>
#import <Foundation/NSString.h>
#import <Foundation/NSValue.h>

@class SmartypeBaseEvent, SmartypeKotlinx_serialization_runtimeJsonElement, MPEvent, SmartypeCustomEvent, SmartypeCustomEventType, SmartypeScreenViewEvent, SmartypeEventType, SmartypeCustomEventData, SmartypeKotlinEnum, SmartypeScreenViewEventData, SmartypeMessage, SmartypeAttributionData, SmartypeAttributionDataCustomAttributes, SmartypeCheckoutData, SmartypeChooseItemData, SmartypeChooseItemDataCustomAttributes, SmartypeChooseItemDataCustomAttributesItem, SmartypeEmailBouncesData, SmartypeEmailBouncesDataCustomAttributes, SmartypeEmailDeliveriesData, SmartypeEmailDeliveriesDataCustomAttributes, SmartypeEmailOpensData, SmartypeEmailOpensDataCustomAttributes, SmartypeEmailSendsData, SmartypeEmailSendsDataCustomAttributes, SmartypeHomeData, SmartypeMenuData, SmartypePlaceOrderData, SmartypePlaceOrderDataCustomAttributes, SmartypeSearchItemData, SmartypeSearchItemDataCustomAttributes, SmartypeSetPickupData, SmartypeSetPickupDataCustomAttributes, SmartypeSmartypeApiBase, SmartypeAttribution, SmartypeCheckout, SmartypeChooseItem, SmartypeEmailBounces, SmartypeEmailDeliveries, SmartypeEmailOpens, SmartypeEmailSends, SmartypeHome, SmartypeMenu, SmartypePlaceOrder, SmartypeSearchItem, SmartypeSetPickup, SmartypeKotlinx_serialization_runtimeJsonNull, SmartypeKotlinx_serialization_runtimeJsonPrimitive, SmartypeKotlinArray, SmartypeKotlinx_serialization_runtimeSerialKind, SmartypeKotlinNothing, SmartypeKotlinx_serialization_runtimeUpdateMode;

@protocol SmartypeMessageReceiver, SmartypeKotlinx_serialization_runtimeKSerializer, SmartypeKotlinComparable, SmartypeKotlinx_serialization_runtimeSerialModule, SmartypeKotlinx_serialization_runtimeEncoder, SmartypeKotlinx_serialization_runtimeSerialDescriptor, SmartypeKotlinx_serialization_runtimeSerializationStrategy, SmartypeKotlinx_serialization_runtimeDecoder, SmartypeKotlinx_serialization_runtimeDeserializationStrategy, SmartypeKotlinx_serialization_runtimeSerialModuleCollector, SmartypeKotlinKClass, SmartypeKotlinx_serialization_runtimeCompositeEncoder, SmartypeKotlinAnnotation, SmartypeKotlinx_serialization_runtimeCompositeDecoder, SmartypeKotlinKDeclarationContainer, SmartypeKotlinKAnnotatedElement, SmartypeKotlinKClassifier, SmartypeKotlinIterator;

NS_ASSUME_NONNULL_BEGIN
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunknown-warning-option"
#pragma clang diagnostic ignored "-Wnullability"

__attribute__((swift_name("KotlinBase")))
@interface SmartypeBase : NSObject
- (instancetype)init __attribute__((unavailable));
+ (instancetype)new __attribute__((unavailable));
+ (void)initialize __attribute__((objc_requires_super));
@end;

@interface SmartypeBase (SmartypeBaseCopying) <NSCopying>
@end;

__attribute__((swift_name("KotlinMutableSet")))
@interface SmartypeMutableSet<ObjectType> : NSMutableSet<ObjectType>
@end;

__attribute__((swift_name("KotlinMutableDictionary")))
@interface SmartypeMutableDictionary<KeyType, ObjectType> : NSMutableDictionary<KeyType, ObjectType>
@end;

@interface NSError (NSErrorSmartypeKotlinException)
@property (readonly) id _Nullable kotlinException;
@end;

__attribute__((swift_name("KotlinNumber")))
@interface SmartypeNumber : NSNumber
- (instancetype)initWithChar:(char)value __attribute__((unavailable));
- (instancetype)initWithUnsignedChar:(unsigned char)value __attribute__((unavailable));
- (instancetype)initWithShort:(short)value __attribute__((unavailable));
- (instancetype)initWithUnsignedShort:(unsigned short)value __attribute__((unavailable));
- (instancetype)initWithInt:(int)value __attribute__((unavailable));
- (instancetype)initWithUnsignedInt:(unsigned int)value __attribute__((unavailable));
- (instancetype)initWithLong:(long)value __attribute__((unavailable));
- (instancetype)initWithUnsignedLong:(unsigned long)value __attribute__((unavailable));
- (instancetype)initWithLongLong:(long long)value __attribute__((unavailable));
- (instancetype)initWithUnsignedLongLong:(unsigned long long)value __attribute__((unavailable));
- (instancetype)initWithFloat:(float)value __attribute__((unavailable));
- (instancetype)initWithDouble:(double)value __attribute__((unavailable));
- (instancetype)initWithBool:(BOOL)value __attribute__((unavailable));
- (instancetype)initWithInteger:(NSInteger)value __attribute__((unavailable));
- (instancetype)initWithUnsignedInteger:(NSUInteger)value __attribute__((unavailable));
+ (instancetype)numberWithChar:(char)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedChar:(unsigned char)value __attribute__((unavailable));
+ (instancetype)numberWithShort:(short)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedShort:(unsigned short)value __attribute__((unavailable));
+ (instancetype)numberWithInt:(int)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedInt:(unsigned int)value __attribute__((unavailable));
+ (instancetype)numberWithLong:(long)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedLong:(unsigned long)value __attribute__((unavailable));
+ (instancetype)numberWithLongLong:(long long)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedLongLong:(unsigned long long)value __attribute__((unavailable));
+ (instancetype)numberWithFloat:(float)value __attribute__((unavailable));
+ (instancetype)numberWithDouble:(double)value __attribute__((unavailable));
+ (instancetype)numberWithBool:(BOOL)value __attribute__((unavailable));
+ (instancetype)numberWithInteger:(NSInteger)value __attribute__((unavailable));
+ (instancetype)numberWithUnsignedInteger:(NSUInteger)value __attribute__((unavailable));
@end;

__attribute__((swift_name("KotlinByte")))
@interface SmartypeByte : SmartypeNumber
- (instancetype)initWithChar:(char)value;
+ (instancetype)numberWithChar:(char)value;
@end;

__attribute__((swift_name("KotlinUByte")))
@interface SmartypeUByte : SmartypeNumber
- (instancetype)initWithUnsignedChar:(unsigned char)value;
+ (instancetype)numberWithUnsignedChar:(unsigned char)value;
@end;

__attribute__((swift_name("KotlinShort")))
@interface SmartypeShort : SmartypeNumber
- (instancetype)initWithShort:(short)value;
+ (instancetype)numberWithShort:(short)value;
@end;

__attribute__((swift_name("KotlinUShort")))
@interface SmartypeUShort : SmartypeNumber
- (instancetype)initWithUnsignedShort:(unsigned short)value;
+ (instancetype)numberWithUnsignedShort:(unsigned short)value;
@end;

__attribute__((swift_name("KotlinInt")))
@interface SmartypeInt : SmartypeNumber
- (instancetype)initWithInt:(int)value;
+ (instancetype)numberWithInt:(int)value;
@end;

__attribute__((swift_name("KotlinUInt")))
@interface SmartypeUInt : SmartypeNumber
- (instancetype)initWithUnsignedInt:(unsigned int)value;
+ (instancetype)numberWithUnsignedInt:(unsigned int)value;
@end;

__attribute__((swift_name("KotlinLong")))
@interface SmartypeLong : SmartypeNumber
- (instancetype)initWithLongLong:(long long)value;
+ (instancetype)numberWithLongLong:(long long)value;
@end;

__attribute__((swift_name("KotlinULong")))
@interface SmartypeULong : SmartypeNumber
- (instancetype)initWithUnsignedLongLong:(unsigned long long)value;
+ (instancetype)numberWithUnsignedLongLong:(unsigned long long)value;
@end;

__attribute__((swift_name("KotlinFloat")))
@interface SmartypeFloat : SmartypeNumber
- (instancetype)initWithFloat:(float)value;
+ (instancetype)numberWithFloat:(float)value;
@end;

__attribute__((swift_name("KotlinDouble")))
@interface SmartypeDouble : SmartypeNumber
- (instancetype)initWithDouble:(double)value;
+ (instancetype)numberWithDouble:(double)value;
@end;

__attribute__((swift_name("KotlinBoolean")))
@interface SmartypeBoolean : SmartypeNumber
- (instancetype)initWithBool:(BOOL)value;
+ (instancetype)numberWithBool:(BOOL)value;
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Converters")))
@interface SmartypeConverters : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Converters.Companion")))
@interface SmartypeConvertersCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (SmartypeBaseEvent * _Nullable)convertToEventMessage:(NSDictionary<NSString *, SmartypeKotlinx_serialization_runtimeJsonElement *> *)message __attribute__((swift_name("convertToEvent(message:)")));
@end;

__attribute__((swift_name("MessageReceiver")))
@protocol SmartypeMessageReceiver
@required
- (void)receiveMessage:(NSDictionary<NSString *, SmartypeKotlinx_serialization_runtimeJsonElement *> *)message __attribute__((swift_name("receive(message:)")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MParticleReceiver")))
@interface SmartypeMParticleReceiver : SmartypeBase <SmartypeMessageReceiver>
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (void)receiveMessage:(NSDictionary<NSString *, SmartypeKotlinx_serialization_runtimeJsonElement *> *)message __attribute__((swift_name("receive(message:)")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MParticleReceiver.NativeConverters")))
@interface SmartypeMParticleReceiverNativeConverters : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MParticleReceiver.NativeConvertersCompanion")))
@interface SmartypeMParticleReceiverNativeConvertersCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (NSDictionary<id, id> * _Nullable)convertToNativeCustomAttributesCustomAttributes:(NSDictionary<NSString *, id> *)customAttributes __attribute__((swift_name("convertToNativeCustomAttributes(customAttributes:)")));
- (MPEvent * _Nullable)convertToNativeCustomEventCommonEvent:(SmartypeCustomEvent *)commonEvent __attribute__((swift_name("convertToNativeCustomEvent(commonEvent:)")));
- (SmartypeULong * _Nullable)convertToNativeEventTypeCommonCustomEventType:(SmartypeCustomEventType * _Nullable)commonCustomEventType __attribute__((swift_name("convertToNativeEventType(commonCustomEventType:)")));
- (MPEvent * _Nullable)convertToNativeScreenViewEventCommonEvent:(SmartypeScreenViewEvent *)commonEvent __attribute__((swift_name("convertToNativeScreenViewEvent(commonEvent:)")));
@end;

__attribute__((swift_name("BaseEvent")))
@interface SmartypeBaseEvent : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeEventType * _Nullable event_type __attribute__((swift_name("event_type")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("BaseEventAdapter")))
@interface SmartypeBaseEventAdapter : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeEventType *event_type __attribute__((swift_name("event_type")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("BaseEventAdapter.Companion")))
@interface SmartypeBaseEventAdapterCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CustomEvent")))
@interface SmartypeCustomEvent : SmartypeBaseEvent
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeCustomEventData * _Nullable data __attribute__((swift_name("data")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CustomEvent.Companion")))
@interface SmartypeCustomEventCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CustomEventData")))
@interface SmartypeCustomEventData : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property NSDictionary<NSString *, NSString *> * _Nullable custom_attributes __attribute__((swift_name("custom_attributes")));
@property SmartypeCustomEventType * _Nullable custom_event_type __attribute__((swift_name("custom_event_type")));
@property NSString * _Nullable event_name __attribute__((swift_name("event_name")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CustomEventData.Companion")))
@interface SmartypeCustomEventDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((swift_name("KotlinComparable")))
@protocol SmartypeKotlinComparable
@required
- (int32_t)compareToOther:(id _Nullable)other __attribute__((swift_name("compareTo(other:)")));
@end;

__attribute__((swift_name("KotlinEnum")))
@interface SmartypeKotlinEnum : SmartypeBase <SmartypeKotlinComparable>
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer));
- (int32_t)compareToOther:(SmartypeKotlinEnum *)other __attribute__((swift_name("compareTo(other:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) NSString *name __attribute__((swift_name("name")));
@property (readonly) int32_t ordinal __attribute__((swift_name("ordinal")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CustomEventType")))
@interface SmartypeCustomEventType : SmartypeKotlinEnum
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SmartypeCustomEventType *navigation __attribute__((swift_name("navigation")));
@property (class, readonly) SmartypeCustomEventType *location __attribute__((swift_name("location")));
@property (class, readonly) SmartypeCustomEventType *search __attribute__((swift_name("search")));
@property (class, readonly) SmartypeCustomEventType *transaction __attribute__((swift_name("transaction")));
@property (class, readonly) SmartypeCustomEventType *userContent __attribute__((swift_name("userContent")));
@property (class, readonly) SmartypeCustomEventType *userPreference __attribute__((swift_name("userPreference")));
@property (class, readonly) SmartypeCustomEventType *social __attribute__((swift_name("social")));
@property (class, readonly) SmartypeCustomEventType *other __attribute__((swift_name("other")));
@property (class, readonly) SmartypeCustomEventType *media __attribute__((swift_name("media")));
- (int32_t)compareToOther:(SmartypeCustomEventType *)other __attribute__((swift_name("compareTo(other:)")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CustomEventType.Companion")))
@interface SmartypeCustomEventTypeCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EventType")))
@interface SmartypeEventType : SmartypeKotlinEnum
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SmartypeEventType *customEvent __attribute__((swift_name("customEvent")));
@property (class, readonly) SmartypeEventType *screenView __attribute__((swift_name("screenView")));
- (int32_t)compareToOther:(SmartypeEventType *)other __attribute__((swift_name("compareTo(other:)")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EventType.Companion")))
@interface SmartypeEventTypeCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ScreenViewEvent")))
@interface SmartypeScreenViewEvent : SmartypeBaseEvent
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeScreenViewEventData * _Nullable data __attribute__((swift_name("data")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ScreenViewEvent.Companion")))
@interface SmartypeScreenViewEventCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ScreenViewEventData")))
@interface SmartypeScreenViewEventData : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property NSDictionary<NSString *, NSString *> * _Nullable custom_attributes __attribute__((swift_name("custom_attributes")));
@property NSString * _Nullable screen_name __attribute__((swift_name("screen_name")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ScreenViewEventData.Companion")))
@interface SmartypeScreenViewEventDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((swift_name("Message")))
@interface SmartypeMessage : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Message.Companion")))
@interface SmartypeMessageCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((swift_name("SmartypeApiBase")))
@interface SmartypeSmartypeApiBase : SmartypeBase
- (instancetype)initWithReceivers:(NSArray<id<SmartypeMessageReceiver>> *)receivers __attribute__((swift_name("init(receivers:)"))) __attribute__((objc_designated_initializer));
- (BOOL)addReceiverReceiver:(id<SmartypeMessageReceiver>)receiver __attribute__((swift_name("addReceiver(receiver:)")));
- (id<SmartypeKotlinx_serialization_runtimeSerialModule>)getSerialModule __attribute__((swift_name("getSerialModule()")));
- (BOOL)removeReceiverReceiver:(id<SmartypeMessageReceiver>)receiver __attribute__((swift_name("removeReceiver(receiver:)")));
- (void)sendMessage:(SmartypeMessage *)message __attribute__((swift_name("send(message:)")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Attribution")))
@interface SmartypeAttribution : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeAttributionData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Attribution.Companion")))
@interface SmartypeAttributionCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AttributionData")))
@interface SmartypeAttributionData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeAttributionDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeAttributionDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeAttributionData *)doCopyCustomAttributes:(SmartypeAttributionDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeAttributionDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AttributionData.Companion")))
@interface SmartypeAttributionDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AttributionDataCustomAttributes")))
@interface SmartypeAttributionDataCustomAttributes : SmartypeBase
- (instancetype)initWithCampaign:(NSString * _Nullable)campaign publisher:(NSString * _Nullable)publisher __attribute__((swift_name("init(campaign:publisher:)"))) __attribute__((objc_designated_initializer));
- (NSString * _Nullable)component1 __attribute__((swift_name("component1()")));
- (NSString * _Nullable)component2 __attribute__((swift_name("component2()")));
- (SmartypeAttributionDataCustomAttributes *)doCopyCampaign:(NSString * _Nullable)campaign publisher:(NSString * _Nullable)publisher __attribute__((swift_name("doCopy(campaign:publisher:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property NSString * _Nullable campaign __attribute__((swift_name("campaign")));
@property NSString * _Nullable publisher __attribute__((swift_name("publisher")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("AttributionDataCustomAttributes.Companion")))
@interface SmartypeAttributionDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Checkout")))
@interface SmartypeCheckout : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeCheckoutData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Checkout.Companion")))
@interface SmartypeCheckoutCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CheckoutData")))
@interface SmartypeCheckoutData : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (readonly) NSString *screenName __attribute__((swift_name("screenName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("CheckoutData.Companion")))
@interface SmartypeCheckoutDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItem")))
@interface SmartypeChooseItem : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeChooseItemData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItem.Companion")))
@interface SmartypeChooseItemCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItemData")))
@interface SmartypeChooseItemData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeChooseItemDataCustomAttributes *)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeChooseItemDataCustomAttributes *)component1 __attribute__((swift_name("component1()")));
- (SmartypeChooseItemData *)doCopyCustomAttributes:(SmartypeChooseItemDataCustomAttributes *)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeChooseItemDataCustomAttributes *customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItemData.Companion")))
@interface SmartypeChooseItemDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItemDataCustomAttributes")))
@interface SmartypeChooseItemDataCustomAttributes : SmartypeBase
- (instancetype)initWithQuantity:(double)quantity milk:(BOOL)milk item:(SmartypeChooseItemDataCustomAttributesItem *)item __attribute__((swift_name("init(quantity:milk:item:)"))) __attribute__((objc_designated_initializer));
- (double)component1 __attribute__((swift_name("component1()")));
- (BOOL)component2 __attribute__((swift_name("component2()")));
- (SmartypeChooseItemDataCustomAttributesItem *)component3 __attribute__((swift_name("component3()")));
- (SmartypeChooseItemDataCustomAttributes *)doCopyQuantity:(double)quantity milk:(BOOL)milk item:(SmartypeChooseItemDataCustomAttributesItem *)item __attribute__((swift_name("doCopy(quantity:milk:item:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeChooseItemDataCustomAttributesItem *item __attribute__((swift_name("item")));
@property BOOL milk __attribute__((swift_name("milk")));
@property double quantity __attribute__((swift_name("quantity")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItemDataCustomAttributes.Companion")))
@interface SmartypeChooseItemDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItemDataCustomAttributesItem")))
@interface SmartypeChooseItemDataCustomAttributesItem : SmartypeKotlinEnum
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SmartypeChooseItemDataCustomAttributesItem *cortado __attribute__((swift_name("cortado")));
@property (class, readonly) SmartypeChooseItemDataCustomAttributesItem *espresso __attribute__((swift_name("espresso")));
@property (class, readonly) SmartypeChooseItemDataCustomAttributesItem *regularcoffee __attribute__((swift_name("regularcoffee")));
- (int32_t)compareToOther:(SmartypeChooseItemDataCustomAttributesItem *)other __attribute__((swift_name("compareTo(other:)")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("ChooseItemDataCustomAttributesItem.Companion")))
@interface SmartypeChooseItemDataCustomAttributesItemCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Constants")))
@interface SmartypeConstants : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
- (NSString *)platform __attribute__((swift_name("platform()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailBounces")))
@interface SmartypeEmailBounces : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeEmailBouncesData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailBounces.Companion")))
@interface SmartypeEmailBouncesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailBouncesData")))
@interface SmartypeEmailBouncesData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeEmailBouncesDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeEmailBouncesDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeEmailBouncesData *)doCopyCustomAttributes:(SmartypeEmailBouncesDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeEmailBouncesDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailBouncesData.Companion")))
@interface SmartypeEmailBouncesDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailBouncesDataCustomAttributes")))
@interface SmartypeEmailBouncesDataCustomAttributes : SmartypeBase
- (instancetype)initWithCampaignName:(NSString * _Nullable)campaignName campaignId:(SmartypeDouble * _Nullable)campaignId subject:(NSString * _Nullable)subject __attribute__((swift_name("init(campaignName:campaignId:subject:)"))) __attribute__((objc_designated_initializer));
- (NSString * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeDouble * _Nullable)component2 __attribute__((swift_name("component2()")));
- (NSString * _Nullable)component3 __attribute__((swift_name("component3()")));
- (SmartypeEmailBouncesDataCustomAttributes *)doCopyCampaignName:(NSString * _Nullable)campaignName campaignId:(SmartypeDouble * _Nullable)campaignId subject:(NSString * _Nullable)subject __attribute__((swift_name("doCopy(campaignName:campaignId:subject:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeDouble * _Nullable campaignId __attribute__((swift_name("campaignId")));
@property NSString * _Nullable campaignName __attribute__((swift_name("campaignName")));
@property NSString * _Nullable subject __attribute__((swift_name("subject")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailBouncesDataCustomAttributes.Companion")))
@interface SmartypeEmailBouncesDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailDeliveries")))
@interface SmartypeEmailDeliveries : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeEmailDeliveriesData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailDeliveries.Companion")))
@interface SmartypeEmailDeliveriesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailDeliveriesData")))
@interface SmartypeEmailDeliveriesData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeEmailDeliveriesDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeEmailDeliveriesDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeEmailDeliveriesData *)doCopyCustomAttributes:(SmartypeEmailDeliveriesDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeEmailDeliveriesDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailDeliveriesData.Companion")))
@interface SmartypeEmailDeliveriesDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailDeliveriesDataCustomAttributes")))
@interface SmartypeEmailDeliveriesDataCustomAttributes : SmartypeBase
- (instancetype)initWithSubject:(NSString * _Nullable)subject campaignName:(NSString * _Nullable)campaignName campaignId:(SmartypeDouble * _Nullable)campaignId __attribute__((swift_name("init(subject:campaignName:campaignId:)"))) __attribute__((objc_designated_initializer));
- (NSString * _Nullable)component1 __attribute__((swift_name("component1()")));
- (NSString * _Nullable)component2 __attribute__((swift_name("component2()")));
- (SmartypeDouble * _Nullable)component3 __attribute__((swift_name("component3()")));
- (SmartypeEmailDeliveriesDataCustomAttributes *)doCopySubject:(NSString * _Nullable)subject campaignName:(NSString * _Nullable)campaignName campaignId:(SmartypeDouble * _Nullable)campaignId __attribute__((swift_name("doCopy(subject:campaignName:campaignId:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeDouble * _Nullable campaignId __attribute__((swift_name("campaignId")));
@property NSString * _Nullable campaignName __attribute__((swift_name("campaignName")));
@property NSString * _Nullable subject __attribute__((swift_name("subject")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailDeliveriesDataCustomAttributes.Companion")))
@interface SmartypeEmailDeliveriesDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailOpens")))
@interface SmartypeEmailOpens : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeEmailOpensData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailOpens.Companion")))
@interface SmartypeEmailOpensCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailOpensData")))
@interface SmartypeEmailOpensData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeEmailOpensDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeEmailOpensDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeEmailOpensData *)doCopyCustomAttributes:(SmartypeEmailOpensDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeEmailOpensDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailOpensData.Companion")))
@interface SmartypeEmailOpensDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailOpensDataCustomAttributes")))
@interface SmartypeEmailOpensDataCustomAttributes : SmartypeBase
- (instancetype)initWithSubject:(NSString * _Nullable)subject campaignName:(NSString * _Nullable)campaignName campaignId:(SmartypeDouble * _Nullable)campaignId __attribute__((swift_name("init(subject:campaignName:campaignId:)"))) __attribute__((objc_designated_initializer));
- (NSString * _Nullable)component1 __attribute__((swift_name("component1()")));
- (NSString * _Nullable)component2 __attribute__((swift_name("component2()")));
- (SmartypeDouble * _Nullable)component3 __attribute__((swift_name("component3()")));
- (SmartypeEmailOpensDataCustomAttributes *)doCopySubject:(NSString * _Nullable)subject campaignName:(NSString * _Nullable)campaignName campaignId:(SmartypeDouble * _Nullable)campaignId __attribute__((swift_name("doCopy(subject:campaignName:campaignId:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeDouble * _Nullable campaignId __attribute__((swift_name("campaignId")));
@property NSString * _Nullable campaignName __attribute__((swift_name("campaignName")));
@property NSString * _Nullable subject __attribute__((swift_name("subject")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailOpensDataCustomAttributes.Companion")))
@interface SmartypeEmailOpensDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailSends")))
@interface SmartypeEmailSends : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeEmailSendsData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailSends.Companion")))
@interface SmartypeEmailSendsCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailSendsData")))
@interface SmartypeEmailSendsData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeEmailSendsDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeEmailSendsDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeEmailSendsData *)doCopyCustomAttributes:(SmartypeEmailSendsDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeEmailSendsDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailSendsData.Companion")))
@interface SmartypeEmailSendsDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailSendsDataCustomAttributes")))
@interface SmartypeEmailSendsDataCustomAttributes : SmartypeBase
- (instancetype)initWithCampaignId:(SmartypeDouble * _Nullable)campaignId subject:(NSString * _Nullable)subject campaignName:(NSString * _Nullable)campaignName __attribute__((swift_name("init(campaignId:subject:campaignName:)"))) __attribute__((objc_designated_initializer));
- (SmartypeDouble * _Nullable)component1 __attribute__((swift_name("component1()")));
- (NSString * _Nullable)component2 __attribute__((swift_name("component2()")));
- (NSString * _Nullable)component3 __attribute__((swift_name("component3()")));
- (SmartypeEmailSendsDataCustomAttributes *)doCopyCampaignId:(SmartypeDouble * _Nullable)campaignId subject:(NSString * _Nullable)subject campaignName:(NSString * _Nullable)campaignName __attribute__((swift_name("doCopy(campaignId:subject:campaignName:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeDouble * _Nullable campaignId __attribute__((swift_name("campaignId")));
@property NSString * _Nullable campaignName __attribute__((swift_name("campaignName")));
@property NSString * _Nullable subject __attribute__((swift_name("subject")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("EmailSendsDataCustomAttributes.Companion")))
@interface SmartypeEmailSendsDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Home")))
@interface SmartypeHome : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeHomeData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Home.Companion")))
@interface SmartypeHomeCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("HomeData")))
@interface SmartypeHomeData : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (readonly) NSString *screenName __attribute__((swift_name("screenName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("HomeData.Companion")))
@interface SmartypeHomeDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Menu")))
@interface SmartypeMenu : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeMenuData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Menu.Companion")))
@interface SmartypeMenuCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MenuData")))
@interface SmartypeMenuData : SmartypeBase
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property (readonly) NSString *screenName __attribute__((swift_name("screenName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("MenuData.Companion")))
@interface SmartypeMenuDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PlaceOrder")))
@interface SmartypePlaceOrder : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypePlaceOrderData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PlaceOrder.Companion")))
@interface SmartypePlaceOrderCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PlaceOrderData")))
@interface SmartypePlaceOrderData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypePlaceOrderDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypePlaceOrderDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypePlaceOrderData *)doCopyCustomAttributes:(SmartypePlaceOrderDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypePlaceOrderDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PlaceOrderData.Companion")))
@interface SmartypePlaceOrderDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PlaceOrderDataCustomAttributes")))
@interface SmartypePlaceOrderDataCustomAttributes : SmartypeBase
- (instancetype)initWithOrderId:(NSString * _Nullable)orderId __attribute__((swift_name("init(orderId:)"))) __attribute__((objc_designated_initializer));
- (NSString * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypePlaceOrderDataCustomAttributes *)doCopyOrderId:(NSString * _Nullable)orderId __attribute__((swift_name("doCopy(orderId:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property NSString * _Nullable orderId __attribute__((swift_name("orderId")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("PlaceOrderDataCustomAttributes.Companion")))
@interface SmartypePlaceOrderDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SearchItem")))
@interface SmartypeSearchItem : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeSearchItemData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SearchItem.Companion")))
@interface SmartypeSearchItemCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SearchItemData")))
@interface SmartypeSearchItemData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeSearchItemDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeSearchItemDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeSearchItemData *)doCopyCustomAttributes:(SmartypeSearchItemDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeSearchItemDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SearchItemData.Companion")))
@interface SmartypeSearchItemDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SearchItemDataCustomAttributes")))
@interface SmartypeSearchItemDataCustomAttributes : SmartypeBase
- (instancetype)initWithQuery:(NSString * _Nullable)query __attribute__((swift_name("init(query:)"))) __attribute__((objc_designated_initializer));
- (NSString * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeSearchItemDataCustomAttributes *)doCopyQuery:(NSString * _Nullable)query __attribute__((swift_name("doCopy(query:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property NSString * _Nullable query __attribute__((swift_name("query")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SearchItemDataCustomAttributes.Companion")))
@interface SmartypeSearchItemDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SetPickup")))
@interface SmartypeSetPickup : SmartypeMessage
- (instancetype)init __attribute__((swift_name("init()"))) __attribute__((objc_designated_initializer));
+ (instancetype)new __attribute__((availability(swift, unavailable, message="use object initializers instead")));
@property SmartypeSetPickupData * _Nullable data __attribute__((swift_name("data")));
@property (readonly) NSString *eventType __attribute__((swift_name("eventType")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SetPickup.Companion")))
@interface SmartypeSetPickupCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SetPickupData")))
@interface SmartypeSetPickupData : SmartypeBase
- (instancetype)initWithCustomAttributes:(SmartypeSetPickupDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("init(customAttributes:)"))) __attribute__((objc_designated_initializer));
- (SmartypeSetPickupDataCustomAttributes * _Nullable)component1 __attribute__((swift_name("component1()")));
- (SmartypeSetPickupData *)doCopyCustomAttributes:(SmartypeSetPickupDataCustomAttributes * _Nullable)customAttributes __attribute__((swift_name("doCopy(customAttributes:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property SmartypeSetPickupDataCustomAttributes * _Nullable customAttributes __attribute__((swift_name("customAttributes")));
@property (readonly) NSString *customEventType __attribute__((swift_name("customEventType")));
@property (readonly) NSString *eventName __attribute__((swift_name("eventName")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SetPickupData.Companion")))
@interface SmartypeSetPickupDataCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SetPickupDataCustomAttributes")))
@interface SmartypeSetPickupDataCustomAttributes : SmartypeBase
- (instancetype)initWithStore:(NSString * _Nullable)store timeZone:(NSString * _Nullable)timeZone unixTimeSeconds:(SmartypeDouble * _Nullable)unixTimeSeconds __attribute__((swift_name("init(store:timeZone:unixTimeSeconds:)"))) __attribute__((objc_designated_initializer));
- (NSString * _Nullable)component1 __attribute__((swift_name("component1()")));
- (NSString * _Nullable)component2 __attribute__((swift_name("component2()")));
- (SmartypeDouble * _Nullable)component3 __attribute__((swift_name("component3()")));
- (SmartypeSetPickupDataCustomAttributes *)doCopyStore:(NSString * _Nullable)store timeZone:(NSString * _Nullable)timeZone unixTimeSeconds:(SmartypeDouble * _Nullable)unixTimeSeconds __attribute__((swift_name("doCopy(store:timeZone:unixTimeSeconds:)")));
- (BOOL)isEqual:(id _Nullable)other __attribute__((swift_name("isEqual(_:)")));
- (NSUInteger)hash __attribute__((swift_name("hash()")));
- (NSString *)description __attribute__((swift_name("description()")));
@property NSString * _Nullable store __attribute__((swift_name("store")));
@property NSString * _Nullable timeZone __attribute__((swift_name("timeZone")));
@property SmartypeDouble * _Nullable unixTimeSeconds __attribute__((swift_name("unixTimeSeconds")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SetPickupDataCustomAttributes.Companion")))
@interface SmartypeSetPickupDataCustomAttributesCompanion : SmartypeBase
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)companion __attribute__((swift_name("init()")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("serializer()")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("SmartypeApi")))
@interface SmartypeSmartypeApi : SmartypeSmartypeApiBase
- (instancetype)initWithReceivers:(NSArray<id<SmartypeMessageReceiver>> *)receivers __attribute__((swift_name("init(receivers:)"))) __attribute__((objc_designated_initializer));
- (SmartypeAttribution *)attribution __attribute__((swift_name("attribution()")));
- (SmartypeCheckout *)checkout __attribute__((swift_name("checkout()")));
- (SmartypeChooseItem *)chooseItem __attribute__((swift_name("chooseItem()")));
- (SmartypeEmailBounces *)emailBounces __attribute__((swift_name("emailBounces()")));
- (SmartypeEmailDeliveries *)emailDeliveries __attribute__((swift_name("emailDeliveries()")));
- (SmartypeEmailOpens *)emailOpens __attribute__((swift_name("emailOpens()")));
- (SmartypeEmailSends *)emailSends __attribute__((swift_name("emailSends()")));
- (id<SmartypeKotlinx_serialization_runtimeSerialModule>)getSerialModule __attribute__((swift_name("getSerialModule()")));
- (SmartypeHome *)home __attribute__((swift_name("home()")));
- (SmartypeMenu *)menu __attribute__((swift_name("menu()")));
- (SmartypePlaceOrder *)placeOrder __attribute__((swift_name("placeOrder()")));
- (SmartypeSearchItem *)searchItem __attribute__((swift_name("searchItem()")));
- (SmartypeSetPickup *)setPickup __attribute__((swift_name("setPickup()")));
@property (readonly) NSString *dataPlanId __attribute__((swift_name("dataPlanId")));
@property (readonly) int32_t dataPlanVersion __attribute__((swift_name("dataPlanVersion")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeJsonElement")))
@interface SmartypeKotlinx_serialization_runtimeJsonElement : SmartypeBase
- (BOOL)containsKey:(NSString *)key __attribute__((swift_name("contains(key:)")));
@property (readonly) BOOL isNull __attribute__((swift_name("isNull")));
@property (readonly) NSArray<SmartypeKotlinx_serialization_runtimeJsonElement *> *jsonArray __attribute__((swift_name("jsonArray")));
@property (readonly) SmartypeKotlinx_serialization_runtimeJsonNull *jsonNull __attribute__((swift_name("jsonNull")));
@property (readonly) NSDictionary<NSString *, SmartypeKotlinx_serialization_runtimeJsonElement *> *jsonObject __attribute__((swift_name("jsonObject")));
@property (readonly) SmartypeKotlinx_serialization_runtimeJsonPrimitive *primitive __attribute__((swift_name("primitive")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeSerializationStrategy")))
@protocol SmartypeKotlinx_serialization_runtimeSerializationStrategy
@required
- (void)serializeEncoder:(id<SmartypeKotlinx_serialization_runtimeEncoder>)encoder value:(id _Nullable)value __attribute__((swift_name("serialize(encoder:value:)")));
@property (readonly) id<SmartypeKotlinx_serialization_runtimeSerialDescriptor> descriptor __attribute__((swift_name("descriptor")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeDeserializationStrategy")))
@protocol SmartypeKotlinx_serialization_runtimeDeserializationStrategy
@required
- (id _Nullable)deserializeDecoder:(id<SmartypeKotlinx_serialization_runtimeDecoder>)decoder __attribute__((swift_name("deserialize(decoder:)")));
- (id _Nullable)patchDecoder:(id<SmartypeKotlinx_serialization_runtimeDecoder>)decoder old:(id _Nullable)old __attribute__((swift_name("patch(decoder:old:)")));
@property (readonly) id<SmartypeKotlinx_serialization_runtimeSerialDescriptor> descriptor __attribute__((swift_name("descriptor")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeKSerializer")))
@protocol SmartypeKotlinx_serialization_runtimeKSerializer <SmartypeKotlinx_serialization_runtimeSerializationStrategy, SmartypeKotlinx_serialization_runtimeDeserializationStrategy>
@required
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeSerialModule")))
@protocol SmartypeKotlinx_serialization_runtimeSerialModule
@required
- (void)dumpToCollector:(id<SmartypeKotlinx_serialization_runtimeSerialModuleCollector>)collector __attribute__((swift_name("dumpTo(collector:)")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer> _Nullable)getContextualKclass:(id<SmartypeKotlinKClass>)kclass __attribute__((swift_name("getContextual(kclass:)")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer> _Nullable)getPolymorphicBaseClass:(id<SmartypeKotlinKClass>)baseClass value:(id)value __attribute__((swift_name("getPolymorphic(baseClass:value:)")));
- (id<SmartypeKotlinx_serialization_runtimeKSerializer> _Nullable)getPolymorphicBaseClass:(id<SmartypeKotlinKClass>)baseClass serializedClassName:(NSString *)serializedClassName __attribute__((swift_name("getPolymorphic(baseClass:serializedClassName:)")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeJsonPrimitive")))
@interface SmartypeKotlinx_serialization_runtimeJsonPrimitive : SmartypeKotlinx_serialization_runtimeJsonElement
- (NSString *)description __attribute__((swift_name("description()")));
@property (readonly) BOOL boolean __attribute__((swift_name("boolean")));
@property (readonly) SmartypeBoolean * _Nullable booleanOrNull __attribute__((swift_name("booleanOrNull")));
@property (readonly) NSString *content __attribute__((swift_name("content")));
@property (readonly) NSString * _Nullable contentOrNull __attribute__((swift_name("contentOrNull")));
@property (readonly, getter=double) double double_ __attribute__((swift_name("double_")));
@property (readonly) SmartypeDouble * _Nullable doubleOrNull __attribute__((swift_name("doubleOrNull")));
@property (readonly, getter=float) float float_ __attribute__((swift_name("float_")));
@property (readonly) SmartypeFloat * _Nullable floatOrNull __attribute__((swift_name("floatOrNull")));
@property (readonly, getter=int) int32_t int_ __attribute__((swift_name("int_")));
@property (readonly) SmartypeInt * _Nullable intOrNull __attribute__((swift_name("intOrNull")));
@property (readonly, getter=long) int64_t long_ __attribute__((swift_name("long_")));
@property (readonly) SmartypeLong * _Nullable longOrNull __attribute__((swift_name("longOrNull")));
@property (readonly) SmartypeKotlinx_serialization_runtimeJsonPrimitive *primitive __attribute__((swift_name("primitive")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Kotlinx_serialization_runtimeJsonNull")))
@interface SmartypeKotlinx_serialization_runtimeJsonNull : SmartypeKotlinx_serialization_runtimeJsonPrimitive
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
+ (instancetype)jsonNull __attribute__((swift_name("init()")));
@property (readonly) NSString *content __attribute__((swift_name("content")));
@property (readonly) NSString * _Nullable contentOrNull __attribute__((swift_name("contentOrNull")));
@property (readonly) SmartypeKotlinx_serialization_runtimeJsonNull *jsonNull __attribute__((swift_name("jsonNull")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeEncoder")))
@protocol SmartypeKotlinx_serialization_runtimeEncoder
@required
- (id<SmartypeKotlinx_serialization_runtimeCompositeEncoder>)beginCollectionDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor collectionSize:(int32_t)collectionSize typeSerializers:(SmartypeKotlinArray *)typeSerializers __attribute__((swift_name("beginCollection(descriptor:collectionSize:typeSerializers:)")));
- (id<SmartypeKotlinx_serialization_runtimeCompositeEncoder>)beginStructureDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor typeSerializers:(SmartypeKotlinArray *)typeSerializers __attribute__((swift_name("beginStructure(descriptor:typeSerializers:)")));
- (void)encodeBooleanValue:(BOOL)value __attribute__((swift_name("encodeBoolean(value:)")));
- (void)encodeByteValue:(int8_t)value __attribute__((swift_name("encodeByte(value:)")));
- (void)encodeCharValue:(unichar)value __attribute__((swift_name("encodeChar(value:)")));
- (void)encodeDoubleValue:(double)value __attribute__((swift_name("encodeDouble(value:)")));
- (void)encodeEnumEnumDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)enumDescriptor index:(int32_t)index __attribute__((swift_name("encodeEnum(enumDescriptor:index:)")));
- (void)encodeFloatValue:(float)value __attribute__((swift_name("encodeFloat(value:)")));
- (void)encodeIntValue:(int32_t)value __attribute__((swift_name("encodeInt(value:)")));
- (void)encodeLongValue:(int64_t)value __attribute__((swift_name("encodeLong(value:)")));
- (void)encodeNotNullMark __attribute__((swift_name("encodeNotNullMark()")));
- (void)encodeNull __attribute__((swift_name("encodeNull()")));
- (void)encodeNullableSerializableValueSerializer:(id<SmartypeKotlinx_serialization_runtimeSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeNullableSerializableValue(serializer:value:)")));
- (void)encodeSerializableValueSerializer:(id<SmartypeKotlinx_serialization_runtimeSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeSerializableValue(serializer:value:)")));
- (void)encodeShortValue:(int16_t)value __attribute__((swift_name("encodeShort(value:)")));
- (void)encodeStringValue:(NSString *)value __attribute__((swift_name("encodeString(value:)")));
- (void)encodeUnit __attribute__((swift_name("encodeUnit()")));
@property (readonly) id<SmartypeKotlinx_serialization_runtimeSerialModule> context __attribute__((swift_name("context")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeSerialDescriptor")))
@protocol SmartypeKotlinx_serialization_runtimeSerialDescriptor
@required
- (NSArray<id<SmartypeKotlinAnnotation>> *)getElementAnnotationsIndex:(int32_t)index __attribute__((swift_name("getElementAnnotations(index:)")));
- (id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)getElementDescriptorIndex:(int32_t)index __attribute__((swift_name("getElementDescriptor(index:)")));
- (int32_t)getElementIndexName:(NSString *)name __attribute__((swift_name("getElementIndex(name:)")));
- (NSString *)getElementNameIndex:(int32_t)index __attribute__((swift_name("getElementName(index:)")));
- (NSArray<id<SmartypeKotlinAnnotation>> *)getEntityAnnotations __attribute__((swift_name("getEntityAnnotations()"))) __attribute__((deprecated("Deprecated in the favour of 'annotations' property")));
- (BOOL)isElementOptionalIndex:(int32_t)index __attribute__((swift_name("isElementOptional(index:)")));
@property (readonly) NSArray<id<SmartypeKotlinAnnotation>> *annotations __attribute__((swift_name("annotations")));
@property (readonly) int32_t elementsCount __attribute__((swift_name("elementsCount")));
@property (readonly) BOOL isNullable __attribute__((swift_name("isNullable")));
@property (readonly) SmartypeKotlinx_serialization_runtimeSerialKind *kind __attribute__((swift_name("kind")));
@property (readonly) NSString *name __attribute__((swift_name("name"))) __attribute__((unavailable("name property deprecated in the favour of serialName")));
@property (readonly) NSString *serialName __attribute__((swift_name("serialName")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeDecoder")))
@protocol SmartypeKotlinx_serialization_runtimeDecoder
@required
- (id<SmartypeKotlinx_serialization_runtimeCompositeDecoder>)beginStructureDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor typeParams:(SmartypeKotlinArray *)typeParams __attribute__((swift_name("beginStructure(descriptor:typeParams:)")));
- (BOOL)decodeBoolean __attribute__((swift_name("decodeBoolean()")));
- (int8_t)decodeByte __attribute__((swift_name("decodeByte()")));
- (unichar)decodeChar __attribute__((swift_name("decodeChar()")));
- (double)decodeDouble __attribute__((swift_name("decodeDouble()")));
- (int32_t)decodeEnumEnumDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)enumDescriptor __attribute__((swift_name("decodeEnum(enumDescriptor:)")));
- (float)decodeFloat __attribute__((swift_name("decodeFloat()")));
- (int32_t)decodeInt __attribute__((swift_name("decodeInt()")));
- (int64_t)decodeLong __attribute__((swift_name("decodeLong()")));
- (BOOL)decodeNotNullMark __attribute__((swift_name("decodeNotNullMark()")));
- (SmartypeKotlinNothing * _Nullable)decodeNull __attribute__((swift_name("decodeNull()")));
- (id _Nullable)decodeNullableSerializableValueDeserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer __attribute__((swift_name("decodeNullableSerializableValue(deserializer:)")));
- (id _Nullable)decodeSerializableValueDeserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer __attribute__((swift_name("decodeSerializableValue(deserializer:)")));
- (int16_t)decodeShort __attribute__((swift_name("decodeShort()")));
- (NSString *)decodeString __attribute__((swift_name("decodeString()")));
- (void)decodeUnit __attribute__((swift_name("decodeUnit()")));
- (id _Nullable)updateNullableSerializableValueDeserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer old:(id _Nullable)old __attribute__((swift_name("updateNullableSerializableValue(deserializer:old:)")));
- (id _Nullable)updateSerializableValueDeserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer old:(id _Nullable)old __attribute__((swift_name("updateSerializableValue(deserializer:old:)")));
@property (readonly) id<SmartypeKotlinx_serialization_runtimeSerialModule> context __attribute__((swift_name("context")));
@property (readonly) SmartypeKotlinx_serialization_runtimeUpdateMode *updateMode __attribute__((swift_name("updateMode")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeSerialModuleCollector")))
@protocol SmartypeKotlinx_serialization_runtimeSerialModuleCollector
@required
- (void)contextualKClass:(id<SmartypeKotlinKClass>)kClass serializer:(id<SmartypeKotlinx_serialization_runtimeKSerializer>)serializer __attribute__((swift_name("contextual(kClass:serializer:)")));
- (void)polymorphicBaseClass:(id<SmartypeKotlinKClass>)baseClass actualClass:(id<SmartypeKotlinKClass>)actualClass actualSerializer:(id<SmartypeKotlinx_serialization_runtimeKSerializer>)actualSerializer __attribute__((swift_name("polymorphic(baseClass:actualClass:actualSerializer:)")));
@end;

__attribute__((swift_name("KotlinKDeclarationContainer")))
@protocol SmartypeKotlinKDeclarationContainer
@required
@end;

__attribute__((swift_name("KotlinKAnnotatedElement")))
@protocol SmartypeKotlinKAnnotatedElement
@required
@end;

__attribute__((swift_name("KotlinKClassifier")))
@protocol SmartypeKotlinKClassifier
@required
@end;

__attribute__((swift_name("KotlinKClass")))
@protocol SmartypeKotlinKClass <SmartypeKotlinKDeclarationContainer, SmartypeKotlinKAnnotatedElement, SmartypeKotlinKClassifier>
@required
- (BOOL)isInstanceValue:(id _Nullable)value __attribute__((swift_name("isInstance(value:)")));
@property (readonly) NSString * _Nullable qualifiedName __attribute__((swift_name("qualifiedName")));
@property (readonly) NSString * _Nullable simpleName __attribute__((swift_name("simpleName")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeCompositeEncoder")))
@protocol SmartypeKotlinx_serialization_runtimeCompositeEncoder
@required
- (void)encodeBooleanElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(BOOL)value __attribute__((swift_name("encodeBooleanElement(descriptor:index:value:)")));
- (void)encodeByteElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(int8_t)value __attribute__((swift_name("encodeByteElement(descriptor:index:value:)")));
- (void)encodeCharElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(unichar)value __attribute__((swift_name("encodeCharElement(descriptor:index:value:)")));
- (void)encodeDoubleElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(double)value __attribute__((swift_name("encodeDoubleElement(descriptor:index:value:)")));
- (void)encodeFloatElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(float)value __attribute__((swift_name("encodeFloatElement(descriptor:index:value:)")));
- (void)encodeIntElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(int32_t)value __attribute__((swift_name("encodeIntElement(descriptor:index:value:)")));
- (void)encodeLongElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(int64_t)value __attribute__((swift_name("encodeLongElement(descriptor:index:value:)")));
- (void)encodeNonSerializableElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(id)value __attribute__((swift_name("encodeNonSerializableElement(descriptor:index:value:)"))) __attribute__((unavailable("This method is deprecated for removal. Please remove it from your implementation and delegate to default method instead")));
- (void)encodeNullableSerializableElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index serializer:(id<SmartypeKotlinx_serialization_runtimeSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeNullableSerializableElement(descriptor:index:serializer:value:)")));
- (void)encodeSerializableElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index serializer:(id<SmartypeKotlinx_serialization_runtimeSerializationStrategy>)serializer value:(id _Nullable)value __attribute__((swift_name("encodeSerializableElement(descriptor:index:serializer:value:)")));
- (void)encodeShortElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(int16_t)value __attribute__((swift_name("encodeShortElement(descriptor:index:value:)")));
- (void)encodeStringElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index value:(NSString *)value __attribute__((swift_name("encodeStringElement(descriptor:index:value:)")));
- (void)encodeUnitElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("encodeUnitElement(descriptor:index:)")));
- (void)endStructureDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor __attribute__((swift_name("endStructure(descriptor:)")));
- (BOOL)shouldEncodeElementDefaultDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("shouldEncodeElementDefault(descriptor:index:)")));
@property (readonly) id<SmartypeKotlinx_serialization_runtimeSerialModule> context __attribute__((swift_name("context")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinArray")))
@interface SmartypeKotlinArray : SmartypeBase
+ (instancetype)arrayWithSize:(int32_t)size init:(id _Nullable (^)(SmartypeInt *))init __attribute__((swift_name("init(size:init:)")));
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (id _Nullable)getIndex:(int32_t)index __attribute__((swift_name("get(index:)")));
- (id<SmartypeKotlinIterator>)iterator __attribute__((swift_name("iterator()")));
- (void)setIndex:(int32_t)index value:(id _Nullable)value __attribute__((swift_name("set(index:value:)")));
@property (readonly) int32_t size __attribute__((swift_name("size")));
@end;

__attribute__((swift_name("KotlinAnnotation")))
@protocol SmartypeKotlinAnnotation
@required
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeSerialKind")))
@interface SmartypeKotlinx_serialization_runtimeSerialKind : SmartypeBase
- (NSString *)description __attribute__((swift_name("description()")));
@end;

__attribute__((swift_name("Kotlinx_serialization_runtimeCompositeDecoder")))
@protocol SmartypeKotlinx_serialization_runtimeCompositeDecoder
@required
- (BOOL)decodeBooleanElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeBooleanElement(descriptor:index:)")));
- (int8_t)decodeByteElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeByteElement(descriptor:index:)")));
- (unichar)decodeCharElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeCharElement(descriptor:index:)")));
- (int32_t)decodeCollectionSizeDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor __attribute__((swift_name("decodeCollectionSize(descriptor:)")));
- (double)decodeDoubleElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeDoubleElement(descriptor:index:)")));
- (int32_t)decodeElementIndexDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor __attribute__((swift_name("decodeElementIndex(descriptor:)")));
- (float)decodeFloatElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeFloatElement(descriptor:index:)")));
- (int32_t)decodeIntElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeIntElement(descriptor:index:)")));
- (int64_t)decodeLongElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeLongElement(descriptor:index:)")));
- (id _Nullable)decodeNullableSerializableElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index deserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer __attribute__((swift_name("decodeNullableSerializableElement(descriptor:index:deserializer:)")));
- (BOOL)decodeSequentially __attribute__((swift_name("decodeSequentially()")));
- (id _Nullable)decodeSerializableElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index deserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer __attribute__((swift_name("decodeSerializableElement(descriptor:index:deserializer:)")));
- (int16_t)decodeShortElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeShortElement(descriptor:index:)")));
- (NSString *)decodeStringElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeStringElement(descriptor:index:)")));
- (void)decodeUnitElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index __attribute__((swift_name("decodeUnitElement(descriptor:index:)")));
- (void)endStructureDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor __attribute__((swift_name("endStructure(descriptor:)")));
- (id _Nullable)updateNullableSerializableElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index deserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer old:(id _Nullable)old __attribute__((swift_name("updateNullableSerializableElement(descriptor:index:deserializer:old:)")));
- (id _Nullable)updateSerializableElementDescriptor:(id<SmartypeKotlinx_serialization_runtimeSerialDescriptor>)descriptor index:(int32_t)index deserializer:(id<SmartypeKotlinx_serialization_runtimeDeserializationStrategy>)deserializer old:(id _Nullable)old __attribute__((swift_name("updateSerializableElement(descriptor:index:deserializer:old:)")));
@property (readonly) id<SmartypeKotlinx_serialization_runtimeSerialModule> context __attribute__((swift_name("context")));
@property (readonly) SmartypeKotlinx_serialization_runtimeUpdateMode *updateMode __attribute__((swift_name("updateMode")));
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("KotlinNothing")))
@interface SmartypeKotlinNothing : SmartypeBase
@end;

__attribute__((objc_subclassing_restricted))
__attribute__((swift_name("Kotlinx_serialization_runtimeUpdateMode")))
@interface SmartypeKotlinx_serialization_runtimeUpdateMode : SmartypeKotlinEnum
+ (instancetype)alloc __attribute__((unavailable));
+ (instancetype)allocWithZone:(struct _NSZone *)zone __attribute__((unavailable));
- (instancetype)initWithName:(NSString *)name ordinal:(int32_t)ordinal __attribute__((swift_name("init(name:ordinal:)"))) __attribute__((objc_designated_initializer)) __attribute__((unavailable));
@property (class, readonly) SmartypeKotlinx_serialization_runtimeUpdateMode *banned __attribute__((swift_name("banned")));
@property (class, readonly) SmartypeKotlinx_serialization_runtimeUpdateMode *overwrite __attribute__((swift_name("overwrite")));
@property (class, readonly) SmartypeKotlinx_serialization_runtimeUpdateMode *update __attribute__((swift_name("update")));
- (int32_t)compareToOther:(SmartypeKotlinx_serialization_runtimeUpdateMode *)other __attribute__((swift_name("compareTo(other:)")));
@end;

__attribute__((swift_name("KotlinIterator")))
@protocol SmartypeKotlinIterator
@required
- (BOOL)hasNext __attribute__((swift_name("hasNext()")));
- (id _Nullable)next __attribute__((swift_name("next()")));
@end;

#pragma clang diagnostic pop
NS_ASSUME_NONNULL_END
