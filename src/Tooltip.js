import React from 'react';

class Tooltip extends React.Component {

    render() {
        this.onTooltipToggle();

        return (
            <span id='tooltip-child' className='tooltip-top'>{this.props.message}</span>
        );
    }

    onTooltipToggle() {
        const TOP_MARGIN = 25;

        function handleTooltipToggle(tooltipParent, tooltipChild) {
            tooltipParent.addEventListener('mouseover', function () {
                const parentRec = tooltipParent.getBoundingClientRect();
                const childRec = tooltipParent.getBoundingClientRect();
                const tooltipChildClass = tooltipChild.classList;

                if (parentRec.y + childRec.height > parentRec.height + (childRec.height + TOP_MARGIN)) {
                    tooltipChildClass.remove('tooltip-bottom');
                    tooltipChildClass.add('tooltip-top');
                } else {
                    tooltipChildClass.remove('tooltip-top');
                    tooltipChildClass.add('tooltip-bottom');
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function () {
            const tooltipChild = document.querySelector('#tooltip-child');
            const tooltipParent = document.querySelector('#tooltip-parent');

            handleTooltipToggle(tooltipParent, tooltipChild);
        });
    }
}
export default Tooltip;
