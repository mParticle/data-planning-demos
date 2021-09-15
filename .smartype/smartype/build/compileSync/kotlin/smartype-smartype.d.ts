type Nullable<T> = T | null | undefined
export namespace com.mparticle.smartype.api {
    abstract class Message implements com.mparticle.smartype.api.Serializable {
        constructor();
    }
}
export namespace com.mparticle.smartype.api {
    interface MessageReceiver {
        receive(message: string): void;
    }
}
export namespace com.mparticle.smartype.api {
    interface Serializable {
        toJson(): string;
    }
}
export namespace com.mparticle.smartype.api {
    abstract class SmartypeApiBase {
        constructor();
        send(message: com.mparticle.smartype.api.Message): void;
        addReceiver(receiver: com.mparticle.smartype.api.MessageReceiver): boolean;
        removeReceiver(receiver: com.mparticle.smartype.api.MessageReceiver): boolean;
    }
}
export function mParticleReceiver(): com.mparticle.smartype.api.receivers.mparticle.MParticleReceiver;
export namespace com.mparticle.smartype.api.receivers.mparticle {
    class MParticleReceiver implements com.mparticle.smartype.api.MessageReceiver {
        constructor();
        receive(message: string): void;
    }
}
export class AddCustomizationColorDataCustomAttributesColor implements com.mparticle.smartype.api.Serializable {
    constructor();
    value: string;
    toJson(): string;
    BLUE(): AddCustomizationColorDataCustomAttributesColor;
    BROWN(): AddCustomizationColorDataCustomAttributesColor;
    GREEN(): AddCustomizationColorDataCustomAttributesColor;
    LAVENDER(): AddCustomizationColorDataCustomAttributesColor;
    YELLOW(): AddCustomizationColorDataCustomAttributesColor;
}
export class AddCustomizationColorDataCustomAttributes implements com.mparticle.smartype.api.Serializable {
    constructor(color: AddCustomizationColorDataCustomAttributesColor);
    readonly color: AddCustomizationColorDataCustomAttributesColor;
    toJson(): string;
    component1(): AddCustomizationColorDataCustomAttributesColor;
    copy(color: AddCustomizationColorDataCustomAttributesColor): AddCustomizationColorDataCustomAttributes;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export class AddCustomizationColorData implements com.mparticle.smartype.api.Serializable {
    constructor(customAttributes: AddCustomizationColorDataCustomAttributes);
    readonly customAttributes: AddCustomizationColorDataCustomAttributes;
    readonly eventName: string;
    readonly customEventType: string;
    toJson(): string;
    component1(): AddCustomizationColorDataCustomAttributes;
    copy(customAttributes: AddCustomizationColorDataCustomAttributes): AddCustomizationColorData;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export class AddCustomizationColor extends com.mparticle.smartype.api.Message {
    constructor(data: Nullable<AddCustomizationColorData>);
    readonly data: Nullable<AddCustomizationColorData>;
    readonly eventType: string;
    toJson(): string;
    component1(): Nullable<AddCustomizationColorData>;
    copy(data: Nullable<AddCustomizationColorData>): AddCustomizationColor;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export class AddCustomizationConfigDataCustomAttributesConfig implements com.mparticle.smartype.api.Serializable {
    constructor();
    value: string;
    toJson(): string;
    TWO_SEATER(): AddCustomizationConfigDataCustomAttributesConfig;
    THREE_SEATER(): AddCustomizationConfigDataCustomAttributesConfig;
    SECTIONAL(): AddCustomizationConfigDataCustomAttributesConfig;
}
export class AddCustomizationConfigDataCustomAttributes implements com.mparticle.smartype.api.Serializable {
    constructor(config: AddCustomizationConfigDataCustomAttributesConfig);
    readonly config: AddCustomizationConfigDataCustomAttributesConfig;
    toJson(): string;
    component1(): AddCustomizationConfigDataCustomAttributesConfig;
    copy(config: AddCustomizationConfigDataCustomAttributesConfig): AddCustomizationConfigDataCustomAttributes;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export class AddCustomizationConfigData implements com.mparticle.smartype.api.Serializable {
    constructor(customAttributes: AddCustomizationConfigDataCustomAttributes);
    readonly customAttributes: AddCustomizationConfigDataCustomAttributes;
    readonly eventName: string;
    readonly customEventType: string;
    toJson(): string;
    component1(): AddCustomizationConfigDataCustomAttributes;
    copy(customAttributes: AddCustomizationConfigDataCustomAttributes): AddCustomizationConfigData;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export class AddCustomizationConfig extends com.mparticle.smartype.api.Message {
    constructor(data: Nullable<AddCustomizationConfigData>);
    readonly data: Nullable<AddCustomizationConfigData>;
    readonly eventType: string;
    toJson(): string;
    component1(): Nullable<AddCustomizationConfigData>;
    copy(data: Nullable<AddCustomizationConfigData>): AddCustomizationConfig;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export class SmartypeApi extends com.mparticle.smartype.api.SmartypeApiBase {
    constructor();
    readonly dataPlanId: string;
    readonly dataPlanVersion: number;
    addCustomizationColor(data: Nullable<AddCustomizationColorData>): AddCustomizationColor;
    addCustomizationConfig(data: Nullable<AddCustomizationConfigData>): AddCustomizationConfig;
}
export namespace com.mparticle.smartype {
    class Constants {
        constructor();
        platform(): string;
    }
}
export as namespace smartype_smartype;