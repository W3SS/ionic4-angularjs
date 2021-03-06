/**
 * iOS Toast Enter Animation
 */
export default function iOSEnterAnimation(Animation, baseElm, position) {
    var baseAnimation = new Animation();
    var wrapperAnimation = new Animation();
    var wrapperEle = baseElm.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', 10 + "px");
            break;
        case 'middle':
            var topPosition = Math.floor(baseElm.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = topPosition + "px";
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', 0 - 10 + "px");
            break;
    }
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(wrapperAnimation);
}
