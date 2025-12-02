import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>

          {/* ============================== */}
          {/* MANULIFE (via Asian Technology Solutions) */}
          {/* ============================== */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2022 – Present"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Manulife Indonesia — Jakarta, Indonesia</h4>
            <p>
              Experienced in automation test development, test scenario creation, traceability matrix management, and System Integration Testing (SIT). Contributed to the migration of a Call Center application, achieving over 30% cost efficiency. Skilled in bug tracking, retesting, regression testing, smoke testing, and providing support to the Bancassurance team.
            </p>

          </VerticalTimelineElement>

          {/* ============================== */}
          {/* CIMB NIAGA (via Mitra Integrasi Informatika) */}
          {/* ============================== */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2020 – Oct 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Quality Assurance</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Bank CIMB Niaga Tbk — Jakarta, Indonesia</h4>
            <p>
              Experienced in System Integration Testing (SIT), User Acceptance Testing (UAT), bug tracking and follow-up, retesting, regression testing, smoke testing, and post-verification testing.
            </p>
          </VerticalTimelineElement>

          {/* ============================== */}
          {/* TOYOTA (Astra International) */}
          {/* ============================== */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2018 – Oct 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mobile App Tester</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Astra International Tbk – Toyota — Jakarta, Indonesia</h4>
            <p>
              Skilled in User Acceptance Testing (UAT), bug tracking and follow-up, retesting, and smoke testing.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>

  );
}

export default Timeline;