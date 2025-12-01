import React from 'react';
import './DeveloperSetup.css';

function DeveloperSetup() {
  return (
    <section className="dev-setup">
      <h2>My Development Setup</h2>

      <div className="setup-grid">
        <div className="setup-item">
          <h3>VS Code Configuration</h3>
          <ul>
            <li><strong>Theme:</strong> Dark +</li>
            <li><strong>Extensions:</strong>
              <ul>
                <li>Code Runner</li>
                <li>Debugger for Java</li>
                <li>Docker</li>
                <li>endwise</li>
                <li>ERD Editor</li>
                <li>Github Codespace</li>
                <li>HTML CSS Support</li>
                <li>Jupyter</li>
                <li>Live Server</li>
                <li>Maven for Java</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>SQLite</li>
                <li>WSL</li>
                <li>Test Runner for Java</li>
              </ul>
            </li>
            <li><strong>Settings:</strong> Auto-save disabled, Format on save</li>
          </ul>
        </div>

        <div className="setup-item">
          <h3>Terminal Setup</h3>
          <ul>
            <li><strong>Terminal:</strong> Windows Terminal</li>
            <li><strong>Shell:</strong> Powershell</li>
            <li><strong>Plugins:</strong> git, npm, node, docker</li>
          </ul>
        </div>

        <div className="setup-item">
          <h3>Editor Font</h3>
          <ul>
            <li><strong>Font Family:</strong> Consolas, 'Courier New', monospace</li>
            <li><strong>Font Size:</strong> 14px</li>
            <li><strong>Ligatures:</strong> Disabled</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSetup;