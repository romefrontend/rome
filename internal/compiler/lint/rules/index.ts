/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* GENERATED:START(hash:5d20bc54b36105f96b3ca80f5befae6a982ecb45,id:main) Everything below is automatically generated. DO NOT MODIFY. Run `./rome run scripts/generated-files/ast` to update. */
import preferClosingNonVoid from "./html/preferClosingNonVoid";
import camelCase from "./js/camelCase";
import caseSingleStatement from "./js/caseSingleStatement";
import confusingLanguage from "./js/confusingLanguage";
import defaultExportSameBasename from "./js/defaultExportSameBasename";
import doubleEquals from "./js/doubleEquals";
import duplicateImportSource from "./js/duplicateImportSource";
import emptyBlocks from "./js/emptyBlocks";
import emptyMatches from "./js/emptyMatches";
import getterReturn from "./js/getterReturn";
import importDefaultBasename from "./js/importDefaultBasename";
import negationElse from "./js/negationElse";
import noArguments from "./js/noArguments";
import noAsyncPromiseExecutor from "./js/noAsyncPromiseExecutor";
import noCatchAssign from "./js/noCatchAssign";
import noCommaOperator from "./js/noCommaOperator";
import noCompareNegZero from "./js/noCompareNegZero";
import noCondAssign from "./js/noCondAssign";
import noDebugger from "./js/noDebugger";
import noDelete from "./js/noDelete";
import noDeleteVars from "./js/noDeleteVars";
import noDupeArgs from "./js/noDupeArgs";
import noDuplicateCase from "./js/noDuplicateCase";
import noDuplicateGroupNamesInRegularExpressions from "./js/noDuplicateGroupNamesInRegularExpressions";
import noDuplicateKeys from "./js/noDuplicateKeys";
import noEmptyCharacterClass from "./js/noEmptyCharacterClass";
import noExtraBooleanCast from "./js/noExtraBooleanCast";
import noFunctionAssign from "./js/noFunctionAssign";
import noImportAssign from "./js/noImportAssign";
import noLabelVar from "./js/noLabelVar";
import noMultipleSpacesInRegularExpressionLiterals from "./js/noMultipleSpacesInRegularExpressionLiterals";
import noNestedTernary from "./js/noNestedTernary";
import noPosixInRegularExpression from "./js/noPosixInRegularExpression";
import noReferenceToNonExistingGroup from "./js/noReferenceToNonExistingGroup";
import noSetterReturn from "./js/noSetterReturn";
import noShadowRestrictedNames from "./js/noShadowRestrictedNames";
import noShorthandArrayType from "./js/noShorthandArrayType";
import noTemplateCurlyInString from "./js/noTemplateCurlyInString";
import noUnsafeFinally from "./js/noUnsafeFinally";
import noUnusedTemplateLiteral from "./js/noUnusedTemplateLiteral";
import noUnusedVariables from "./js/noUnusedVariables";
import noVar from "./js/noVar";
import preferBlockStatements from "./js/preferBlockStatements";
import preferFunctionDeclarations from "./js/preferFunctionDeclarations";
import preferTemplate from "./js/preferTemplate";
import preferWhile from "./js/preferWhile";
import restrictedGlobals from "./js/restrictedGlobals";
import shoutyConstants from "./js/shoutyConstants";
import singleVarDeclarator from "./js/singleVarDeclarator";
import sortImportExportSpecifiers from "./js/sortImportExportSpecifiers";
import sparseArray from "./js/sparseArray";
import undeclaredVariables from "./js/undeclaredVariables";
import unsafeNegation from "./js/unsafeNegation";
import altText from "./jsx-a11y/altText";
import anchorHasContent from "./jsx-a11y/anchorHasContent";
import anchorIsValid from "./jsx-a11y/anchorIsValid";
import ariaProps from "./jsx-a11y/ariaProps";
import ariaProptypes from "./jsx-a11y/ariaProptypes";
import ariaUnsupportedElements from "./jsx-a11y/ariaUnsupportedElements";
import clickEventsHaveKeyEvents from "./jsx-a11y/clickEventsHaveKeyEvents";
import headingHasContent from "./jsx-a11y/headingHasContent";
import htmlHasLang from "./jsx-a11y/htmlHasLang";
import iframeHasTitle from "./jsx-a11y/iframeHasTitle";
import imgRedundantAlt from "./jsx-a11y/imgRedundantAlt";
import lang from "./jsx-a11y/lang";
import mediaHasCaption from "./jsx-a11y/mediaHasCaption";
import mouseEventsHaveKeyEvents from "./jsx-a11y/mouseEventsHaveKeyEvents";
import noAccessKey from "./jsx-a11y/noAccessKey";
import noAutofocus from "./jsx-a11y/noAutofocus";
import noDistractingElements from "./jsx-a11y/noDistractingElements";
import noNoninteractiveElementToInteractiveRole from "./jsx-a11y/noNoninteractiveElementToInteractiveRole";
import noNoninteractiveTabindex from "./jsx-a11y/noNoninteractiveTabindex";
import noOnChange from "./jsx-a11y/noOnChange";
import noRedundantRoles from "./jsx-a11y/noRedundantRoles";
import noTargetBlank from "./jsx-a11y/noTargetBlank";
import roleHasRequiredAriaProps from "./jsx-a11y/roleHasRequiredAriaProps";
import scope from "./jsx-a11y/scope";
import tabindexNoPositive from "./jsx-a11y/tabindexNoPositive";
import fileExtension from "./jsx/fileExtension";
import noCommentText from "./jsx/noCommentText";
import noDuplicateProps from "./jsx/noDuplicateProps";
import noImplicitBoolean from "./jsx/noImplicitBoolean";
import pascalCase from "./jsx/pascalCase";
import preferSelfClosingElements from "./jsx/preferSelfClosingElements";
import propsNoSpreading from "./jsx/propsNoSpreading";
import buttonHasType from "./react/buttonHasType";
import jsxFragments from "./react/jsxFragments";
import jsxKey from "./react/jsxKey";
import noAccessStateInSetState from "./react/noAccessStateInSetState";
import noArrayIndexKey from "./react/noArrayIndexKey";
import noChildrenProp from "./react/noChildrenProp";
import noDanger from "./react/noDanger";
import noDangerWithChildren from "./react/noDangerWithChildren";
import noDidMountSetState from "./react/noDidMountSetState";
import noDidUpdateSetState from "./react/noDidUpdateSetState";
import noDirectMutationState from "./react/noDirectMutationState";
import noFindDOMNode from "./react/noFindDOMNode";
import noRedundantShouldComponentUpdate from "./react/noRedundantShouldComponentUpdate";
import noRenderReturnValue from "./react/noRenderReturnValue";
import noStringRefs from "./react/noStringRefs";
import noThisInSFC from "./react/noThisInSFC";
import noUnsafe from "./react/noUnsafe";
import noUselessFragment from "./react/noUselessFragment";
import noWillUpdateSetState from "./react/noWillUpdateSetState";
import requireRenderReturn from "./react/requireRenderReturn";
import sortComp from "./react/sortComp";
import stylePropObject from "./react/stylePropObject";
import voidDomElementsNoChildren from "./react/voidDomElementsNoChildren";
import noExplicitAny from "./ts/noExplicitAny";
import preferInterfaces from "./ts/preferInterfaces";
import {AnyVisitors} from "@internal/compiler";

export const lintTransforms: AnyVisitors = [
	preferClosingNonVoid,
	camelCase,
	caseSingleStatement,
	confusingLanguage,
	defaultExportSameBasename,
	doubleEquals,
	duplicateImportSource,
	emptyBlocks,
	emptyMatches,
	getterReturn,
	importDefaultBasename,
	negationElse,
	noArguments,
	noAsyncPromiseExecutor,
	noCatchAssign,
	noCommaOperator,
	noCompareNegZero,
	noCondAssign,
	noDebugger,
	noDelete,
	noDeleteVars,
	noDupeArgs,
	noDuplicateCase,
	noDuplicateGroupNamesInRegularExpressions,
	noDuplicateKeys,
	noEmptyCharacterClass,
	noExtraBooleanCast,
	noFunctionAssign,
	noImportAssign,
	noLabelVar,
	noMultipleSpacesInRegularExpressionLiterals,
	noNestedTernary,
	noPosixInRegularExpression,
	noReferenceToNonExistingGroup,
	noSetterReturn,
	noShadowRestrictedNames,
	noShorthandArrayType,
	noTemplateCurlyInString,
	noUnsafeFinally,
	noUnusedTemplateLiteral,
	noUnusedVariables,
	noVar,
	preferBlockStatements,
	preferFunctionDeclarations,
	preferTemplate,
	preferWhile,
	restrictedGlobals,
	shoutyConstants,
	singleVarDeclarator,
	sortImportExportSpecifiers,
	sparseArray,
	undeclaredVariables,
	unsafeNegation,
	altText,
	anchorHasContent,
	anchorIsValid,
	ariaProps,
	ariaProptypes,
	ariaUnsupportedElements,
	clickEventsHaveKeyEvents,
	headingHasContent,
	htmlHasLang,
	iframeHasTitle,
	imgRedundantAlt,
	lang,
	mediaHasCaption,
	mouseEventsHaveKeyEvents,
	noAccessKey,
	noAutofocus,
	noDistractingElements,
	noNoninteractiveElementToInteractiveRole,
	noNoninteractiveTabindex,
	noOnChange,
	noRedundantRoles,
	noTargetBlank,
	roleHasRequiredAriaProps,
	scope,
	tabindexNoPositive,
	fileExtension,
	noCommentText,
	noDuplicateProps,
	noImplicitBoolean,
	pascalCase,
	preferSelfClosingElements,
	propsNoSpreading,
	buttonHasType,
	jsxFragments,
	jsxKey,
	noAccessStateInSetState,
	noArrayIndexKey,
	noChildrenProp,
	noDanger,
	noDangerWithChildren,
	noDidMountSetState,
	noDidUpdateSetState,
	noDirectMutationState,
	noFindDOMNode,
	noRedundantShouldComponentUpdate,
	noRenderReturnValue,
	noStringRefs,
	noThisInSFC,
	noUnsafe,
	noUselessFragment,
	noWillUpdateSetState,
	requireRenderReturn,
	sortComp,
	stylePropObject,
	voidDomElementsNoChildren,
	noExplicitAny,
	preferInterfaces,
];
/* GENERATED:END(id:main) */
