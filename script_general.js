(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarMargin":2,"children":["this.MainViewer","this.Image_2EA59958_3A7D_ADDA_41A2_B99EC4CAD76E"],"start":"this.playAudioList([this.audio_2895EFF6_39CE_64D6_41C2_727721AA11FE], true); this.init()","id":"rootPlayer","data":{"locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1},"history":{},"defaultLocale":"pt","name":"Player741","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"hash": "fe2d1ef4ef48748958ec38e89b49e1b8ffaf593092f762666d354782c2d1f29f", "definitions": [{"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer"},{"class":"PanoramaCamera","initialSequence":"this.sequence_2863984B_39C2_AB3E_41BE_1AE9CE537611","id":"panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_camera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","hfov":120,"pitch":0,"yaw":0}},{"class":"PanoramaCamera","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":2000},{"class":"TargetRotationalCameraDisplayMovement","targetPitch":-17.69,"easing":"cubic_in_out","duration":5000,"targetHfov":120,"targetStereographicFactor":0}],"initialSequence":"this.sequence_32F26CB9_39C2_AB5A_41B1_1BFD37DC2D69","id":"panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_camera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","hfov":120,"pitch":-17.69,"yaw":0.52},"displayOriginPosition":{"class":"RotationalCameraDisplayPosition","hfov":165,"stereographicFactor":1,"pitch":-90,"yaw":0.52}},{"class":"Panorama","overlays":["this.overlay_2AB42D91_39C3_E52A_41C8_FF3C450ADDD4","this.overlay_2A7F2B56_39C2_6DD6_41A6_83EB02BA125B"],"hfov":360,"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":98.93,"panorama":"this.panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC","data":{"overlayID":"overlay_2AB42D91_39C3_E52A_41C8_FF3C450ADDD4"},"yaw":-82.15,"select":"this.overlay_2AB42D91_39C3_E52A_41C8_FF3C450ADDD4.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","distance":100,"backwardYaw":-85.61,"panorama":"this.panorama_2805375A_39C2_65DE_41BE_0DA740210B14","data":{"overlayID":"overlay_2A7F2B56_39C2_6DD6_41A6_83EB02BA125B"},"yaw":94.12,"select":"this.overlay_2A7F2B56_39C2_6DD6_41A6_83EB02BA125B.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_t.webp","id":"panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4","hfovMax":130,"data":{"label":"Caminhos do devoto 3"},"label":trans('panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":5,"height":5120,"url":"media/panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_0/{face}/0/{row}_{column}.webp","tags":"ondemand","width":30720,"colCount":30},{"class":"TiledImageResourceLevel","rowCount":3,"height":3072,"url":"media/panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_0/{face}/1/{row}_{column}.webp","tags":"ondemand","width":18432,"colCount":18},{"class":"TiledImageResourceLevel","rowCount":2,"height":2048,"url":"media/panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_0/{face}/2/{row}_{column}.webp","tags":"ondemand","width":12288,"colCount":12},{"class":"TiledImageResourceLevel","rowCount":1,"height":1024,"url":"media/panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_0/{face}/3/{row}_{column}.webp","tags":["ondemand","preload"],"width":6144,"colCount":6}]},"thumbnailUrl":"media/panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_t.webp"}]},{"class":"PanoramaCamera","initialSequence":"this.sequence_2862784B_39C2_AB3E_41C4_ED02D6575121","id":"panorama_2805375A_39C2_65DE_41BE_0DA740210B14_camera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","hfov":120,"pitch":0,"yaw":0}},{"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressBackgroundColorRatios":[0],"doubleClickAction":"none","subtitlesFontColor":"#FFFFFF","vrThumbstickRotationStep":20,"progressRight":"33%","subtitlesTop":0,"progressOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowColor":"#000000","playbackBarLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingBottom":4,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderSize":0,"subtitlesFontSize":"3vmin","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"},"progressBackgroundColor":["#000000"],"subtitlesBottom":50,"progressBottom":10,"playbackBarBottom":5,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"progressBorderSize":0,"progressBarBorderRadius":2,"toolTipPaddingLeft":6,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"toolTipShadowColor":"#333138","playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBorderSize":0,"vrPointerColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"playbackBarRight":0,"id":"MainViewer","playbackBarHeadWidth":6,"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","progressLeft":"33%","firstTransitionDuration":0,"progressBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"class":"ViewerArea","vrPointerSelectionTime":2000,"minWidth":100,"minHeight":50,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipPaddingRight":6,"playbackBarBorderColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"width":"100%","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"toolTipFontFamily":"Arial","height":"100%","propagateClick":false},{"class":"Panorama","overlays":["this.overlay_2AC4DD8D_39C3_E53A_4181_B36EB3551ECD"],"hfov":360,"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-82.15,"panorama":"this.panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4","data":{"overlayID":"overlay_2AC4DD8D_39C3_E53A_4181_B36EB3551ECD"},"yaw":98.93,"select":"this.overlay_2AC4DD8D_39C3_E53A_4181_B36EB3551ECD.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_t.jpg","id":"panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC","hfovMax":130,"data":{"label":"caminhos do devoto 1"},"label":trans('panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":5,"height":5120,"url":"media/panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_0/{face}/0/{row}_{column}.webp","tags":"ondemand","width":30720,"colCount":30},{"class":"TiledImageResourceLevel","rowCount":3,"height":3072,"url":"media/panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_0/{face}/1/{row}_{column}.webp","tags":"ondemand","width":18432,"colCount":18},{"class":"TiledImageResourceLevel","rowCount":2,"height":2048,"url":"media/panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_0/{face}/2/{row}_{column}.webp","tags":"ondemand","width":12288,"colCount":12},{"class":"TiledImageResourceLevel","rowCount":1,"height":1024,"url":"media/panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_0/{face}/3/{row}_{column}.webp","tags":["ondemand","preload"],"width":6144,"colCount":6}]},"thumbnailUrl":"media/panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_t.webp"}]},{"class":"Panorama","overlays":["this.overlay_2A752B57_39C2_6DD6_41CC_C80063D47712"],"hfov":360,"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":94.12,"panorama":"this.panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4","data":{"overlayID":"overlay_2A752B57_39C2_6DD6_41CC_C80063D47712"},"yaw":-85.61,"select":"this.overlay_2A752B57_39C2_6DD6_41CC_C80063D47712.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_2805375A_39C2_65DE_41BE_0DA740210B14_t.webp","id":"panorama_2805375A_39C2_65DE_41BE_0DA740210B14","hfovMax":130,"data":{"label":"Caminhos do devoto 2"},"label":trans('panorama_2805375A_39C2_65DE_41BE_0DA740210B14.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":5,"height":5120,"url":"media/panorama_2805375A_39C2_65DE_41BE_0DA740210B14_0/{face}/0/{row}_{column}.webp","tags":"ondemand","width":30720,"colCount":30},{"class":"TiledImageResourceLevel","rowCount":3,"height":3072,"url":"media/panorama_2805375A_39C2_65DE_41BE_0DA740210B14_0/{face}/1/{row}_{column}.webp","tags":"ondemand","width":18432,"colCount":18},{"class":"TiledImageResourceLevel","rowCount":2,"height":2048,"url":"media/panorama_2805375A_39C2_65DE_41BE_0DA740210B14_0/{face}/2/{row}_{column}.webp","tags":"ondemand","width":12288,"colCount":12},{"class":"TiledImageResourceLevel","rowCount":1,"height":1024,"url":"media/panorama_2805375A_39C2_65DE_41BE_0DA740210B14_0/{face}/3/{row}_{column}.webp","tags":["ondemand","preload"],"width":6144,"colCount":6}]},"thumbnailUrl":"media/panorama_2805375A_39C2_65DE_41BE_0DA740210B14_t.webp"}]},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Image_2EA59958_3A7D_ADDA_41A2_B99EC4CAD76E","left":"1%","data":{"name":"Image"},"url":trans('Image_2EA59958_3A7D_ADDA_41A2_B99EC4CAD76E.url'),"class":"Image","minHeight":1,"minWidth":1,"verticalAlign":"middle","top":"2%","scaleMode":"fit_inside","width":"10%","height":"10%","propagateClick":false},{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_35B17A65_39C2_AFEA_41C0_BA61442CBBDC_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2864E5EE_39C2_64F6_41C1_EA0B0E6A71F4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","media":"this.panorama_2805375A_39C2_65DE_41BE_0DA740210B14","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2805375A_39C2_65DE_41BE_0DA740210B14_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}]},{"class":"MediaAudio","data":{"label":"noites trai\u00e7oeiras"},"audio":"this.audiores_28F3C9E6_39CD_ACF6_41C1_7BF68A40C850","id":"audio_2895EFF6_39CE_64D6_41C2_727721AA11FE","autoplay":true},{"class":"PanoramaCameraSequence","id":"sequence_2863984B_39C2_AB3E_41BE_1AE9CE537611","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"class":"PanoramaCameraSequence","id":"sequence_32F26CB9_39C2_AB5A_41B1_1BFD37DC2D69","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"data":{"hasPanoramaAction":true,"label":"GoToCaminhosDoDevoto1"},"id":"overlay_2AB42D91_39C3_E52A_41C8_FF3C450ADDD4","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":-82.15,"pitch":-0.29,"scaleMode":"fit_inside","hfov":12,"data":{"label":"GoToCaminhosDoDevoto1"},"vfov":12,"image":"this.AnimatedImageResource_2C37A5D0_3AC6_A52A_41C2_5EDF718FE50E"}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_2A30FAD4_39C2_AF2A_41BD_2FB67081CDC7"]},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":94.12,"pitch":3.53,"scaleMode":"fit_inside","hfov":10.5,"data":{"label":"GoToCaminhosDoDevoto2"},"vfov":10.5,"image":"this.AnimatedImageResource_2C3755D0_3AC6_A52A_41CC_ADF4B9D04E51"}],"id":"overlay_2A7F2B56_39C2_6DD6_41A6_83EB02BA125B","maps":[],"data":{"label":"GoToCaminhosDoDevoto2"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_2A4EDB60_39C2_6DEA_41BB_1DDF499DD6B8"]},{"class":"PanoramaCameraSequence","id":"sequence_2862784B_39C2_AB3E_41C4_ED02D6575121","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":98.93,"pitch":2.04,"scaleMode":"fit_inside","hfov":12,"data":{"label":"GoToCaminhosDoDevoto3"},"vfov":12,"image":"this.AnimatedImageResource_2C37E5D0_3AC6_A52A_4198_18BC778DF630"}],"id":"overlay_2AC4DD8D_39C3_E53A_4181_B36EB3551ECD","maps":[],"data":{"label":"GoToCaminhosDoDevoto3"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_2A52ADC1_39C3_E52A_41C6_0C320CDE2810"]},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":-85.61,"pitch":0.28,"scaleMode":"fit_inside","hfov":10.5,"data":{"label":"GoToCaminhosDoDevoto3"},"vfov":10.5,"image":"this.AnimatedImageResource_2C3705D0_3AC6_A52A_41BD_1CCB4D5A4048"}],"id":"overlay_2A752B57_39C2_6DD6_41CC_C80063D47712","maps":[],"data":{"label":"GoToCaminhosDoDevoto3"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_2DE1A815_39C2_EB2A_418F_1B4BCF5DBABF"]},{"class":"AudioResource","url":trans('audiores_28F3C9E6_39CD_ACF6_41C1_7BF68A40C850.url'),"id":"audiores_28F3C9E6_39CD_ACF6_41C1_7BF68A40C850"},{"class":"AnimatedImageResource","rowCount":8,"levels":[{"class":"ImageResourceLevel","height":1920,"url":"media/res_2F933C57_3A3D_EBD7_41CC_5407A6A4F48D_0.webp","width":1440}],"colCount":6,"finalFrame":"first","id":"AnimatedImageResource_2C37A5D0_3AC6_A52A_41C2_5EDF718FE50E","frameDuration":33,"frameCount":43},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","id":"HotspotPanoramaOverlayArea_2A30FAD4_39C2_AF2A_41BD_2FB67081CDC7","displayTooltipInTouchScreens":true},{"class":"AnimatedImageResource","rowCount":8,"levels":[{"class":"ImageResourceLevel","height":1920,"url":"media/res_2F933C57_3A3D_EBD7_41CC_5407A6A4F48D_0.webp","width":1440}],"colCount":6,"finalFrame":"first","id":"AnimatedImageResource_2C3755D0_3AC6_A52A_41CC_ADF4B9D04E51","frameDuration":33,"frameCount":43},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","id":"HotspotPanoramaOverlayArea_2A4EDB60_39C2_6DEA_41BB_1DDF499DD6B8","displayTooltipInTouchScreens":true},{"class":"AnimatedImageResource","rowCount":8,"levels":[{"class":"ImageResourceLevel","height":1920,"url":"media/res_2F933C57_3A3D_EBD7_41CC_5407A6A4F48D_0.webp","width":1440}],"colCount":6,"finalFrame":"first","id":"AnimatedImageResource_2C37E5D0_3AC6_A52A_4198_18BC778DF630","frameDuration":33,"frameCount":43},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","id":"HotspotPanoramaOverlayArea_2A52ADC1_39C3_E52A_41C6_0C320CDE2810","displayTooltipInTouchScreens":true},{"class":"AnimatedImageResource","rowCount":8,"levels":[{"class":"ImageResourceLevel","height":1920,"url":"media/res_2F933C57_3A3D_EBD7_41CC_5407A6A4F48D_0.webp","width":1440}],"colCount":6,"finalFrame":"first","id":"AnimatedImageResource_2C3705D0_3AC6_A52A_41BD_1CCB4D5A4048","frameDuration":33,"frameCount":43},{"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","id":"HotspotPanoramaOverlayArea_2DE1A815_39C2_EB2A_418F_1B4BCF5DBABF","displayTooltipInTouchScreens":true}],"layout":"absolute","scripts":{"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"clone":TDV.Tour.Script.clone,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setValue":TDV.Tour.Script.setValue,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showWindowBase":TDV.Tour.Script.showWindowBase,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPixels":TDV.Tour.Script.getPixels,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getKey":TDV.Tour.Script.getKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"openLink":TDV.Tour.Script.openLink,"getOverlays":TDV.Tour.Script.getOverlays,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizShowScore":TDV.Tour.Script.quizShowScore,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"init":TDV.Tour.Script.init,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizStart":TDV.Tour.Script.quizStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"unloadViewer":TDV.Tour.Script.unloadViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"createTween":TDV.Tour.Script.createTween,"getMainViewer":TDV.Tour.Script.getMainViewer,"enableVR":TDV.Tour.Script.enableVR,"cloneBindings":TDV.Tour.Script.cloneBindings,"initAnalytics":TDV.Tour.Script.initAnalytics,"disableVR":TDV.Tour.Script.disableVR,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"isPanorama":TDV.Tour.Script.isPanorama,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeJS":TDV.Tour.Script.executeJS,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"translate":TDV.Tour.Script.translate,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setLocale":TDV.Tour.Script.setLocale,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"shareSocial":TDV.Tour.Script.shareSocial,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce},"class":"Player","minWidth":0,"scrollBarColor":"#000000","minHeight":0,"width":"100%","left":826.6,"height":"100%","gap":10,"watermark":false,"propagateClick":false,"backgroundColorRatios":[0],"xrPanelsEnabled":true,"defaultMenu":["fullscreen","mute","rotation"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.1, Tue Aug 25 2026