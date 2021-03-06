/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#include "config.h"

#if ENABLE(SVG)

#include "JSSVGMPathElement.h"

#include "SVGMPathElement.h"
#include <wtf/GetPtr.h>

#if ENABLE(SVG)
#include "JSSVGAnimatedBoolean.h"
#include "JSSVGAnimatedString.h"
#endif

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGMPathElementTableValues[] =
{
#if ENABLE(SVG)
    { "externalResourcesRequired", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGMPathElementExternalResourcesRequired), (intptr_t)0 },
#endif
#if ENABLE(SVG)
    { "href", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGMPathElementHref), (intptr_t)0 },
#endif
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGMPathElementConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGMPathElementTable = { 9, 7, JSSVGMPathElementTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGMPathElementConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGMPathElementConstructorTable = { 1, 0, JSSVGMPathElementConstructorTableValues, 0 };
const ClassInfo JSSVGMPathElementConstructor::s_info = { "SVGMPathElementConstructor", &Base::s_info, &JSSVGMPathElementConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGMPathElementConstructor) };

JSSVGMPathElementConstructor::JSSVGMPathElementConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGMPathElementConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGMPathElementPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGMPathElementConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGMPathElementConstructor, JSDOMWrapper>(exec, JSSVGMPathElementConstructorTable, jsCast<JSSVGMPathElementConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGMPathElementPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGMPathElementPrototypeTable = { 1, 0, JSSVGMPathElementPrototypeTableValues, 0 };
const ClassInfo JSSVGMPathElementPrototype::s_info = { "SVGMPathElementPrototype", &Base::s_info, &JSSVGMPathElementPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGMPathElementPrototype) };

JSObject* JSSVGMPathElementPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGMPathElement>(vm, globalObject);
}

const ClassInfo JSSVGMPathElement::s_info = { "SVGMPathElement", &Base::s_info, &JSSVGMPathElementTable, 0 , CREATE_METHOD_TABLE(JSSVGMPathElement) };

JSSVGMPathElement::JSSVGMPathElement(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGMPathElement> impl)
    : JSSVGElement(structure, globalObject, impl)
{
}

void JSSVGMPathElement::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGMPathElement::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGMPathElementPrototype::create(vm, globalObject, JSSVGMPathElementPrototype::createStructure(vm, globalObject, JSSVGElementPrototype::self(vm, globalObject)));
}

bool JSSVGMPathElement::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGMPathElement* thisObject = jsCast<JSSVGMPathElement*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGMPathElement, Base>(exec, JSSVGMPathElementTable, thisObject, propertyName, slot);
}

#if ENABLE(SVG)
EncodedJSValue jsSVGMPathElementExternalResourcesRequired(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGMPathElement* castedThis = jsDynamicCast<JSSVGMPathElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGMPathElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedBoolean> obj = impl.externalResourcesRequiredAnimated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}

#endif

#if ENABLE(SVG)
EncodedJSValue jsSVGMPathElementHref(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGMPathElement* castedThis = jsDynamicCast<JSSVGMPathElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGMPathElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedString> obj = impl.hrefAnimated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}

#endif

EncodedJSValue jsSVGMPathElementConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGMPathElement* domObject = jsDynamicCast<JSSVGMPathElement*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGMPathElement::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSSVGMPathElement::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGMPathElementConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SVG)
